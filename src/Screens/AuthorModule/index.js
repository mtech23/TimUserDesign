import { React, useState, useEffect } from "react";
import "./author.css";
// import {
//   AdertiseImage,
//   BookImage,
//   Fancy,
//   MainNoval,
//   NovalImage,
// } from "../../Assets/images";

import {
  AuthorList1,
  AuthorList2,
  AuthorListAfterAnime,
  AuthorListBgAnime,
  Logo,
  User_icon_plus,
  User_icon_white,
} from "../../Assets/images";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const AuthorModule = () => {
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

      {/* Hero Section */}
      <sectionc class="inner__hero-sec jost-font">
        <div className="container">
          <div className="row">
            <div className="herro__title">
              <h1 className="typewriter">Authors</h1>
            </div>
          </div>
        </div>
      </sectionc>

      <section className="author__of-month jost-font">
        <section className="authors__carousel">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="authors__carousel-title">
                  <h2>AUTHORS OF THE MONTH</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-md-2">
                <div className="carousel-image">
                  <img src={AuthorList1} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="authors__list">
          <div className="author__list-cartoon">
            <img src={AuthorListAfterAnime} />
          </div>
          <div className="author__list-bgCartoon">
            <img src={AuthorListBgAnime} />
          </div>
          <div className="container relativePart">
            <div className="row aligns-items-center author__list-row">
              <div className="col-lg-3">
                <div className="author__img">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="author__list-content">
                  <div className="author__list-title">
                    <h2>John Doe</h2>
                    <hr />
                    <hr />
                  </div>
                  <div className="author__list-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially
                    </p>
                  </div>
                  <div className="author__list-footer">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="author__list-genre">
                          <h3 className="genre__title">Books Genere:</h3>
                          <div className="genere__tags">
                            <Link to="/" className="genere__tag">
                              Thrill
                            </Link>
                            <Link to="/" className="genere__tag">
                              Romance
                            </Link>
                            <Link
                              to="/"
                              className="genere__tag genere__tag-active"
                            >
                              Others
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="author__list-rating">
                          <h3 className="rating__title">Ratings:</h3>
                          <div className="rating__div">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          </div>
                          <button className="rating__btn">Add Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aligns-items-center author__list-row">
              <div className="col-lg-3">
                <div className="author__img">
                  <img src={AuthorList2} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="author__list-content">
                  <div className="author__list-title">
                    <h2>John Doe</h2>
                    <hr />
                    <hr />
                  </div>
                  <div className="author__list-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially
                    </p>
                  </div>
                  <div className="author__list-footer">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="author__list-genre">
                          <h3 className="genre__title">Books Genere:</h3>
                          <div className="genere__tags">
                            <Link to="/" className="genere__tag">
                              Thrill
                            </Link>
                            <Link to="/" className="genere__tag">
                              Romance
                            </Link>
                            <Link
                              to="/"
                              className="genere__tag genere__tag-active"
                            >
                              Others
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="author__list-rating">
                          <h3 className="rating__title">Ratings:</h3>
                          <div className="rating__div">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          </div>
                          <button className="rating__btn">Add Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aligns-items-center author__list-row">
              <div className="col-lg-3">
                <div className="author__img">
                  <img src={AuthorList1} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="author__list-content">
                  <div className="author__list-title">
                    <h2>John Doe</h2>
                    <hr />
                    <hr />
                  </div>
                  <div className="author__list-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially
                    </p>
                  </div>
                  <div className="author__list-footer">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="author__list-genre">
                          <h3 className="genre__title">Books Genere:</h3>
                          <div className="genere__tags">
                            <Link to="/" className="genere__tag">
                              Thrill
                            </Link>
                            <Link to="/" className="genere__tag">
                              Romance
                            </Link>
                            <Link
                              to="/"
                              className="genere__tag genere__tag-active"
                            >
                              Others
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="author__list-rating">
                          <h3 className="rating__title">Ratings:</h3>
                          <div className="rating__div">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          </div>
                          <button className="rating__btn">Add Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row aligns-items-center author__list-row">
              <div className="col-lg-3">
                <div className="author__img">
                  <img src={AuthorList2} />
                </div>
              </div>
              <div className="col-lg-9">
                <div className="author__list-content">
                  <div className="author__list-title">
                    <h2>John Doe</h2>
                    <hr />
                    <hr />
                  </div>
                  <div className="author__list-body">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially
                    </p>
                  </div>
                  <div className="author__list-footer">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="author__list-genre">
                          <h3 className="genre__title">Books Genere:</h3>
                          <div className="genere__tags">
                            <Link to="/" className="genere__tag">
                              Thrill
                            </Link>
                            <Link to="/" className="genere__tag">
                              Romance
                            </Link>
                            <Link
                              to="/"
                              className="genere__tag genere__tag-active"
                            >
                              Others
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="author__list-rating">
                          <h3 className="rating__title">Ratings:</h3>
                          <div className="rating__div">
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                          </div>
                          <button className="rating__btn">Add Review</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
