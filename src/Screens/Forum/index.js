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
import comments_profile from "../../Assets/images/comments_profile.png";
import line_timer  from "../../Assets/images/line_timer.png";
import arrow_right from "../../Assets/images/arrow_right.png";
import add_comments from "../../Assets/images/add_comments.png";
import recent_msg from "../../Assets/images/recent_msg.png";
import huru from "../../Assets/images/huru.png";
import me from "../../Assets/images/me.png";
import active from "../../Assets/images/active.png";
import appy from "../../Assets/images/appy.png";
import online from "../../Assets/images/online.png";
import laverna from "../../Assets/images/laverna.png";
import club from "../../Assets/images/club.png";
import msg from "../../Assets/images/msg.png";
import startconversation from "../../Assets/images/start conversation.png";
import storyarrow from "../../Assets/images/story_arrow.png";
import noti from "../../Assets/images/noti.png";
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

export const Forum = ({ eventKey, children }) => {
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
                <h1 className="typewriter"> Forum </h1>
              </div>
            </div>
          </div>
        </section>

        <section className="forum_first_section">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-lg-4 col-sm-6 col-md-4">
                        <div className="">
                            <form class="example custom_searchbar" action="/action_page.php" >
                              <input type="text" placeholder="Search For User" name="search2"/>
                              <button type="submit" className="custom_search_btn"><i class="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>

                    <div className="col-6 col-lg-4 col-sm-6 col-md-4">
                        <div className="friend_list_div">
                            <div className="dropdown">
                              <img src={addfriend} className="img-fluid add_friend_img"  type="button" id="dropdownMenuButton04" data-bs-toggle="dropdown"
                               aria-expanded="false"/>
                              
                                <ul class="dropdown-menu adduser_dropdown_menu_container add_friend_container" aria-labelledby="dropdownMenuButton04">
                                  <div className="dropdown_list_bg add_friend_list_bg">
                                    <li className="custom_dropdown_username" >Add by Username</li>
                                    <div className="dropdown_list_divider"></div>
                                    <li className="custom_dropdown_add_friend " > Who would you like to add as Friend?</li>
                                    <input type="text" className="username_input mt-2" placeholder="Enter a Username" id="name" name="name" required />
                                    <li className="custom_dropdown_your_name mt-3" > By the way, your username is 
                                      <span className="justcallmefox_text"> justcallmefox_ </span> </li>
                                  </div>
                                </ul>
                            </div>

                            <div class="dropdown">
                              <button class="friend_list_btn dropdown-toggle first_toggle" type="button" id="dropdownMenuButton07" data-bs-toggle="dropdown" aria-expanded="false">
                              Friend List
                              </button>
                              <ul class="dropdown-menu friend_request_menu_container add_friend_container" aria-labelledby="dropdownMenuButton07">
                                  <div className="dropdown_list_bg add_friend_list_bg">
                                    <li className="custom_dropdown_username" > 
                                      <div className="friend_request_div">
                                          <button type="submit" className="request_search_icon"><i class="fa fa-search"></i></button>
                                          <button className="friend_request"> View Friend Request </button>
                                      </div>
                                    </li>
                                    <div className="dropdown_list_divider"></div>
                                    <li className="custom_dropdown_add_friend"> 
                                      <div className="recently_msg_div">
                                        <img src={recent_msg} className="recent_msg_img"/>
                                        <div>
                                          <p className="recent_msg_text">Recently Messaged</p>
                                          <p className="braindean_text">Braindean B33</p>
                                          <p className="rock_text">Recently killing my enemies with a rock</p>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="custom_dropdown_add_friend"> 
                                      <div className="discord_updates_div">
                                        <div className="profile_name_with_msg">
                                            <button className="refresh_icon"> <i class="fa-solid fa-arrows-rotate "></i></button>
                                              <div>
                                                  <div className="child_discord_updates_div">
                                                    <p className="discord_updates_text">Discord Updates</p>
                                                    <div className="officail_updates_div"> <i class="fa-solid fa-check check_mark_update"></i> <p className="officail_updates">OFFICIAL</p>  </div>
                                                  </div>
                                                  <p className="product_updates_text">Discord product Updates</p>
                                              </div>
                                        </div>
                                        <p className="days_number">12d</p>
                                      </div>
                                    </li>

                                    <li className=""> 
                                      <div className="discord_updates_div discord_updates_div_active_class">
                                          <div className="profile_name_with_msg"> 
                                            <img src={huru} className="recent_msg_img"/>
                                              <div>
                                                  <p className="discord_updates_text">huru</p>
                                                  <p className="product_updates_text">You: Hey</p>
                                              </div>
                                          </div>
                                        <p className="days_number">15d</p>
                                      </div>
                                    </li>

                                    <li className=""> 
                                      <div className="discord_updates_div">
                                          <div className="profile_name_with_msg"> 
                                            <img src={me} className="recent_msg_img position-relative"/>
                                            <img src={active} className="activ_friend_img "/>
                                              <div>
                                                  <p className="discord_updates_text">Me</p>
                                                  <p className="product_updates_text">wave</p>
                                              </div>
                                          </div>
                                        <p className="days_number">15d</p>
                                      </div>
                                    </li>

                                    <li className=""> 
                                      <div className="discord_updates_div">
                                          <div className="profile_name_with_msg"> 
                                            <img src={appy} className="recent_msg_img position-relative"/>
                                            <img src={online} className="activ_friend_img_one "/>
                                              <div>
                                                  <p className="discord_updates_text">Appy</p>
                                                  <p className="product_updates_text">You: the button only on computer</p>
                                              </div>
                                          </div>
                                        <p className="days_number">6d</p>
                                      </div>
                                    </li>

                                    <li className=""> 
                                      <div className="discord_updates_div">
                                          <div className="profile_name_with_msg"> 
                                            <img src={laverna} className="recent_msg_img position-relative"/>
                                            <img src={active} className="activ_friend_img_two "/>
                                              <div>
                                                  <p className="discord_updates_text">Laverna</p>
                                                  <p className="product_updates_text">You: Hello</p>
                                              </div>
                                          </div>
                                        <p className="days_number">3mo</p>
                                      </div>
                                    </li>

                                    <li className=""> 
                                      <div className="discord_updates_div">
                                          <div className="profile_name_with_msg"> 
                                            <img src={club} className="recent_msg_img position-relative"/>
                                            <img src={active} className="activ_friend_img_three "/>
                                              <div>
                                                  <p className="discord_updates_text">Little Club</p>
                                                  <p className="product_updates_text">wave</p>
                                              </div>
                                          </div>
                                        <p className="days_number">5mo</p>
                                      </div>
                                    </li>

                                    <li className=""> 
                                      <div className="discord_updates_div">
                                          <div className="profile_name_with_msg"> 
                                            <img src={club} className="recent_msg_img position-relative"/>
                                            <img src={active} className="activ_friend_img_four "/>
                                              <div>
                                                  <p className="discord_updates_text">Little Club</p>
                                                  <p className="product_updates_text">wave</p>
                                              </div>
                                          </div>
                                        <p className="days_number">5mo</p>
                                      </div>
                                    </li>


                                    <li className=""> 
                                      <div className="discord_updates_div">
                                          <div className="profile_name_with_msg"> 
                                            <img src={club} className="recent_msg_img position-relative"/>
                                            <img src={active} className="activ_friend_img_five "/>
                                              <div>
                                                  <p className="discord_updates_text">Little Club</p>
                                                  <p className="product_updates_text">wave</p>
                                              </div>
                                          </div>
                                        <p className="days_number">5mo</p>
                                      </div>
                                    </li>

                                   
                                  </div>
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 col-lg-4 col-sm-12 col-md-4">
                      <div className="third_dropdown_div">
                          <div class="dropdown">
                            <button class="dropdown-toggle second_toggle saincofox" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              saincofox
                            </button>
                              <ul class="dropdown-menu msg_menu_container add_friend_container" aria-labelledby="dropdownMenuButtonnote">
                                <div className="dropdown_list_bg add_friend_list_bg">
                                <li className="msg_heading"> 
                                Saincofox
                                </li>
                                <div className="dropdown_list_divider"></div>
                                <li className="new_notifications"> 
                                Action
                                </li>
                                </div>
                              </ul>
                          </div>

                        
                          <div class="dropdown">
                                <button class="msg_dropdown_btn" type="button" id="dropdownMenuButtonmsg" data-bs-toggle="dropdown" aria-expanded="false">
                                  <img src={msg} className="msg_img"/>
                                </button>
                                <ul class="dropdown-menu msg_menu_container add_friend_container" aria-labelledby="dropdownMenuButtonmsg">
                                    <div className="dropdown_list_bg add_friend_list_bg">
                                        <li className="msg_heading"> 
                                          Messages
                                        </li>
                                        <div className="dropdown_list_divider"></div>
                                        <li className="no_recent_msg"> 
                                        You have no recent messages
                                        </li>
                                        <div className="dropdown_list_divider"></div>
                                        <li className="msg_footer_btn"> 
                                          <button className="show_msg_btn"> Show All </button>
                                          <button className="show_msg_btn">
                                            <img src={startconversation} className="startconversation_img" />
                                            <span> Start A New Conversation </span>
                                          </button>
                                        </li>
                                    </div>
                                  </ul>
                              </div>
                              <div class="dropdown">
                                <button class="msg_dropdown_btn" type="button" id="dropdownMenuButtonnote" data-bs-toggle="dropdown" aria-expanded="false">
                                  <img src={noti} className="msg_img"/>
                                </button>
                                <ul class="dropdown-menu notification_menu_container  add_friend_container" aria-labelledby="dropdownMenuButtonnote">
                                    <div className="dropdown_list_bg add_friend_list_bg">
                                        <li className="msg_heading"> 
                                        Notification
                                        </li>
                                        <div className="dropdown_list_divider"></div>
                                        <li className="new_notifications"> 
                                        You have no new notifications
                                        </li>
                                    </div>
                                  </ul>
                              </div>

                      </div>
                    </div>









                </div>
            </div>

        </section>

        <section className="tabs_section_spacing">
       
          <div className="row ">
            <div className="col-md-12 ">
            <ul class="nav nav-pills mb-3 forum_tabs_box " id="pills-tab" role="tablist ">
              <li class="nav-item" role="presentation">
                <button class="nav-link forum_tab_links active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link forum_tab_links" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">General Chat</button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link forum_tab_links" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Recommendations</button>
              </li>
              <li class="nav-item" role="presentation">
              <button class="nav-link forum_tab_links" id="pills-contact1-tab" data-bs-toggle="pill" data-bs-target="#pills-contact1" type="button" role="tab" aria-controls="pills-contact1" aria-selected="false">Novel Discussions</button>
              </li>
              <li class="nav-item" role="presentation">
              <button class="nav-link forum_tab_links" id="pills-contact2-tab" data-bs-toggle="pill" data-bs-target="#pills-contact2" type="button" role="tab" aria-controls="pills-contact2" aria-selected="false">Translator Corner</button>
              </li>
              <li class="nav-item" role="presentation">
              <button class="nav-link forum_tab_links" id="pills-contact3-tab" data-bs-toggle="pill" data-bs-target="#pills-contact3" type="button" role="tab" aria-controls="pills-contact3" aria-selected="false">Bugs</button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg">Newsletter</h5>
                    </div>
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_update_bg">Updates</h5>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6 ">
                          <h5 className="forum_change_future_text forum_change_future_bg">Future change</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg">Guidelines</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg forum_popular_post_bg">A List of most popular posts</h5>
                    </div>
                    <div className="col-md-6 ">
                      <div className="row post_list_row_screen">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_newest_post_bg">A List of newest posts</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_list_post_bg">A List of newest posts</h5>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_author_post_bg">Author</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_extras_bg">Extras</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                






              </div>


              <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
              <div className="container">
                  <div className="row">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg">Newsletter</h5>
                    </div>
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_update_bg">Updates</h5>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6 ">
                          <h5 className="forum_change_future_text forum_change_future_bg">Future change</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg">Guidelines</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg forum_popular_post_bg">A List of most popular posts</h5>
                    </div>
                    <div className="col-md-6 ">
                      <div className="row post_list_row_screen">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_newest_post_bg">A List of newest posts</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_list_post_bg">A List of newest posts</h5>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_author_post_bg">Author</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_extras_bg">Extras</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>



              <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">



              <div className="container">
                  <div className="row">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg">Newsletter</h5>
                    </div>
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_update_bg">Updates</h5>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6 ">
                          <h5 className="forum_change_future_text forum_change_future_bg">Future change</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg">Guidelines</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg forum_popular_post_bg">A List of most popular posts</h5>
                    </div>
                    <div className="col-md-6 ">
                      <div className="row post_list_row_screen">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_newest_post_bg">A List of newest posts</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_list_post_bg">A List of newest posts</h5>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_author_post_bg">Author</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_extras_bg">Extras</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                


              </div>


              <div class="tab-pane fade" id="pills-contact1" role="tabpanel" aria-labelledby="pills-contact1-tab" tabindex="0">
              <div className="container">
                  <div className="row">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg">Newsletter</h5>
                    </div>
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_update_bg">Updates</h5>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6 ">
                          <h5 className="forum_change_future_text forum_change_future_bg">Future change</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg">Guidelines</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg forum_popular_post_bg">A List of most popular posts</h5>
                    </div>
                    <div className="col-md-6 ">
                      <div className="row post_list_row_screen">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_newest_post_bg">A List of newest posts</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_list_post_bg">A List of newest posts</h5>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_author_post_bg">Author</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_extras_bg">Extras</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                

              </div>


              <div class="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact2-tab" tabindex="0">

              <div className="container">
                  <div className="row">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg">Newsletter</h5>
                    </div>
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_update_bg">Updates</h5>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6 ">
                          <h5 className="forum_change_future_text forum_change_future_bg">Future change</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg">Guidelines</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg forum_popular_post_bg">A List of most popular posts</h5>
                    </div>
                    <div className="col-md-6 ">
                      <div className="row post_list_row_screen">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_newest_post_bg">A List of newest posts</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_list_post_bg">A List of newest posts</h5>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_author_post_bg">Author</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_extras_bg">Extras</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                

              </div>
              <div class="tab-pane fade" id="pills-contact3" role="tabpanel" aria-labelledby="pills-contact3-tab" tabindex="0">


              <div className="container">
                  <div className="row">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg">Newsletter</h5>
                    </div>
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_update_bg">Updates</h5>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6 ">
                          <h5 className="forum_change_future_text forum_change_future_bg">Future change</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg">Guidelines</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6 ">
                      <h5 className="forum_newsletter_text forum_newsletter_bg forum_popular_post_bg">A List of most popular posts</h5>
                    </div>
                    <div className="col-md-6 ">
                      <div className="row post_list_row_screen">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_newest_post_bg">A List of newest posts</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_list_post_bg">A List of newest posts</h5>
                        </div>
                      </div>
                      <div className="row mt-4">
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_change_future_bg forum_author_post_bg">Author</h5>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6">
                          <h5 className="forum_change_future_text forum_guidlines_bg forum_extras_bg">Extras</h5>
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
        

        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
          <div class="modal-dialog form_modal_dailog modal-dialog-centered">
            <div class="modal-content form_bg_one">
              <div class="modal-header custom_form_header">
                <h1 class="modal-title_form " id="exampleModalToggleLabel">tailor to your needs</h1>
                <button type="button" class="form_btn_close" data-bs-dismiss="modal" aria-label="Close">Skip</button>
              </div>
              <div class="modal-body">
                <div className="modal_form_divider"></div>
                <p className="form_modal_para">choose your reading preference before digging in..</p>
                <p className="form_modal_para">you can change it later</p>
                <div className="row modal_forms_rows_spacing">
                  <div className="col-md-6">
                    <div className="female_stories">
                      <h3 className="female_lead_heading">FEMALE LEAD STORIES</h3>
                      <div className="lead_story_divider"></div>
                      <div className="lead_story_text_div">
                        <p className="story_detail_content">more Romance, LGBT +, Teen, History, Fantasy, Urban.</p>
                        <img src={storyarrow} className="img-fluid"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="male_stories">
                      <h3 className="female_lead_heading">MALE LEAD STORIES</h3>
                      <div className="lead_story_divider"></div>
                      <div className="lead_story_text_div">
                        <p className="story_detail_content">more easter, Games, Horror, Sports, Action, War, Realistic..</p>
                        <img src={storyarrow} className="img-fluid"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer custome_form_modal_footer">
                <button class="second_modal_btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Next <i class="fa-solid fa-caret-right next_form_arrow"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div class="modal-dialog form_modal_dailog modal-dialog-centered">
          <div class="modal-content form_bg_two">
              <div class="modal-header custom_form_header">
                <h1 class="modal-title_form " id="exampleModalToggleLabel">tailor to your needs</h1>
                <button type="button" class="form_btn_close" data-bs-dismiss="modal" aria-label="Close">Skip</button>
              </div>
              <div class="modal-body">
                <div className="modal_form_divider"></div>
                <p className="form_modal_para">choose your reading preference</p>
              
                <div className="row modal_forms_rows_spacing">
                  <div className="col-md-6">
                    <div className="female_stories_two">
                      <div className="lead_story_text_div">
                        <h3 className="female_lead_heading">More Fantasy</h3>
                        <img src={storyarrow} className="img-fluid"/>
                      </div>
                        <div className="lead_story_divider"></div>
                        <p className="story_detail_content_two">#action    #adventure     #Reincarnation    #System    #Magic    #harem    #Cultivation    #Weakostrong    #Videogame    #Dragon</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="male_stories_two">
                      <div className="lead_story_text_div">
                        <h3 className="female_lead_heading">More Romance</h3>
                        <img src={storyarrow} className="img-fluid"/>
                      </div>
                      <div className="lead_story_divider"></div>
                        <p className="story_detail_content_two">#Vampire    #Warewolf    #rebirth    #teen    #LGBT+    #Billionaire    #Badboy    #mafia    #Sweetlove    #Revenge</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer custome_form_modal_footer">
              <button class="second_modal_btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"><i class="fa-solid fa-caret-left next_form_arrow"></i> Previous </button>
              <button class="second_modal_btn" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Next <i class="fa-solid fa-caret-right next_form_arrow"></i></button>
              
              </div>
            </div>
          </div>
        </div>

        <div class="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
          <div class="modal-dialog form_modal_dailog modal-dialog-centered">
          <div class="modal-content form_bg_three">
              <div class="modal-header custom_form_header">
                <h1 class="modal-title_form " id="exampleModalToggleLabel">tailor to your needs</h1>
                <button type="button" class="form_btn_close" data-bs-dismiss="modal" aria-label="Close">Skip</button>
              </div>
              <div class="modal-body">
                <div className="modal_form_divider"></div>
                <p className="form_modal_para">What type Of Book is Your Favorite</p>
              
                <div className="row modal_forms_rows_spacing">
                  <div className="col-md-12">
                    <div className="web_stories_bg">
                        <h3 className="web_novel_heading">Web Novel</h3>
                        <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
                        <div className="web_story_form_divider"></div>
                        <p className="web_novel_para">Please Choose Your Prefrerence</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="web_stories_bg_two">
                        <h3 className="web_novel_heading">Light Novel</h3>
                        <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
                        <div className="web_story_form_divider"></div>
                        <p className="web_novel_para">Please Choose Your Prefrerence</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="web_stories_bg_three">
                        <h3 className="web_novel_heading">Manga</h3>
                        <i class="fa-solid fa-caret-right web_novel_arrow_img"></i>
                        <div className="web_story_form_divider"></div>
                        <p className="web_novel_para">Please Choose Your Prefrerence</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer custome_form_modal_footer_two">
              <button class="second_modal_btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"><i class="fa-solid fa-caret-left next_form_arrow"></i> Previous </button>
              <button class="second_modal_btn" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Next <i class="fa-solid fa-caret-right next_form_arrow"></i></button>
              
              </div>
            </div>
          </div>
        </div>


        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Open first modal</button>

      
         
      </UserLayout>
    </>
  );
};
