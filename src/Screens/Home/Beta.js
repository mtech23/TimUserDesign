import { React, useState, useEffect } from "react";
import { UserLayout } from "../../Components/Layout/UserLayout";
import "./beta.css";
// import {
//   AdertiseImage,
//   BookImage,
//   Fancy,
//   MainNoval,
//   NovalImage,
// } from "../../Assets/images";

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
import { Link } from "react-router-dom";
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Beta = () => {
  const [ads, setAds] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const base_url = "https://custom.mystagingserver.site/Tim-WDLLC/public/";

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
  const reusableSettingForOne = (item, centerMode) => {
    return {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: item,
      slidesToScroll: 1,
      centerMode: centerMode,
    };
  };

  const settingsForFourItems = reusableSetting(4, false);
  const settingsForOneItem = reusableSettingForOne(1, false);
  //   const adsListing = () => {
  //     document.querySelector(".loaderBox").classList.remove("d-none");
  //     fetch(
  //       "https://custom.mystagingserver.site/Tim-WDLLC/public/api/ads_listing",
  //       {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         setAds(data.data);
  //       })
  //       .catch((error) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.log(error);
  //       });
  //   };

  //   const BookListing = () => {
  //     document.querySelector(".loaderBox").classList.remove("d-none");
  //     fetch(
  //       "https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_listing",
  //       {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.log(data.data);
  //         setBooks(data.data);
  //       })
  //       .catch((error) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.log(error);
  //       });
  //   };

  //   const GenreData = () => {
  //     document.querySelector(".loaderBox").classList.remove("d-none");
  //     fetch(
  //       "https://custom.mystagingserver.site/Tim-WDLLC/public/api/genre_listing"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.log(data);
  //         setGenres(data.data);
  //         if (data.data.length > 0) {
  //           setSelectedGenre(data.data[0]); // Select the first genre by default
  //         }
  //       })
  //       .catch((error) => {
  //         document.querySelector(".loaderBox").classList.add("d-none");
  //         console.error("Error fetching data: ", error);
  //       });
  //   };

  //   useEffect(() => {
  //     adsListing();
  //     BookListing();
  //     GenreData();
  //   }, []);

  //   const handleTabClick = (genre) => {
  //     setSelectedGenre(genre);
  //   };

  //   <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      {/* Header */}
      <section className="header-navbar jost-font">
        <div className="container">
          <div className="row align-items-center d-none d-lg-flex">
            {/* <div className="main-nav">
              <ul className="main-navbar main-navbar-1">
                <li className="main-navbar-list">
                  <Link to="!#" className="main-navbar-link navbar-active">
                    Home
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="!#" className="main-navbar-link">
                    Browse
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="!#" className="main-navbar-link">
                    Rankings
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="!#" className="main-navbar-link">
                    Competion
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="!#" className="main-navbar-link">
                    Library
                  </Link>
                </li>
              </ul>
              <div className="main-navbar-logo">
                <Link to="!#">
                  <img src={Logo} />
                </Link>
              </div>
              <ul className="main-navbar main-navbar-2">
                <li className="main-navbar-list">
                  <Link to="!#" className="main-navbar-link">
                    Author Hub
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="!#" className="main-navbar-link">
                    Forum
                  </Link>
                </li>
              </ul>
              <div class="searchbox-and-icon-container">
                <div class="input-group header__search">
                  <button
                    className="btn btn-outline-secondary search__btn"
                    type="button"
                    id="button-addon1"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here..."
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-outline-secondary category__icon"
                    type="button"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon icon={faList} />
                  </button>
                </div>
                <div class="user__icon-container">
                  <Link className="nav-link user__icon" to="!#">
                    <img src={User_icon_white} />
                  </Link>
                  <Link className="nav-link user__icon-plus" to="!#">
                    <img src={User_icon_plus} />
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="col-5">
              <ul className="main-navbar main-navbar-1">
                <li className="main-navbar-list">
                  <Link to="/beta/" className="main-navbar-link navbar-active">
                    Home
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="/beta/" className="main-navbar-link">
                    Browse
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="/beta/" className="main-navbar-link">
                    Rankings
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="/beta/" className="main-navbar-link">
                    Competion
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="/beta/" className="main-navbar-link">
                    Library
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="main-navbar-logo">
                <Link to="!#">
                  <img src={Logo} />
                </Link>
              </div>
            </div>
            <div className="col-3">
              <ul className="main-navbar main-navbar-2">
                <li className="main-navbar-list">
                  <Link to="/beta/" className="main-navbar-link">
                    Author Hub
                  </Link>
                </li>
                <li className="main-navbar-list">
                  <Link to="/beta/" className="main-navbar-link">
                    Forum
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <div class="searchbox-and-icon-container">
                <div class="input-group header__search">
                  <button
                    className="btn btn-outline-secondary search__btn"
                    type="button"
                    id="button-addon1"
                  >
                    <FontAwesomeIcon icon={faSearch} />
                  </button>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Here..."
                    aria-describedby="button-addon1"
                  />
                  <button
                    className="btn btn-outline-secondary category__icon"
                    type="button"
                    id="button-addon2"
                  >
                    <FontAwesomeIcon icon={faList} />
                  </button>
                </div>
                <div class="user__icon-container">
                  <Link className="nav-link user__icon" to="!#">
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    <img src={User_icon_white} />
                  </Link>
                  <Link className="nav-link user__icon-plus" to="!#">
                    {/* <FontAwesomeIcon icon={faUserPlus} /> */}
                    <img src={User_icon_plus} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <nav className="navbar navbar-expand-xl d-lg-none d-block">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="main-navbar-list">
                      <Link
                        to="/beta/"
                        className="main-navbar-link navbar-active"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="main-navbar-list">
                      <Link to="/beta/" className="main-navbar-link">
                        Browse
                      </Link>
                    </li>
                    <li className="main-navbar-list">
                      <Link to="/beta/" className="main-navbar-link">
                        Rankings
                      </Link>
                    </li>
                    <li className="main-navbar-list">
                      <Link to="/beta/" className="main-navbar-link">
                        Competion
                      </Link>
                    </li>
                    <li className="main-navbar-list">
                      <Link to="/beta/" className="main-navbar-link">
                        Library
                      </Link>
                    </li>
                    <li className="main-navbar-list">
                      <Link to="/beta/" className="main-navbar-link">
                        Author Hub
                      </Link>
                    </li>
                    <li className="main-navbar-list">
                      <Link to="/beta/" className="main-navbar-link">
                        Forum
                      </Link>
                    </li>
                  </ul>
                  <div class="input-group header__search">
                    <button
                      className="btn btn-outline-secondary search__btn"
                      type="button"
                      id="button-addon1"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Here..."
                      aria-describedby="button-addon1"
                    />
                    <button
                      className="btn btn-outline-secondary category__icon"
                      type="button"
                      id="button-addon2"
                    >
                      <FontAwesomeIcon icon={faList} />
                    </button>
                  </div>
                </div>
                <a className="navbar-brand" href="#">
                  <div className="main-navbar-logo">
                    <Link to="!#">
                      <img src={Logo} />
                    </Link>
                  </div>
                </a>
                <div class="searchbox-and-icon-container">
                  {/* <div class="input-group header__search d-none d-md-block">
                    <button
                      className="btn btn-outline-secondary search__btn"
                      type="button"
                      id="button-addon1"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search Here..."
                      aria-describedby="button-addon1"
                    />
                    <button
                      className="btn btn-outline-secondary category__icon"
                      type="button"
                      id="button-addon2"
                    >
                      <FontAwesomeIcon icon={faList} />
                    </button>
                  </div> */}
                  <div class="user__icon-container">
                    <Link className="nav-link user__icon" to="!#">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <img src={User_icon_white} />
                    </Link>
                    <Link className="nav-link user__icon-plus" to="!#">
                      {/* <FontAwesomeIcon icon={faUserPlus} /> */}
                      <img src={User_icon_plus} />
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="banner-sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 ">
              <div className="section__heading">
                <div class="special_heading">
                  {/* <h1
                    className="jost-font"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Literature Club
                  </h1> */}
                  <h2
                    className="jost-font"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    <span className="special_little">Little</span> Literature
                    Club
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled.
                </p>
                <div className="join__us-btns jost-font">
                  <button
                    className="join__us-btn"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Get Started{" "}
                    <div className="offer__icon">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <img src={User_Icon} />
                    </div>
                  </button>
                  <button
                    className="join__us-btn"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Learn More{" "}
                    <div className="offer__icon">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <img src={User_Icon} />
                    </div>
                  </button>
                </div>
              </div>
              <div className="banner__img-sec mx-auto">
                <img
                  src={BannerBooks}
                  data-aos="flip-left"
                  data-aos-duration="3000"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="social-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div class="follow__social-icons">
                <a href="javascript:;" class="follow__social-icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
                <a href="javascript:;" class="follow__social-icon">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="javascript:;" class="follow__social-icon">
                  <i class="fa-brands fa-instagram"></i>
                </a>
                <a href="javascript:;" class="follow__social-icon">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>

      {/* Top Author Section */}
      <section className="top-authors">
        <div className="top__author-cartoon">
          <img src={TopAuthorCartoon} />
        </div>
        <div className="top__author-before">
          <img src={TopAuthorBefore} />
        </div>
        <div className="top__author-after">
          <img src={TopAuthorAfter} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 section__heading">
              <div class="special_heading">
                <h1
                  className="jost-font typewriter"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  Authors
                </h1>
                <h2
                  className="jost-font"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  Top Authors
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled.
              </p>
              <div className="tags jost-font">
                <a href="javascript:;" className="tag">
                  Weekly
                </a>
                <a href="javascript:;" className="tag">
                  Winners Of competition
                </a>
                <a href="javascript:;" className="tag">
                  Best reviews
                </a>
              </div>
            </div>
            <div className="author__products">
              <div className="row">
                <Slider {...settingsForFourItems}>
                  <div className="author__poduct">
                    <div className="add_to_card"></div>
                    <div className="position-relative">
                      <img src={TopAuthorBook1} />
                      <div className="cart_overlay">
                        <div className="cart__box">
                          <div className="cart__icons">
                            <a href="javascript:;" className="cart__icon ">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="cart__icon-arrow"
                              />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faHeart} />
                            </a>
                          </div>
                          <button className="addToCart__btn jost-font">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product__titled-div">
                      <h3 className="author__poduct_title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <div class="product__icon">
                        {/* <FontAwesomeIcon
                          icon={faCartShopping}
                          className="primaryColor"
                        /> */}
                        <img src={Cart_icon_pink} />
                      </div>
                    </div>
                    <div className="product__price ">
                      <span className="discount__price jost-font">$18.99</span>
                      <span className="actual__price jost-font">$20.99</span>
                    </div>
                  </div>
                  <div className="author__poduct">
                    <div className="add_to_card"></div>
                    <div className="position-relative">
                      <img src={TopAuthorBook2} />
                      <div className="cart_overlay">
                        <div className="cart__box">
                          <div className="cart__icons">
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="cart__icon-arrow"
                              />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faHeart} />
                            </a>
                          </div>
                          <button className="addToCart__btn jost-font">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product__titled-div">
                      <h3 className="author__poduct_title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <div class="product__icon">
                        {/* <FontAwesomeIcon
                          icon={faCartShopping}
                          className="primaryColor"
                        /> */}
                        <img src={Cart_icon_pink} />
                      </div>
                    </div>
                    <div className="product__price ">
                      <span className="discount__price jost-font">$18.99</span>
                      <span className="actual__price jost-font">$20.99</span>
                    </div>
                  </div>
                  <div className="author__poduct">
                    <div className="add_to_card"></div>
                    <div className="position-relative">
                      <img src={TopAuthorBook3} />
                      <div className="cart_overlay">
                        <div className="cart__box">
                          <div className="cart__icons">
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="cart__icon-arrow"
                              />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faHeart} />
                            </a>
                          </div>
                          <button className="addToCart__btn jost-font">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product__titled-div">
                      <h3 className="author__poduct_title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <div class="product__icon">
                        {/* <FontAwesomeIcon
                          icon={faCartShopping}
                          className="primaryColor"
                        /> */}
                        <img src={Cart_icon_pink} />
                      </div>
                    </div>
                    <div className="product__price ">
                      <span className="discount__price jost-font">$18.99</span>
                      <span className="actual__price jost-font">$20.99</span>
                    </div>
                  </div>
                  <div className="author__poduct">
                    <div className="add_to_card"></div>
                    <div className="position-relative">
                      <img src={TopAuthorBook2} />
                      <div className="cart_overlay">
                        <div className="cart__box">
                          <div className="cart__icons">
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="cart__icon-arrow"
                              />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faHeart} />
                            </a>
                          </div>
                          <button className="addToCart__btn jost-font">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product__titled-div">
                      <h3 className="author__poduct_title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <div class="product__icon">
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="primaryColor"
                        />
                      </div>
                    </div>
                    <div className="product__price ">
                      <span className="discount__price jost-font">$18.99</span>
                      <span className="actual__price jost-font">$20.99</span>
                    </div>
                  </div>
                  <div className="author__poduct">
                    <div className="add_to_card"></div>
                    <div className="position-relative">
                      <img src={TopAuthorBook1} />
                      <div className="cart_overlay">
                        <div className="cart__box">
                          <div className="cart__icons">
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="cart__icon-arrow"
                              />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faHeart} />
                            </a>
                          </div>
                          <button className="addToCart__btn jost-font">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product__titled-div">
                      <h3 className="author__poduct_title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <div class="product__icon">
                        {/* <FontAwesomeIcon
                          icon={faCartShopping}
                          className="primaryColor"
                        /> */}
                        <img src={Cart_icon_pink} />
                      </div>
                    </div>
                    <div className="product__price ">
                      <span className="discount__price jost-font">$18.99</span>
                      <span className="actual__price jost-font">$20.99</span>
                    </div>
                  </div>
                  <div className="author__poduct">
                    <div className="add_to_card"></div>
                    <div className="position-relative">
                      <img src={TopAuthorBook2} />
                      <div className="cart_overlay">
                        <div className="cart__box">
                          <div className="cart__icons">
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                className="cart__icon-arrow"
                              />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                            <a href="javascript:;" className="cart__icon">
                              <FontAwesomeIcon icon={faHeart} />
                            </a>
                          </div>
                          <button className="addToCart__btn jost-font">
                            Add To Cart
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="product__titled-div">
                      <h3 className="author__poduct_title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <div class="product__icon">
                        {/* <FontAwesomeIcon
                          icon={faCartShopping}
                          className="primaryColor"
                        /> */}
                        <img src={Cart_icon_pink} />
                      </div>
                    </div>
                    <div className="product__price ">
                      <span className="discount__price jost-font">$18.99</span>
                      <span className="actual__price jost-font">$20.99</span>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mana Coin Section */}
      <section className="mana-coin">
        <div className="mana-anime">
          <img src={ManaAnime} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 section__heading">
              <div class="special_heading">
                <h1
                  className="jost-font"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  Currency
                </h1>
                <h2
                  className="jost-font"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  Mana Coin
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled.
              </p>
              <div className="join__us-btns jost-font">
                <button
                  className="join__us-btn"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  View Detauils{" "}
                  <div className="offer__icon">
                    {/* <FontAwesomeIcon icon={faUser} /> */}
                    <img src={Product_Icon} />
                  </div>
                </button>
                <button
                  className="join__us-btn"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  Earn Mana{" "}
                  <div className="offer__icon">
                    <img src={Product_Icon} />
                  </div>
                </button>
              </div>
            </div>
            <div className="mana-display">
              <img
                src={ManaDisplayImg}
                data-aos="fade-up"
                data-aos-duration="3000"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Book Section */}
      <section className="combine-section">
        <section className="feature-books">
          <div className="container">
            <div className="row">
              <div className="col-md-12 section__heading">
                <div class="special_heading">
                  <h1
                    className="jost-font"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Books
                  </h1>
                  <h2
                    className="jost-font"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Featured Books
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled.
                </p>
                <div className="tags jost-font">
                  <a href="javascript:;" className="tag">
                    Books{" "}
                  </a>
                  <a href="javascript:;" className="tag">
                    novels
                  </a>
                  <a href="javascript:;" className="tag">
                    Books
                  </a>
                  <a href="javascript:;" className="tag">
                    comics
                  </a>
                </div>
              </div>
              <div className="featured__books">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card product_hover-effect">
                      <img src={FeaturedB1} className="card-img-top" />
                      <div className="card-body featured_books-body">
                        <h3 className="card-title jost-font">
                          Lorem Ipsume Doller
                        </h3>
                        <p className="author__name jost-font">Author Name</p>
                        <p className="card-text featured__book-desc jost-font">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry's standard dummy text ever
                        </p>
                        <div className="product__price-div">
                          <h3 className="author__poduct_title jost-font">
                            <div className="product__price">
                              <span className="discount__price">$18.99</span>
                              <span className="actual__price">$18.99</span>
                            </div>
                          </h3>
                          <div class="product__icon">
                            {/* <FontAwesomeIcon
                            icon={faCartShopping}
                            className="primaryColor"
                          /> */}
                            <img src={Cart_icon_pink} />
                          </div>
                        </div>
                        <div className="rating__div">
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card product_hover-effect">
                      <img src={FeaturedB2} className="card-img-top" />
                      <div className="card-body featured_books-body">
                        <h3 className="card-title jost-font">
                          Lorem Ipsume Doller
                        </h3>
                        <p className="author__name jost-font">Author Name</p>
                        <p className="card-text featured__book-desc jost-font">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry's standard dummy text ever
                        </p>
                        <div className="product__price-div">
                          <h3 className="author__poduct_title jost-font">
                            <div className="product__price">
                              <span className="discount__price">$18.99</span>
                              <span className="actual__price">$18.99</span>
                            </div>
                          </h3>
                          <div class="product__icon">
                            {/* <FontAwesomeIcon
                            icon={faCartShopping}
                            className="primaryColor"
                          /> */}
                            <img src={Cart_icon_pink} />
                          </div>
                        </div>
                        <div className="rating__div">
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card product_hover-effect">
                      <img src={FeaturedB3} className="card-img-top" />
                      <div className="card-body featured_books-body">
                        <h3 className="card-title jost-font">
                          Lorem Ipsume Doller
                        </h3>
                        <p className="author__name jost-font">Author Name</p>
                        <p className="card-text featured__book-desc jost-font">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry's standard dummy text ever
                        </p>
                        <div className="product__price-div">
                          <h3 className="author__poduct_title jost-font">
                            <div className="product__price">
                              <span className="discount__price">$18.99</span>
                              <span className="actual__price">$18.99</span>
                            </div>
                          </h3>
                          <div class="product__icon">
                            {/* <FontAwesomeIcon
                            icon={faCartShopping}
                            className="primaryColor"
                          /> */}
                            <img src={Cart_icon_pink} />
                          </div>
                        </div>
                        <div className="rating__div">
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Harry Potter Section */}
        <section className="harry-potter">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 harry-potter-bg">
                <div className="harry__potter-section">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <div class="harry__potter-img">
                        <img
                          src={HarryPotterBook}
                          data-aos="fade-right"
                          data-aos-duration="3000"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div class="harry__potter-content">
                        <h1
                          className="jost-font"
                          data-aos="fade-left"
                          data-aos-duration="3000"
                        >
                          Harry Potter
                        </h1>
                        <p className="poppins-font py-3">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry's standard dummy text ever since the when an
                          unknown
                        </p>
                        <div className="offer-end">
                          <div className="offer-remain-time poppins-font">
                            2:59:59
                          </div>
                          <div className="offer-lable jost-font">
                            Offer Ends In
                          </div>
                        </div>
                        <div className="offer-btn-group">
                          <button className="jost">
                            Buy Now{" "}
                            <div className="offer__icon">
                              {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                              <img src={Product_Icon} />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 harrypotter_books-col">
                <div className="harrypotter_book">
                  <div class="row  harrypotter_book active">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                  <div class="row  harrypotter_book">
                    <div className="col-4">
                      <img src={MyRebbetsBook} alt="..." />
                    </div>
                    <div className="col-8">
                      <h3 className="harrypotter_books-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="harrypotter_books-body">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has been the industry's
                        standard
                      </p>
                      <h3 class="author__poduct_title harrypotter_books-price jost-font">
                        <div class="product__price">
                          <span class="discount__price">$18.99</span>
                          <span class="actual__price">$18.99</span>
                        </div>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Joins us and popular combine section */}

        {/* Join us Section */}
        <section className="join-us">
          <div className="container">
            <div className="row">
              <div className="col-md-12 section__heading">
                <div class="special_heading">
                  <h1
                    className="jost-font"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Author
                  </h1>
                  <h2
                    className="jost-font"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    How You Can Join Us!
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled.
                </p>
                <div className="join__us-btns jost-font">
                  <button className="join__us-btn">
                    Original Stories{" "}
                    <div className="offer__icon">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <img src={User_icon_pink} />
                    </div>
                  </button>
                  <button className="join__us-btn">
                    Become an Author{" "}
                    <div className="offer__icon">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <img src={User_icon_pink} />
                    </div>
                  </button>
                  <button className="join__us-btn">
                    Book of Author{" "}
                    <div className="offer__icon">
                      {/* <FontAwesomeIcon icon={faUser} /> */}
                      <img src={User_icon_pink} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Tags Section */}
        <section className="popular-tags">
          <div className="top__popular-anime">
            <img src={PopularAnime} />
          </div>
          <div class="popular-before">
            <img src={PopularTagBefore} />
          </div>
          <div class="popular-after">
            <img src={PopularTagAfter} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 section__heading">
                <div class="special_heading">
                  <h1
                    className="jost-font"
                    data-aos="fade-right"
                    data-aos-duration="3000"
                  >
                    Tags
                  </h1>
                  <h2
                    className="jost-font"
                    data-aos="fade-left"
                    data-aos-duration="3000"
                  >
                    Popular Tags
                  </h2>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry Lorem Ipsum has been the industrys
                  standard dummy text ever since the when an unknown printer
                  took a galley of type and scrambled.
                </p>
                <div className="tags jost-font">
                  <a href="javascript:;" className="tag">
                    authors
                  </a>
                  <a href="javascript:;" className="tag">
                    novels
                  </a>
                  <a href="javascript:;" className="tag">
                    Books
                  </a>
                  <a href="javascript:;" className="tag">
                    comics
                  </a>
                </div>
              </div>
              <div className="col-12 popular-container">
                <div className="large-tags mb-4  jost-font">
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                </div>
                <div className="large-tags mb-4 jost-font">
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                </div>
                <div className="large-tags mb-4 jost-font">
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                  <a href="javascript:;" className="large-tag">
                    Lorem Ipsume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* Completed Novel Section */}
      <section className="completed-novel">
        <div
          className="container-fluid
        "
        >
          <div className="row">
            <div className="col-md-12 section__heading">
              <div class="special_heading">
                <h1
                  className="jost-font"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  Novels
                </h1>
                <h2
                  className="jost-font"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  Completed Novel
                </h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry Lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type and
                scrambled.
              </p>
            </div>
            <div className="row completed__novel-cards">
              <Slider {...settingsForFourItems}>
                <div className="col-md-3 novel__card-boxshadow">
                  <div className="card completed__novel-card">
                    <img src={CompletedNovelB1} className="card-img-top" />
                    <div className="card-body featured_books-body">
                      <h3 className="card-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="author__name jost-font">Author Name</p>

                      <div className="product__price-div">
                        <h3 className="author__poduct_title">
                          <div className="product__price">
                            <span className="discount__price">$18.99</span>
                            <span className="actual__price">$18.99</span>
                          </div>
                        </h3>
                        <div class="product__icon">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="primaryColor"
                          />
                        </div>
                      </div>
                      <div className="rating__div">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 novel__card-boxshadow">
                  <div className="card completed__novel-card">
                    <img src={CompletedNovelB2} className="card-img-top" />
                    <div className="card-body featured_books-body">
                      <h3 className="card-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="author__name jost-font">Author Name</p>

                      <div className="product__price-div">
                        <h3 className="author__poduct_title">
                          <div className="product__price">
                            <span className="discount__price">$18.99</span>
                            <span className="actual__price">$18.99</span>
                          </div>
                        </h3>
                        <div class="product__icon">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="primaryColor"
                          />
                        </div>
                      </div>
                      <div className="rating__div">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 novel__card-boxshadow">
                  <div className="card completed__novel-card">
                    <img src={CompletedNovelB3} className="card-img-top" />
                    <div className="card-body featured_books-body">
                      <h3 className="card-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="author__name jost-font">Author Name</p>

                      <div className="product__price-div">
                        <h3 className="author__poduct_title">
                          <div className="product__price">
                            <span className="discount__price">$18.99</span>
                            <span className="actual__price">$18.99</span>
                          </div>
                        </h3>
                        <div class="product__icon">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="primaryColor"
                          />
                        </div>
                      </div>
                      <div className="rating__div">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 novel__card-boxshadow">
                  <div className="card completed__novel-card">
                    <img src={CompletedNovelB4} className="card-img-top" />
                    <div className="card-body featured_books-body">
                      <h3 className="card-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="author__name jost-font">Author Name</p>

                      <div className="product__price-div">
                        <h3 className="author__poduct_title">
                          <div className="product__price">
                            <span className="discount__price">$18.99</span>
                            <span className="actual__price">$18.99</span>
                          </div>
                        </h3>
                        <div class="product__icon">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="primaryColor"
                          />
                        </div>
                      </div>
                      <div className="rating__div">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 novel__card-boxshadow">
                  <div className="card completed__novel-card">
                    <img src={CompletedNovelB1} className="card-img-top" />
                    <div className="card-body featured_books-body">
                      <h3 className="card-title jost-font">
                        Lorem Ipsume Doller
                      </h3>
                      <p className="author__name jost-font">Author Name</p>

                      <div className="product__price-div">
                        <h3 className="author__poduct_title">
                          <div className="product__price">
                            <span className="discount__price">$18.99</span>
                            <span className="actual__price">$18.99</span>
                          </div>
                        </h3>
                        <div class="product__icon">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="primaryColor"
                          />
                        </div>
                      </div>
                      <div className="rating__div">
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </>
  );
};
