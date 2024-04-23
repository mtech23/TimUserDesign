import { useState, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import CustomModal from "../../Components/CustomModal";
import CustomButton from "../../Components/CustomButton";
import Accordion from "react-bootstrap/Accordion";
import CustomInput from "../../Components/CustomInput";
import preview from "../../Assets/images/image_74-removebg-preview.png";
import CustomPagination from '../../Components/CustomPagination'
import CustomCard from "../../Components/CustomCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
import Ellipse4 from "../../Assets/images/Ellipse 44.png";
import { UserLayout } from "../../Components/Layout/UserLayout";
import "./style.css";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS
import Ellipse from "../../Assets/images/Ellipse 1.png";
import animated from "../../Assets/images/animated.png";
import Form from "react-bootstrap/Form";

import { Container, Row, Col } from "react-bootstrap";
import Star from "../../Assets/images/Star 1.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";

import { BookListingCover } from "../../Assets/images";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";

export const ProductDetail = ({ eventKey, children }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4)

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const [books, setBooks] = useState([]);

  const reusableSetting = (item, centerMode) => {


    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: item,
      slidesToScroll: 1,
      centerMode: centerMode,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
          },
        },
      ],
    };
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filterData = data?.chapters?.filter(item =>
    item?.title.toLowerCase().includes(inputValue.toLowerCase())
  );
  const currentItems = filterData?.slice(indexOfFirstItem, indexOfLastItem);
  console.log("currentItems", currentItems)

  const { id } = useParams();
  const settingsForFourItems = reusableSetting(4, false);

  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";


  const [reviewData, setReviewData] = useState({
    book_id: id,
  });
  const [showcomments, setShowComments] = useState(false)
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



















  const ratingQuality = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData, writing_quality: newRating
    })
  };

  const ratingStory = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData, story_development: newRating
    })
  };

  const ratingDesign = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData, character_design: newRating
    })
  };

  const ratingStability = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData, updating_stability: newRating
    })
  };

  const ratingWorld = (newRating) => {
    console.log(newRating);
    setReviewData({
      ...reviewData, world_background: newRating
    })
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
  const [ads, setAds] = useState([]);
  const chapterupdateSpeechRate = () => {
    const speeds = [1, 1.5, 2, 2.5];
    const currentIndex = speeds.indexOf(chaptervoice);
    let newIndex = currentIndex + 1;

    if (newIndex >= speeds?.length) {
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



  const adsListing = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/ads_listing",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        setAds(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
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

    if (newIndex >= speeds?.length) {
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
  const BookListing = () => {
    document.querySelector(".loaderBox").classList.remove("d-none");
    fetch(
      "https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_listing",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(data.data);
        setBooks(data.data);
      })
      .catch((error) => {
        document.querySelector(".loaderBox").classList.add("d-none");
        console.log(error);
      });
  };


  useEffect(() => {
    adsListing()
    BookListing()
  }, [])



  const handleshowcomment = () => {
    setShowComments(true)
  }
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
        <section className="cover">
          <div className="container">
            <div className="dashCard">
              <div className="row mb-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-3 mb-4">
                      <div className="productImage mb-4">
                        <img
                          src={base_url + data?.image}
                          className="img-fluid"
                        />
                      </div>

                      <div className="justify-content-center mb-4 m-auto text-center ">
                        <span className="mb-2  d-flex  justify-content-center  m-auto text-center">
                          <p className=" tabtags w-100 mx-auto p-2 text-center">
                            {" "}
                            BookCategory : {data?.category?.name}{" "}
                          </p>
                        </span>
                        <span className="d-flex mb-2 justify-content-center ">
                          <p className=" tabtags w-100 mx-auto p-2 text-center">
                            {" "}
                            Type : {data?.types?.name}{" "}
                          </p>
                        </span>
                        <span className="d-flex   justify-content-center ">
                          <p className=" tabtags w-100 mx-auto p-2 text-center">
                            {" "}
                            Genre : {data?.genre?.name}{" "}
                          </p>
                        </span>
                      </div>

                      <Container className="justify-content-center m-auto text-center mt-4">
                        <h4>Tags</h4>
                        <Row className="mb-2 mt-4 gap-4">
                          {tags.map((tagRow, rowIndex) => (
                            <Row key={rowIndex} className=" ml-4 gap-3">
                              {tagRow.map((tag, colIndex) => (
                                <Col
                                  key={colIndex}
                                  className="tabtag px-2 py-2"
                                >
                                  {tag}
                                </Col>
                              ))}
                            </Row>
                          ))}
                        </Row>
                      </Container>
                      <div>
                        <div className="d-flex  gap-4 mb-2 mt-4 justify-content-center mb-4 m-auto text-center ">
                          <div>
                            {" "}
                            <p className="   mb-2">Author</p>
                            <p className="textsha   ">
                              {data?.user_info?.name}
                            </p>
                          </div>

                          <div>
                            {" "}
                            <p className="mb-2">Original Language</p>{" "}
                            <p className="textsha">English </p>
                          </div>
                          <div>
                            {" "}
                            <p className="mb-2">Release Date</p>{" "}
                            <p className="textsha"> {data?.release_date} </p>
                          </div>
                        </div>
                        <div className=" d-flex gap-4 mb-2  justify-content-center mb-4 m-auto text-center "></div>
                      </div>

                      <span className="mb-2    justify-content-center  m-auto text-center">
                        <p className="mb-2 ">Affiliated Group</p>
                        <p className=" tabtags w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2    justify-content-center  m-auto text-center">
                        <p className="mb-2 "> Original Publisher </p>
                        <p className=" tabtags mb-2 w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2    justify-content-center  m-auto text-center">
                        <p className="mb-2 ">Trenslater</p>
                        <p className=" tabtags mb-2 w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>

                      <span className="mb-2    justify-content-center  m-auto text-center">
                        <p className="mb-2 ">Affiliated Series</p>
                        <p className=" tabtags mb-2 w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                      <span className="mb-2    justify-content-center  m-auto text-center">
                        <p className="mb-2 "> Status</p>
                        <p className=" tabtags mb-2 w-100 mx-auto p-2 text-center">
                          {" "}
                          Lorem Ispurm
                        </p>
                      </span>
                    </div>

                    <div className="col-md-9 mb-4">
                      <div className="productInfo mb-4">
                        <div class="row">
                          <div class="col-md-6">
                            <h3>{data?.name}</h3>
                            <div className="     ">
                              <button className="nottext">
                                Vote Now <i class="fas fa-vote-yea icon"></i>
                              </button>
                              <button className="nottext  ml ">
                                Notifications{" "}
                                <i class="fa-solid fa-bell icon"></i>
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
                            <div className="last_update mb-4">
                              {" "}
                              <button className="nottext">
                                Last Update 3 days ago
                              </button>
                            </div>

                            <div class="profile mb-2">
                              {/* <img class="img-fluid imgicon " src={preview} /> */}

                              <div className="playbtns d-flex gap-12">
                                <div className="actionBtn">
                                  <button
                                    className="play"
                                    onClick={handleStarts}
                                    disabled={isPlay}
                                  >
                                    <i className="fa-solid fa-play"></i>
                                  </button>
                                </div>
                                <div className="actionBtn">
                                  <button
                                    className="play"
                                    onClick={updateSpeechRate}
                                  >
                                    {voice}X
                                  </button>
                                </div>

                                <div className="actionBtn">
                                  <button
                                    className="pause"
                                    onClick={handlePauses}
                                    disabled={!isPlay || isPause}
                                  >
                                    <i className="fa-regular fa-circle-pause"></i>
                                  </button>
                                </div>
                                <div className="actionBtn">
                                  <button
                                    className="resume"
                                    onClick={handleResumes}
                                    disabled={!isPause}
                                  >
                                    <i className="fa-solid fa-play"></i>
                                  </button>
                                </div>
                                <div className="actionBtn">
                                  <button
                                    className="stop"
                                    onClick={handleStops}
                                    disabled={!isPlay && !isPause}
                                  >
                                    <i className="fa-solid fa-stop"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* <div className="adiobtn d-flex">
                        </div> */}
                        {/* <h3 className="text-capitalize" id="title">{data?.name}</h3> */}
                        {/* <h5 className="text-warning mb-0">Synopsis </h5> */}

                        {/* {data?.price && (
                          <h4>
                            <span className="font-weight-bold">Price:</span>
                            {` $ ${data?.price}`}
                          </h4>
                        )} */}

                        {/* <p>{data?.description?.slice(0, 300)}</p> */}

                        <div class="row">
                          <div class="col-md-12">
                            <div class="syn">
                              <h4>Synopsis</h4>
                              <p class="txt">
                                {data?.description?.slice(0, 300)}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="mb-3">
                          <span className="font-weight-bold">Category:</span>{" "}
                          <span>{data?.category?.name}</span>
                        </p>
                        {currentItems?.length > 2 ? (
                          <p className="text-center">
                            <span className="text-success">
                              Recently {data?.latest_chap?.length} new chaper
                              added.
                            </span>
                          </p>
                        ) : (
                          ""
                        )}
                      </div>

                      {CapterShow ? (
                        <div className="row select">
                          <div className="col-md-12">
                            <Accordion defaultActiveKey="0">
                              {currentItems &&
                                currentItems?.map((item, index) => (
                                  <Accordion.Item eventKey={index} key={index}>
                                    <Accordion.Header
                                      className="acpara accordation"
                                      style={{
                                        // backgroundColor: "#f7944d",
                                        color: "black",
                                      }}
                                    >
                                      {`Chapter ${item?.id}`}{" "}
                                      {item?.latest && (
                                        // <span className="newChapter">
                                        //   New
                                        // </span>

                                        <div class="new">
                                          <button class="chapbtn">
                                            {" "}
                                            NEW!{" "}
                                          </button>
                                        </div>
                                      )}
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {item?.isPay ? (
                                        <>
                                          <div className="adiobtn d-flex">
                                            {" "}
                                            <h3 className="text-capitalize">
                                              {item?.title}
                                            </h3>
                                            {item.text_to_speech === true ? (
                                              <div className="playbtns d-flex gap-12">
                                                <div className="actionBtn">
                                                  <button
                                                    className="play"
                                                    onClick={() =>
                                                      handleStart(item?.id)
                                                    }
                                                    disabled={
                                                      isPlaying &&
                                                      currentChapter !==
                                                      item?.id
                                                    }
                                                  >
                                                    <i className="fa-solid fa-play"></i>
                                                  </button>
                                                </div>
                                                <div className="actionBtn">
                                                  <button
                                                    className="play"
                                                    onClick={
                                                      chapterupdateSpeechRate
                                                    }
                                                  >
                                                    {chaptervoice}X
                                                  </button>
                                                </div>
                                                <div className="actionBtn">
                                                  <div className="actionBtn">
                                                    <button
                                                      className="pause"
                                                      onClick={handlePause}
                                                      disabled={
                                                        !isPlaying || isPaused
                                                      }
                                                    >
                                                      <i className="fa-regular fa-circle-pause"></i>
                                                    </button>
                                                  </div>
                                                </div>
                                                <div className="actionBtn">
                                                  <button
                                                    className="resume"
                                                    onClick={handleResume}
                                                    disabled={!isPaused}
                                                  >
                                                    <i className="fa-solid fa-play"></i>
                                                  </button>
                                                </div>
                                                <div className="actionBtn">
                                                  <button
                                                    className="stop"
                                                    onClick={handleStop}
                                                    disabled={
                                                      !isPlaying && !isPaused
                                                    }
                                                  >
                                                    <i className="fa-solid fa-stop"></i>
                                                  </button>
                                                </div>
                                              </div>
                                            ) : (
                                              <div className="actionBtn">
                                                {" "}
                                                <button
                                                  className="play"
                                                  onClick={() =>
                                                    handleStart(item?.id)
                                                  }
                                                  disabled
                                                >
                                                  <i className="fa-solid fa-play"></i>
                                                </button>
                                              </div>
                                            )}
                                          </div>

                                          <p> {item?.description}</p>
                                        </>
                                      ) : (
                                        <div className="text-center">
                                          <button
                                            type="button"
                                            onClick={() => {
                                              PaymentModal(item);
                                            }}
                                            className="primaryButton btn text- white"
                                            style={{
                                              backgroundColor: "#f7944d",
                                              color: "black",
                                            }}
                                          >
                                            Pay {item?.price} Mana For this
                                            Chapter
                                          </button>
                                        </div>
                                      )}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                ))}
                            </Accordion>
                          </div>
                          <Tabs
                            defaultActiveKey="home"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                          >
                            {/* <Tab eventKey="home" title=" Book Chapters">
                            
                            </Tab> */}
                            {/* <Tab eventKey="profile" title="Book Reviews">
                              <section class="   text-center text-lg-start shadow-1-strong rounded">
                                <div class="row d-flex justify-content-center">
                                  <div class="col-md-12">
                                    <div class="card">
                                      {data?.reviews &&
                                        data?.reviews.map((item, index) => (
                                          <div class="card-body ">
                                            <div class="row">
                                              <div class="col-lg-2 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                                                <img
                                                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                                                  class="rounded-circle img-fluid shadow-1"
                                                  alt="woman avatar"
                                                  width="200"
                                                  height="200"
                                                />
                                              </div>
                                              <div class="col-lg-8">
                                                <p class="fw-bold lead mb-1 text-capitalize">
                                                  <strong>
                                                    {item?.user?.name}
                                                  </strong>
                                                </p>
                                                <p class="text-muted  mb-2">
                                                  {item?.review}
                                                </p>
                                                <ReactStars
                                                  // count={5}
                                                  // filledIcon={3}
                                                  value={item?.rating}
                                                  edit={false}
                                                  size={18}
                                                  activeColor="#ffd700"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                    </div>
                                  </div>
                                </div>
                              </section>
                            </Tab> */}
                            {/* <Tab eventKey="Poster" title="Poster Reviews">
                              <section class="   text-center text-lg-start shadow-1-strong rounded">
                                <div class="row d-flex justify-content-center">
                                  <div class="col-md-12">
                                    <div class="card">
                                      <div class="card-body ">
                                        <div class="row">
                                          <div class="col-md-12">
                                            <div class=" ">
                                              <div class="card-body p-4">
                                                <div class="d-flex flex-start w-100">
                                                  <img
                                                    class="rounded-circle shadow-1-strong me-3"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(21).webp"
                                                    alt="avatar"
                                                    width="65"
                                                    height="65"
                                                  />
                                                  <div class="w-100">
                                                    <h5>Add a comment</h5>

                                                    <ReactStars
                                                      count={5}
                                                      onChange={ratingChanged}
                                                      size={24}
                                                      activeColor="#ffd700"
                                                    />

                                                    <div class="form-outline">
                                                      <textarea
                                                        class="form-control"
                                                        id="textAreaExample"
                                                        rows="7"
                                                        onChange={(e) => {
                                                          setReviewData({
                                                            ...reviewData,
                                                            review:
                                                              e.target.value,
                                                          });
                                                          console.log(
                                                            reviewData
                                                          );
                                                        }}
                                                      ></textarea>
                                                      <label
                                                        class="form-label"
                                                        for="textAreaExample"
                                                      >
                                                        What is your view?
                                                      </label>
                                                    </div>
                                                    <div class="d-flex justify-content-between mt-3">
                                                      <button
                                                        type="button"
                                                        class="btn btn-danger"
                                                        onClick={reviewSubmit}
                                                      >
                                                        Send{" "}
                                                        <i class="fas fa-long-arrow-alt-right ms-1"></i>
                                                      </button>
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

                              <section>
                                <div class="container my-5 py-5 text-dark"></div>
                              </section>
                            </Tab> */}
                          </Tabs>
                        </div>
                      ) : (
                        <p className="text-center">
                          Please <Link to="/login">Login</Link> To See Chapters
                          for this Book
                        </p>
                      )}

                      <div className="row ">
                        <div className="book__listing-pagination  mb-4">
                          <nav aria-label="Page navigation example  mb-4">
                            {/* <ul class="pagination">
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
                                  <p className="story">Story Status </p>

                                  <Form.Select
                                    aria-label="Default select example"
                                    className="book-release-input"
                                    id="select-chapter"
                                  >
                                    <option>Select Chapter</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </Form.Select>
                                </div>
                              </li>
                            </ul> */}


                            <CustomPagination
                              itemsPerPage={itemsPerPage}
                              totalItems={data?.chapters?.length}
                              currentPage={currentPage}
                              onPageChange={handlePageChange}
                            />
                          </nav>

                        </div>
                      </div>
                      <section className="top">
                        <div className="container">
                          <div className="row">
                          
                            <div className="col-lg-4 col-sm-12 p-4 parabtn">
                        
                              <h3 className="fans">TOP FANS <sup >8,346</sup> </h3>
                           
                            </div>
                            <div className="col-lg-3 col-sm-12 p-4 parabtn">
                             
                             <button className="all" ><span> View All </span> <i class="fa-solid fa-play allicon"></i></button>
                            
                            </div>
                            <div className="col-lg-5 col-sm-12">
                            <img className="img-fluid cartoons" src={animated} />
                            </div>
                          </div>
                        </div>
                      </section>





                      <div class="rate">
                      
                          <div class="container">
                            <div class="ratebg">
                              <div class="row justify-content-center">
                                <div class="col-sm-12 col-lg-3 my-auto ">
                                  <div class="star">
                                    <h2>4.5</h2>
                                    <img class="img-fluid" src={Star} />
                                  </div>
                                  <button>653 reviews</button> <br />
                                  <button class="rev" onClick={handleshowcomment}>Add Review</button>
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
                                <div class="col-12 col-sm-12 col-lg-7">
                                  <div class="strong">
                                    {data?.reviews && data?.reviews.map((item, index) => (
                                      <div>
                                        <div class="num mb-2 ">
                                          <div>
                                            <img
                                              class="img-fluid starimg"
                                              src={Ellipse}
                                            />
                                          </div>
                                          <div>
                                            <p class="review mb-2 ">
                                              {item?.user?.name}
                                            </p>
                                            <div className="bookdetail-date d-flex">
                                              <span class="rev">13-Feb-2024</span>
                                              <span class="rev">
                                                Michael Anderson
                                              </span>{" "}
                                            </div>
                                          </div>

                                        </div>
                                        <div>
                                          <p class="revpara mb-3">
                                            {item?.review}
                                          </p>


                                        </div>


                                        <div className="reviewBoxRate shadow p-3 mt-4 mb-5 ">
                                          <div className="reviewStar">
                                            <label><p className="font-weight-bold">Writing Quality</p></label>

                                            <ReactStars
                                              value={item?.writing_quality}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />

                                          </div>
                                          <div className="reviewStar">
                                            <label><p className="font-weight-bold">Story Development</p></label>

                                            <ReactStars
                                              value={item?.story_development}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />

                                          </div>
                                          <div className="reviewStar">
                                            <label><p className="font-weight-bold">Character Design</p></label>
                                            <ReactStars
                                              value={item?.character_design}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />

                                          </div>
                                          <div className="reviewStar">
                                            <label><p className="font-weight-bold">Updating Stability</p></label>
                                            <ReactStars
                                              value={item?.updating_stability}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />

                                          </div>
                                          <div className="reviewStar">
                                            <label><p className="font-weight-bold">World Background</p></label>
                                            <ReactStars
                                              value={item?.world_background}
                                              edit={false}
                                              size={18}
                                              activeColor="#ffd700"
                                            />

                                          </div>
                                        </div>
                                      </div>
                                    ))
                                    }

                                  </div>

                                </div>
                              </div>










                              <hr />

                              <section class="      text-center text-lg-start shadow-1-strong rounded">
                                <div class="row d-flex justify-content-center">
                                  <div class="col-md-12">
                                    <div class=" ">
                                      <div class="card-body ">
                                        <div class="row">
                                          <div class="col-md-12">
                                            {showcomments === true ? <div class=" ">
                                              <div class="card-body ">
                                                <div class="d-flex flex-start w-100">

                                                  <img
                                                    // class="img-fluid starimg"
                                                    class="img-fluid starimg rounded-circle shadow-1-strong me-3"
                                                    src={Ellipse}
                                                  />
                                                  <div class="w-100">
                                                    <h5 className="mb-2">Add a comment</h5>

                                                    <div className="reviewStar">
                                                      <label><p>Writing Quality</p></label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingQuality}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                        name="abc"
                                                      />

                                                    </div>
                                                    <div className="reviewStar">
                                                      <label><p>Story Development</p></label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingStory}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                      />

                                                    </div>
                                                    <div className="reviewStar">
                                                      <label><p>Character Design</p></label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingDesign}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                      />

                                                    </div>
                                                    <div className="reviewStar">
                                                      <label><p>Updating Stability</p></label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingStability}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                      />

                                                    </div>
                                                    <div className="reviewStar">
                                                      <label><p>World Background</p></label>
                                                      <ReactStars
                                                        count={5}
                                                        onChange={ratingWorld}
                                                        size={24}
                                                        activeColor="#ffd700"
                                                      />

                                                    </div>

                                                    <div class="form-outline">
                                                      <textarea class="form-control" id="textAreaExample" rows="7" onChange={(e) => {
                                                        setReviewData({
                                                          ...reviewData, review: e.target.value
                                                        })
                                                        console.log(reviewData)
                                                      }}></textarea>
                                                      <label class="form-label" for="textAreaExample">What is your view?</label>
                                                    </div>
                                                    <div class="d-flex justify-content-between mt-3">
                                                      <button type="button" class="btn btn-danger" onClick={reviewSubmit}>
                                                        Send <i class="fas fa-long-arrow-alt-right ms-1"></i>
                                                      </button>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div> : ''}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                </div>



                              </section>



                            </div>




                            <section >
                              <div class="container my-5 py-5 text-dark">
                              </div>
                            </section>

                          </div>
                        </div>
                      </div>

                    </div>
                  
                </div>
              </div>
            </div>
          </div>















          <section className="feature-books">
            <div className="container">
              <div className="row">
                <div className="col-md-12 section__heading">
                  <div class="special_heading">
                    <h1

                    >
                      Books
                    </h1>
                    <h2

                    >
                      Related Books
                    </h2>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry Lorem Ipsum has been the industrys
                    standard dummy text ever since the when an unknown printer
                    took a galley of type and scrambled.
                  </p>
                  {/* <div
                    className="tags jost-font nav nav-pills mb-3 "
                    id="pills-tab"
                    role="tablist"
                  >
                    <button href="javascript:;" className="nav-link tag " value={item?.id} onClick={filterGenre}>
                      Books{" "}
                    </button>
                    <button href="javascript:;" className="tag nav-link" value={item?.id} onClick={filterGenre}>
                      novels
                    </button>
                    <button href="javascript:;" className="tag nav-link" value={item?.id} onClick={filterGenre}>
                      Genre
                    </button>
                    <button href="javascript:;" className="tag nav-link"value={item?.id} onClick={filterGenre}>
                      comics
                    </button>
                  </div> */}
                </div>
                {/* <div className="featured__books">
                  <div className="row popular_tabing">
                  <Slider {...settingsForFourItems}>
                    {books &&
                      books.map((item, index) => (
                        
                        <div className="col-md-4">
                          <div className="card product_hover-effect">
                            <img src={base_url +  item?.image} className="card-img-top" />
                            <div className="card-body featured_books-body">
                              <h3 className="card-title jost-font">
                               {item?.name}
                              </h3>
                              <p className="author__name jost-font">
                                Author Name
                              </p>
                              <p className="card-text featured__book-desc jost-font">
                             {item?.description}
                              </p>
                              <div className="product__price-div">
                                <h3 className="author__poduct_title jost-font">
                                  <div className="product__price">
                                    <span className="discount__price">
                                      ${item?.price}
                                    </span>
                                    <span className="actual__price">
                                      ${item?.price}
                                    </span>
                                  </div>
                                </h3>
                                <div class="product__icon">
                                  <img src={Cart_icon_pink} />
                                </div>
                              </div>
                              <div className="rating__div">
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                                <FontAwesomeIcon
                                  icon={faStar}
                                ></FontAwesomeIcon>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                           </Slider>
                  </div>
                </div> */}



                <div className="author__products">
                  <div className="row mb-5 ">
                    <Slider {...settingsForFourItems}>


                      {books &&
                        books.map((item, index) => (
                          <Link to={`/book-detail/${item?.id}`} className="author__products_link">
                            <CustomCard
                              className="author__products_img"
                              image={base_url + item?.image}
                              icon1={faArrowRight}
                              icon2={faEye}
                              imageicon={Cart_icon_pink}
                              text={"Add To Cart"}
                              price={item?.price || 0}
                              title={item?.name}
                            />
                          </Link>
                        ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>














          <CustomModal
            show={showModal}
            close={() => {
              setShowModal(false);
            }}
            success
            heading={`Chapter Fee`}
          >
            <table className="table table-bordered">
              <tr>
                <th>Chapter</th>
                <th>Chapter Amount</th>
                <th>Pay For Audio</th>
              </tr>
              <tr>
                <td>{`Chapter ${modalData?.id}`}</td>
                <td>{`Mana ${modalData?.price}`}</td>
                <td>
                  {/* {modalData?.text_to_speech === true ? "free" : <><input type="checkbox" /> 50</>} */}
                  {modalData?.text_to_speech === true ? (
                    "free"
                  ) : (
                    <div className="">
                      <input type="checkbox" onChange={handleCheckboxChange} />
                      <span className="prs">50</span>
                    </div>
                  )}
                </td>
              </tr>
            </table>
            <div className="text-left pt-4">
              <button
                type="button"
                className="btn bg-success text-white"
                onClick={() => {
                  BuyChapter(modalData?.id);
                }}
              >
                Pay Now
              </button>
            </div>
          </CustomModal>

          <CustomModal
            show={showModal1}
            close={() => {
              setShowModal1(false);
            }}
            success
            heading="You Chapter Payment has been Done."
          />
          <CustomModal
            show={reviewModal}
            close={() => {
              reviewModal(false);
            }}
            success
            heading="Review has been Posted."
          />





        </section>





      </UserLayout>
    </>
  );
};
