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
import backarrow from '../../Assets/images/backarrow.png'
import fan1 from '../../Assets/images/fan1.png'
import fan2 from '../../Assets/images/fan2.png'
import silverMedal from '../../Assets/images/silverMedal.png'
import goldenMedal from '../../Assets/images/goldenMedal.png'
import fan3 from '../../Assets/images/fan3.png'
import medal3 from '../../Assets/images/medal3.png'
import user_prof from '../../Assets/images/user_prof.png'
import pizza from '../../Assets/images/pizza.png'
import light from '../../Assets/images/light.png'
import manaPoint from '../../Assets/images/manaPoint.png'
import sodaCan from '../../Assets/images/sodaCan.png'
import chair from '../../Assets/images/chair.png'
import car from '../../Assets/images/car.png'
import horse from '../../Assets/images/horse.png'
import castle from '../../Assets/images/castle.png'
import rocket from '../../Assets/images/rocket.png'
import gold from '../../Assets/images/gold.png'
import dropdown from "../../Assets/images/dropdown.png";
import T_A_book_1 from "../../Assets/images/T_A_book_1.png";
import colon from "../../Assets/images/colon.png";
import Manual from "../../Assets/images/Manual.png";
import createbtn from "../../Assets/images/createbtn.png";
import annouced from "../../Assets/images/annouced.png";
import comments_profile from "../../Assets/images/comments_profile.png";
import line_timer  from "../../Assets/images/line_timer.png";
import arrow_right from "../../Assets/images/arrow_right.png";
import add_comments from "../../Assets/images/add_comments.png";
import huru from "../../Assets/images/huru.png";
import me from "../../Assets/images/me.png";
import active from "../../Assets/images/active.png";
import appy from "../../Assets/images/appy.png";
import online from "../../Assets/images/online.png";
import laverna from "../../Assets/images/laverna.png";
import club from "../../Assets/images/club.png";
import msg from "../../Assets/images/msg.png";
import recent_msg from "../../Assets/images/recent_msg.png";
import startconversation from "../../Assets/images/start conversation.png";
import noti from "../../Assets/images/noti.png";
import showmore from "../../Assets/images/showmore.png";
import annoucedcomments from "../../Assets/images/annoucedcomments.png";
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
import star_button from "../../Assets/images/star_button.png";
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
import addfriend from "../../Assets/images/add_friend.png";
import showmoreicon from "../../Assets/images/showmoreicon.png";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import AccordionContext from "react-bootstrap/AccordionContext";
import { BookListingCover } from "../../Assets/images";
import { useContext } from "react";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import ReactStars from "react-rating-stars-component";

export const Discussion = ({ eventKey, children }) => {
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
    item?.name?.toLowerCase().includes(inputValue.toLowerCase())
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
                <h1 className="typewriter"> GENERAL DISCUSSION </h1>
              </div>
            </div>
          </div>
        </section>


        <section className="discussion_section">
            <div className="container">
                <div className="row ">
                 <div className="col-md-12">
                    <div className="general_discussion_row">
                        <div>
                            <ul class="nav nav-pills mb-3 discussion_tab_border" id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link discussion_tab_links active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link discussion_tab_links" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link discussion_tab_links" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                                </li>
                            </ul>
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                           
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="discussions_divider"></div>
                                              <div className="discussion_annoucements_main_div">                    
                                                <img src={annouced} className="img-fluid annouced_img" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrops" /> 
                                                <div>
                                                    <p className="announcement_heading" >Announcements</p>
                                                    <div className="discussion_annoucements_child_div">
                                                        <p className="annouced_discussion_text"> Discussion: <span className="annouced_discussion_number"> 42 </span></p>
                                                        <p className="annouced_discussion_text"> Messages:  <span className="annouced_discussion_number" > 4,835 </span></p>
                                                    </div>
                                                    <p className="annouced_discussion_text">Latest:  <span> Apr 15,2024 </span></p>
                                                </div>
                                            </div>
                                          {/* <div className="discussions_divider"></div> */}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="discussions_divider"></div>
                                              <div className="discussion_annoucements_main_div">
                                                <img src={annoucedcomments} className="img-fluid annouced_img" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrops" />
                                                <div>
                                                    <p className="announcement_heading" >Novel Updates Site Discussion</p>
                                                    <div className="discussion_annoucements_child_div">
                                                        <p className="annouced_discussion_text"> Discussion: <span className="annouced_discussion_number">  1,342 </span></p>
                                                        <p className="annouced_discussion_text"> Messages:  <span className="annouced_discussion_number" > 30,385 </span></p>
                                                    </div>
                                                    <p className="annouced_discussion_text">Latest:  <span> Apr 15,2024 </span></p>
                                                </div>
                                            </div>
                                          {/* <div className="discussions_divider"></div> */}
                                        </div>
                                    </div>
                             
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="discussions_divider"></div>
                                              <div className="discussion_annoucements_main_div">
                                                <img src={annoucedcomments} className="img-fluid annouced_img" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrops" />
                                                <div>
                                                    <p className="announcement_heading" > Suggestions & Bug Reports </p>
                                                    <div className="discussion_annoucements_child_div">
                                                        <p className="annouced_discussion_text"> Discussion: <span className="annouced_discussion_number">  3,216 </span></p>
                                                        <p className="annouced_discussion_text"> Messages:  <span className="annouced_discussion_number" > 21,009 </span></p>
                                                    </div>
                                                    <p className="annouced_discussion_text">Latest:  <span> Apr 15,2024 </span></p>
                                                </div>
                                            </div>
                                          <div className="discussions_divider"></div>
                                        </div>
                                    </div>
                             
                             



                                </div>


                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">


                                <div className="row">
                                        <div className="col-md-12">
                                            <div className="discussions_divider"></div>
                                              <div className="discussion_annoucements_main_div">
                                                <img src={annouced} className="img-fluid annouced_img" />
                                                <div>
                                                    <p className="announcement_heading" >Announcements</p>
                                                    <div className="discussion_annoucements_child_div">
                                                        <p className="annouced_discussion_text"> Discussion: <span className="annouced_discussion_number"> 42 </span></p>
                                                        <p className="annouced_discussion_text"> Messages:  <span className="annouced_discussion_number" > 4,835 </span></p>
                                                    </div>
                                                    <p className="annouced_discussion_text">Latest:  <span> Apr 15,2024 </span></p>
                                                </div>
                                            </div>
                                          <div className="discussions_divider"></div>
                                        </div>
                                    </div>


                                </div>
                                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">


                                <div className="row">
                                        <div className="col-md-12">
                                            <div className="discussions_divider"></div>
                                              <div className="discussion_annoucements_main_div">
                                                <img src={annouced} className="img-fluid annouced_img" />
                                                <div>
                                                    <p className="announcement_heading" >Announcements</p>
                                                    <div className="discussion_annoucements_child_div">
                                                        <p className="annouced_discussion_text"> Discussion: <span className="annouced_discussion_number"> 42 </span></p>
                                                        <p className="annouced_discussion_text"> Messages:  <span className="annouced_discussion_number" > 4,835 </span></p>
                                                    </div>
                                                    <p className="annouced_discussion_text">Latest:  <span> Apr 15,2024 </span></p>
                                                </div>
                                            </div>
                                          <div className="discussions_divider"></div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        

                    <div class="general_discussion_btns_div">
                        <div  className="dropdown">
                            <button class="filter" type="button" id="dropdownMenuButtonfilter" data-bs-toggle="dropdown" aria-expanded="false">
                                <span> Filter </span> <img className="img-fluid filter_icon" src={dropdown} />
                            </button>

                            <ul class="dropdown-menu filter_dropdown" aria-labelledby="dropdownMenuButtonfilter">
                                <li><a class="dropdown-item filter_dropdown_list" href="#">Action</a></li>
                                <li><a class="dropdown-item filter_dropdown_list" href="#">Another action</a></li>
                                <li><a class="dropdown-item filter_dropdown_list" href="#">Filter</a></li>
                            </ul>
                        </div>
                        {/* <div  className="dropdown">
                            <button class="create"  type="button" id="dropdownMenuButtoncreate" data-bs-toggle="dropdown" aria-expanded="false">
                                <span> Create </span><img className="img-fluid create_icon createbtn_img"  src={createbtn} />
                            </button>
                            <ul class="dropdown-menu filter_dropdown" aria-labelledby="dropdownMenuButtoncreate">
                            
                                <li><a class="dropdown-item filter_dropdown_list" href="#">Create</a></li>
                                <li><a class="dropdown-item filter_dropdown_list" href="#">Create action</a></li>
                            </ul>
                        </div> */}
                        <button class="create">
                          <span> Create </span><img className="img-fluid create_icon createbtn_img"  src={createbtn} />
                        </button>
                    </div>
                    



                    </div>
                </div>
            </div>
          </div>
        </section>



          {/* <!-- Modal --> */}    
          
          <div class="modal fade" id="staticBackdrops" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered cust_modal_dailog">
                    <div class="modal-content new_comnt_modal_bg">
                      <div className="another_modal_bg">
                          <div class="modal-header">
                              <div>
                                <h1 class="modal-title fs-5" id="staticBackdropLabel" className="modal_comments_titile">
                                  Comments
                                </h1>
                                <div className="modal_comments_btn_div">
                                  <button className="comment_top_btn"> TOP </button>
                                  <button className="comment_top_btn"> NEWEST </button>
                                </div>
                              </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><i class="fa-solid fa-xmark cancel_mark"></i></button>
                                    
                          </div>
                          <div class="modal-body">
                              <div className="row">
                                <div className="col-md-12">
                                 <div className="cmnts_modal_divider"></div>   
                                    <div className="modal_comment_detail_box">
                                      <img src={recent_msg} className="recent_msg_img"/>
                                      <div className="cmnts_custom_width">
                                            <div className="user_name_with_cmnts_details_div">
                                              <p className="cmnt_user_name">@Braindean B33</p>
                                              <p className="cmnt_edit_history">5min ago  (edited)</p>
                                            </div>
                                            <p className="modal_user_cmts_para"> Would have been kinda cool if chuck lost his powers after wiping out the last humans across 
                                              the multiverse who believed in him and realized he was also just another story.</p>
                                            <div className="user_name_with_cmnts_details_div">
                                              <i class="fa-solid fa-thumbs-up like_comnts_icon"></i>
                                              <p className="number_of_likes"> 684 </p>
                                              <i class="fa-solid fa-thumbs-down  fa-flip-horizontal like_comnts_icon"></i>
                                              <i class="fa-solid fa-message like_comnts_icon"></i>
                                            </div>
                                            <p className="cmnts_replies"> 19 Replies </p>
                                        </div>
                                      <i class="fa-solid fa-ellipsis-vertical view_more_comnts_icon"></i>
                                    </div>
                                  </div>
                              </div> 

                              <div className="row mt-4">
                                <div className="col-md-12">
                               
                                    <div className="modal_comment_detail_box">
                                      <img src={me} className="recent_msg_img"/>
                                      <div className="cmnts_custom_width">
                                            <div className="user_name_with_cmnts_details_div">
                                              <p className="cmnt_user_name">@emilatariq1271</p>
                                              <p className="cmnt_edit_history">5min ago</p>
                                            </div>
                                            <p className="modal_user_cmts_para"> Would have been kinda cool if chuck lost his powers after wiping out the last humans across the multiverse. </p>
                                            <div className="user_name_with_cmnts_details_div">
                                              <i class="fa-solid fa-thumbs-up like_comnts_icon"></i>
                                              <p className="number_of_likes"> 637 </p>
                                              <i class="fa-solid fa-thumbs-down  fa-flip-horizontal like_comnts_icon"></i>
                                              <i class="fa-solid fa-message like_comnts_icon"></i>
                                            </div>
                                            <p className="cmnts_replies"> 13 Replies </p>
                                        </div>
                                      <i class="fa-solid fa-ellipsis-vertical view_more_comnts_icon"></i>
                                    </div>
                                  </div>
                              </div> 

                              <div className="row mt-4">
                                <div className="col-md-12">
                                  <div className="type_cmnts_box">
                                     <img src={club} className="recent_msg_img"/>
                                     <input type="text" name="firstname" placeholder="Add a Comment" className="add_cmnt_input"/>
                                  </div>
                                </div>
                              </div>






                          </div>
                       </div>
                    </div>


                </div>
                </div>
           

           {/* <!-- Modal End --> */}

       

      </UserLayout>
    </>
  );
};
