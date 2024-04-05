import { useState, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import CustomInput from "../../Components/CustomInput";
import { UserLayout } from "../../Components/Layout/UserLayout";
import "./bookdetail.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import Ellipse from "../../Assets/images/Ellipse 1.png";
import preview from "../../Assets/images/image_74-removebg-preview.png";
import Group from "../../Assets/images/Group 1000001829.png";
import Ellipse4 from "../../Assets/images/Ellipse 44.png";
import Star from "../../Assets/images/Star 1.png";
import { Container, Row, Col } from "react-bootstrap";

import Form from "react-bootstrap/Form";
// import {
//   AuthorList1,
//   Logo,
//   SmallAnime1,
//   SmallAnime2,
//   User_icon_plus,
//   User_icon_white,
//   BestSellingBooks,
//   BestSellingBook1,
//   BestSellingBook2,
//   BestSellingBook3,
//   BestSellingBook4,
//   BestSellingBook5,
//   BestSellingBook6,
//   BestSellingBook7,
//   BestSellingBook8,
//   BestSellingBook9,
//   BestSellingBook10,
//   BestSellingBook11,
//   BestSellingBook12,
// } from "../../Assets/images";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faCartShopping,
  faEnvelope,
  faEye,
  faHeart,
  faList,
  faSearch,
  faStar,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  BannerBooks,
  Cart_icon_pink,
  CompletedNovelB1,
  CompletedNovelB2,
  CompletedNovelB3,
  CompletedNovelB4,
  FeaturedB1,
  FeaturedB2,
  FeaturedB3,
  HarryPotterBook,
  Logo,
  ManaAnime,
  ManaDisplayImg,
  MyRebbetsBook,
  PopularAnime,
  PopularTagAfter,
  PopularTagBefore,
  Product_Icon,
  TopAuthorAfter,
  TopAuthorBefore,
  TopAuthorBook1,
  TopAuthorBook2,
  TopAuthorBook3,
  TopAuthorCartoon,
  User_Icon,
  User_icon_pink,
  User_icon_plus,
  User_icon_white,
} from "../../Assets/images";
import bookimg from "../../Assets/images/ORJ9ZD1 2.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";

import { BookListingCover } from "../../Assets/images";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";

export const ProductDetails = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const [ads, setAds] = useState([]);
  const { id } = useParams();

  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";

  const [data, setData] = useState({});

  const [books, setBooks] = useState([]);
  const [reviewData, setReviewData] = useState({
    book_id: id,
  });

  const [chaptervoice, setChapterVoice] = useState(1);
  const [chapterutterance, setChapterUtterance] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [formData, setFormData] = useState({});
  const [modalData, setModalData] = useState({});
  const [CapterShow, setChapterShow] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [isLooping, setIsLooping] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [voice, setVoice] = useState(1);
  const [utterance, setUtterance] = useState(null);

  const LoginToken = localStorage.getItem("loginUser");

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData,
      rating: newRating,
    });
  };

  const chapterData = (paramId) => {
    document.title = "Tim User | Book Detail";
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_view/${paramId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          // 'Authorization': `Bearer ${LogoutData}`
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);

        setData(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const chapterDataLogin = (LoginparamId) => {
    document.title = "Tim User | Book Detail";
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/book_view/${LoginparamId}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginToken}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);

        setData(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };
  const [textToSpeech, setTextToSpeech] = useState(false);

  const reviewSubmit = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");

    const formDataMethod = new FormData();

    for (const key in reviewData) {
      formDataMethod.append(key, reviewData[key]);
    }

    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/review_add_update`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
        body: formDataMethod,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setShowModal(false);
        setReviewModal(true);
        setTimeout(() => {
          setReviewModal(false);
        }, 1000);

        chapterDataLogin(id);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error during fetch:", error);
      });
  };

  const handleCheckboxChange = () => {
    // Toggle the state of textToSpeech when the checkbox is clicked
    setTextToSpeech(!textToSpeech);
  };

  const BuyChapter = (chapterID) => {
    document.querySelector(".loaderBox").classList.remove("d-none");

    const formData = new FormData();
    formData.append("chapter_id", chapterID);
    formData.append("text_to_speech_fee", textToSpeech); // Include the text_to_speech value in the FormData

    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/book_purchase/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setShowModal(false);
        setShowModal1(true);
        setTimeout(() => {
          setShowModal1(false);
        }, 1000);
        chapterDataLogin(id);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error during fetch:", error);
      });
  };

  const GetOrderHistory = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/view-order-history`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${LoginToken}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log("order", data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };

  const PaymentModal = (amount) => {
    setModalData(amount);
    setShowModal(true);
  };

  useEffect(() => {
    console.log(modalData);
  }, [modalData]);

  useEffect(() => {
    if (!LoginToken) {
      setChapterShow(false);
      chapterData(id);
    } else {
      chapterDataLogin(id);
      setChapterShow(true);
    }

    GetOrderHistory();
  }, []);

  const tags = [
    ["Tag ", "Tag ", "Tag "],
    ["Tag ", "Tag ", "Tag "],
    ["Tag ", "Tag ", "Tag "],
  ];

  const handleStart = (chapterId) => {
    if (!isPlaying) {
      const chapter = data?.chapters.find((item) => item.id === chapterId);
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = chapter?.description;
      utterance.rate = chaptervoice;
      utterance.onend = () => {
        if (isLooping) {
          handleStart(chapterId);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
          setCurrentChapter(null);
        }
      };

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);

      setIsPlaying(true);
      setIsPaused(false);
      setCurrentChapter(chapterId);
      setChapterUtterance(utterance);
    }
  };

  const chapterupdateSpeechRate = () => {
    const speeds = [1, 1.5, 2, 2.5];
    const currentIndex = speeds.indexOf(chaptervoice);
    let newIndex = currentIndex + 1;

    if (newIndex >= speeds.length) {
      newIndex = 0;
    }

    const newVoice = speeds[newIndex];
    setChapterVoice(newVoice);

    if (chapterutterance) {
      window.speechSynthesis.cancel();
      chapterutterance.rate = newVoice;
      window.speechSynthesis.speak(chapterutterance);

      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  useEffect(() => {
    if (chapterutterance) {
      setChapterUtterance(chapterutterance);
      chapterutterance.rate = chaptervoice;
    }
  }, [chaptervoice]);

  const handlePause = () => {
    if (!isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const handleResume = () => {
    if (isPaused && currentChapter !== null) {
      const chapter = data?.chapters.find((item) => item.id === currentChapter);
      const utterance = new SpeechSynthesisUtterance();
      utterance.text = chapter?.description;
      utterance.onend = () => {
        if (isLooping) {
          handleStart(currentChapter);
        } else {
          setIsPlaying(false);
          setIsPaused(false);
          setCurrentChapter(null);
        }
      };
      window.speechSynthesis.resume();
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setCurrentChapter(null);
  };

  const handleLoopToggle = () => {
    setIsLooping(!isLooping);
  };

  const handleStarts = () => {
    const newUtterance = new SpeechSynthesisUtterance(data?.description);
    newUtterance.rate = voice;
    newUtterance.onend = () => {
      setIsPlay(false);
      setIsPause(false);
    };

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(newUtterance);
    setIsPlay(true);
    setIsPause(false);
    setUtterance(newUtterance);
  };

  const updateSpeechRate = () => {
    const speeds = [1, 1.5, 2, 2.5];
    const currentIndex = speeds.indexOf(voice);
    let newIndex = currentIndex + 1;

    if (newIndex >= speeds.length) {
      newIndex = 0;
    }

    const newVoice = speeds[newIndex];
    setVoice(newVoice);

    if (utterance) {
      window.speechSynthesis.cancel();
      const updatedUtterance = new SpeechSynthesisUtterance(data?.description);
      updatedUtterance.rate = newVoice;
      updatedUtterance.onend = () => {
        setIsPlay(false);
        setIsPause(false);
      };
      window.speechSynthesis.speak(updatedUtterance);
      setIsPlay(true);
      setIsPause(false);
      setUtterance(updatedUtterance);
    }
  };

  useEffect(() => {
    if (utterance) {
      setUtterance(utterance);
      utterance.rate = voice;
    }
  }, [voice]);

  const handlePauses = () => {
    if (!isPause) {
      window.speechSynthesis.pause();
      setIsPlay(false);
      setIsPause(true);
    }
  };

  const handleResumes = () => {
    if (isPause) {
      window.speechSynthesis.resume();
      setIsPlay(true);
      setIsPause(false);
    }
  };

  const handleStops = () => {
    window.speechSynthesis.cancel();
    setIsPlay(false);
    setIsPause(false);
  };

  const handleCheckboxClick = (id) => {
    const formData = new FormData();
    formData.append("chapter_id", id);

    fetch(
      `https://custom.mystagingserver.site/Tim-WDLLC/public/api/user/book_purchase/${id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LoginToken}`,
        },
        body: formData,
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data);
        setShowModal(false);
        setShowModal1(true);
        setTimeout(() => {
          setShowModal1(false);
        }, 1000);
        chapterDataLogin(id);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.error("Error during fetch:", error);
      });
  };

  return (
    <>
      <UserLayout>
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">BOOK DETAIL </h1>
              </div>
            </div>
          </div>
        </section>
        <section class="cover">
          <div class="container-fluid">
            <div class="conatiner">
              <div class="row">
                <div class="col-md-4">
                  <p>RANKING NO:1</p>
                  <div class="rev">
                    <span class="fa fa-star checked star rating"></span>
                    <span class="fa fa-star checked star  rating"></span>
                    <span class="fa fa-star checked star  rating"></span>
                    <span class="fa fa-star checked star  rating"></span>
                    <span class="fa fa-star checked star rate"></span>
                  </div>
                  <p class="review">61,324 Customer Reviews</p>
                  <div class="btnrw">
                    <button>
                      Add to Library <i class="fa-solid fa-book-open icon"></i>
                    </button>
                  </div>
                  <div class="imgrw">
                    <img src={base_url + data?.image} class="img-fluid" />
                    {/* <img class="img-fluid" src={bookimg} /> */}
                    <img class="img-fluid pos" src={Group} />
                  </div>
                  <div class="btnrw">
                    <button class="book">9 Chapters/Week </button>
                  </div>
                  <div class="btnrw">
                    <button class="book1">Book Category: Type </button>
                  </div>
                  <div class="btnrw">
                    <button class="book2">Type: Translated</button>
                  </div>
                  <div class="btnrw">
                    <button class="book3">Genre: Action </button>
                  </div>
                  <div class="btnrw">
                    <button class="book2">Chapters: 0/241 </button>
                  </div>
                  <div class="btnrw">
                    <button class="book4">Views: 841 </button>
                  </div>

                  <Container className="justify-content-center m-auto text-center mt-4">
<p>Number Of Vote: </p>
<p>Maturity Rating: </p>
 


                    <p>Tags</p>
                    <Row className="mb-2 mt-4 gap-4">
                      {tags.map((tagRow, rowIndex) => (
                        <Row key={rowIndex} className=" ml-4 gap-3">
                          {tagRow.map((tag, colIndex) => (
                            <Col key={colIndex} className="tabtag px-2 py-2">
                              {tag}
                            </Col>
                          ))}
                        </Row>
                      ))}
                    </Row>
                  </Container>
                </div>

                <div class="col-md-8">
                  <div class="row">
                    <div class="col-md-6">
                      <h3>LAST HOPE</h3>
                      <div className="     ">
                        <button>
                          Vote Now <i class="fas fa-vote-yea icon"></i>
                        </button>
                        <button className="  ml ">
                          Notifications <i class="fa-solid fa-bell icon"></i>
                        </button>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="profile ">
                        <div>
                          <img class="img-fluid" src={Ellipse4} />
                        </div>
                        <div>
                          <p class="prof">Author Name </p>
                          <p class="top">Top Fans 11,442</p>
                          <p class="more"> More By This Author</p>
                        </div>
                      </div>
                      <div className="last_update">
                        {" "}
                        <button>Last Update 3 days ago</button>
                      </div>

                      <div class="profile">
                        <img class="img-fluid imgicon " src={preview} />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <div class="syn">
                        <h4>Synopsis</h4>
                        <p class="txt">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="select">
                    <div class="row">
                      <div class="col-md-6">
                        <p class="chap">Chapter 25 | Chapter Name</p>
                      </div>
                      <div class="col-md-6">
                        <div class="new">
                          <button class="chapbtn"  > NEW! </button>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-md-6">
                        <p class="chap">Chapter 24 | Chapter Name</p>
                      </div>
                      <div class="col-md-6">
                        <div class="new">
                          <button class="chapbtn"> NEW! </button>
                        </div>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-md-12">
                        <select
                          class="form-select acpara accordation"
                          aria-label="Default select example"
                        >
                          <option selected>Chapter 1 | Lorem Ipsum</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-md-12">
                        <select
                          class="form-select accordpara accord"
                          aria-label="Default select example"
                        >
                          <option selected>Chapter 2 | Lorem Ipsum</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-md-12">
                        <select
                          class="form-select accordpara accord"
                          aria-label="Default select example"
                        >
                          <option selected>Chapter 3 | Lorem Ipsum</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-md-12">
                        <select
                          class="form-select accordpara accord"
                          aria-label="Default select example"
                        >
                          <option selected>Chapter 4 | Lorem Ipsum</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                    <div class="row mt-4">
                      <div class="col-md-12">
                        <select
                          class="form-select accordpara accord"
                          aria-label="Default select example"
                        >
                          <option selected>Chapter 4 | Lorem Ipsum</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-md-3">
                        <h3>4.5 </h3>
                      </div>
                    </div>
                  </div>




                  <div className="row">
                    <div className="book__listing-pagination"  >
                      <nav aria-label="Page navigation example">
                        <ul class="pagination"  >
                          <li class="page-item">
                            <a class="page-link page_link-active" href="#">
                              1
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              4
                            </a>
                          </li>
                          ...
                          <li class="page-item">
                            <a class="page-link" href="#">
                              61
                            </a>
                          </li>
                          <li>
                            {" "}
                            <div className="select-chapter   mb-2   gap-4   ">
                              {/* <p className="story">Story Status </p> */}

                              <Form.Select
                                aria-label="Default select example"
                                className="book-release-input" id="select-chapter"
                              >
                                <option>Select  Chapter</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </div>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div class="rate">
                    <div class="container-fluid">
                      <div class="conatiner">
                        <div class="ratebg">
                          <div class="row justify-content-center">
                            <div class="col-sm-12 col-lg-3 my-auto ">
                              <div class="star">
                                <h2>4.5</h2>
                                <img class="img-fluid" src={Star} />
                              </div>
                              <button>653 reviews</button> <br />
                              <button class="rev">Add Review</button>
                            </div>

                            <div class="col-12 col-sm-12 col-lg-2 my-auto ">
                              <div class="num">
                                <p>5 </p>
                                <i class="fa-solid fa-star numstar"></i>
                                <div class="line"></div>
                              </div>
                              <div class="num">
                                <p>4 </p>
                                <i class="fa-solid fa-star numstar"></i>
                                <div class="line1"></div>
                              </div>
                              <div class="num">
                                <p>3 </p>
                                <i class="fa-solid fa-star numstar"></i>
                                <div class="line2"></div>
                              </div>
                              <div class="num">
                                <p>2 </p>
                                <i class="fa-solid fa-star numstar"></i>
                                <div class="line3"></div>
                              </div>
                              <div class="num">
                                <p>1 </p>
                                <i class="fa-solid fa-star numstar"></i>
                                <div class="line4"></div>
                              </div>
                            </div>
                            <div class="col-12 col-sm-12 col-lg-7 ">
                              <div class="strong">
                                <div class="num mb-2 ">
                                  <div>
                                    <img
                                      class="img-fluid starimg"
                                      src={Ellipse}
                                    />
                                  </div>
                                  <div>
                                    <p class="review">
                                      Lorem ipsum dolor sit amet
                                    </p>
                                    <div className="bookdetail-date d-flex">
                                      <span class="rev">13-Feb-2024</span>
                                      <span class="rev">
                                        Michael Anderson
                                      </span>{" "}
                                    </div>
                                  </div>
                                  <div className="stars">
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                  </div>
                                </div>
                                <div>
                                  <p class="revpara mb-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, <br />
                                    sed do eiusmod tempor incididunt ut labore{" "}
                                  </p>
                                </div>

                                <div class="num">
                                  <div>
                                    <img
                                      class="img-fluid starimg"
                                      src={Ellipse}
                                    />
                                  </div>
                                  <div>
                                    <p class="review">
                                      Lorem ipsum dolor sit amet
                                    </p>
                                    <div className="bookdetail-date d-flex">
                                      <span class="rev">13-Feb-2024</span>
                                      <span class="rev">
                                        Michael Anderson
                                      </span>{" "}
                                    </div>
                                  </div>
                                  <div className="stars">
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                    <i class="fa-solid fa-star numstar"></i>
                                  </div>
                                </div>
                                <div className=" mb-2 ">
                                  <p class="revpara">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, <br />
                                    sed do eiusmod tempor incididunt ut labore{" "}
                                  </p>
                                </div>

                                {/* <button class="rev">Show More</button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
 
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-sec jost-font">
          <div className="container">
            <div className="row footer__first">
              <div className="col-lg-4">
                <div className="footer__about">
                  <div className="footer__logo">
                    <Link to="!#">
                      <img src={Logo} />
                    </Link>
                  </div>
                  <div className="footer__about-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry Lorem Ipsum has been the industry's
                      standard dummy text ever since the
                    </p>
                  </div>
                  <div className="follow__social-icons">
                    <a href="javascript:;" className="follow__social-icon">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="javascript:;" className="follow__social-icon">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="javascript:;" className="follow__social-icon">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="javascript:;" className="follow__social-icon">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer__quick-links">
                  <h3 className="foooter__subhead">Quick Links</h3>
                  <ul className="footer__links">
                    <li className="footer__link">
                      <Link to="javascript:;">About</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Newsroom</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Brand Guidline</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer__contact-links">
                  <h3 className="foooter__subhead">Contacts</h3>
                  <ul className="footer__links">
                    <li className="footer__link">
                      <Link to="javascript:;">Translators & Editors</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Commercial</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Audio business</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Help & Service</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">DMCA Notification</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Webnovel Forum</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Online service</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Vulnerability Report</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer__resouses-links">
                  <h3 className="foooter__subhead">Contacts</h3>
                  <ul className="footer__links">
                    <li className="footer__link">
                      <Link to="javascript:;">Tags</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Download Apps</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Be an Author</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Help Center</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Privacy Policy</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Terms of Service</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Keywords</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Affiliate</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer__referrals-links">
                  <h3 className="foooter__subhead">Referrals</h3>
                  <ul className="footer__links">
                    <li className="footer__link">
                      <Link to="javascript:;">QiDian</Link>
                    </li>
                    <li className="footer__link">
                      <Link to="javascript:;">Yuewen</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="footer__copyright">
                <p>Copyright 2024 All right reserved. Little literature club</p>
              </div>
            </div>
          </div>
        </section>
      </UserLayout>
    </>
  );
};
