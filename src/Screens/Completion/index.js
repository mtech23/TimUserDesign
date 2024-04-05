import { React, useState, useEffect } from "react";
import "./style.css";
// import {
//   AdertiseImage,
//   BookImage,
//   Fancy,
//   MainNoval,
//   NovalImage,
// } from "../../Assets/images";
import Form from "react-bootstrap/Form";
import medal from "../../Assets/images/Medal.png";
import cup from "../../Assets/images/cupimg.png";
import docs from "../../Assets/images/docimg.png";

import { UserLayout } from "../../Components/Layout/UserLayout";
import board1 from "../../Assets/images/board1.png";
import {
  AuthorList1,
  Logo,
  SmallAnime1,
  SmallAnime2,
  User_icon_plus,
  User_icon_white,
  BestSellingBooks,
  BestSellingBook1,
  BestSellingBook2,
  BestSellingBook3,
  BestSellingBook4,
  BestSellingBook5,
  BestSellingBook6,
  BestSellingBook7,
  BestSellingBook8,
  BestSellingBook9,
  BestSellingBook10,
  BestSellingBook11,
  BestSellingBook12,
} from "../../Assets/images";
import book1 from "../../Assets/images/book1.png";
import book2 from "../../Assets/images/book2.png";
import book3 from "../../Assets/images/book3.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Completion = () => {
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
    <UserLayout>
      <>
        {/* Header */}

        {/* Hero Section */}
        <sectionc class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter"> COMPETITION </h1>
              </div>
            </div>
          </div>
        </sectionc>
        <div className="sectioncompletion gap-5   py-3  px-5  row justify-content-center  mx-auto ">
          <div class=" col-md-4 input-completion completion__search">
            <button
              className="completion_btn btn btn-outline-secondary  "
              type="button"
              id="button-addon1"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
            <input
              type="text"
              className="completion-input form-control "
              placeholder="Search Here..."
              aria-describedby="button-addon1"
            />
            <button
              className="btn btn-outline-secondary  compition-category__icon"
              type="button"
              id="button-addon2"
            >
              search
            </button>
          </div>
          <div class=" col-md-2 input-completion completion__search">
            <Form.Select
              className="completion-input-select"
              aria-label="Default select example"
            >
              <option>How To Participate</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
          <div class=" col-md-2 input-completion completion__search">
            <Form.Select
              className="completion-input-select"
              aria-label="Default select example"
            >
              <option>How To Participate</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        <section className="bestselling_books">
          <section className="bestSell__book-sec jost-font">
            <div className="bestSell__book-cartoon1">
              {/* <img src={SmallAnime1} /> */}
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="bestSell__book-title">
                    <h2> COMPETITION WINNERS</h2>
                  </div>
                </div>
                <div className="col-12">
                  <div className="bestSelling__books">
                    <div className="row mb-5">
                      <div className="col-md-4">
                        <div className=" d-flex gap-2 justify-content-center  ">
                          <span className="bookvote bg-white color-blacl ">
                            Vote
                          </span>
                          <span className="bookdetail bg-white color-blacl">
                            Details
                          </span>
                        </div>
                        <img src={book1} className="img-fluid" />
                      </div>
                      <div className="col-md-4">
                        <div className="completion-book d-flex gap-2 justify-content-center  ">
                          <span className="bookvote bg-white color-black ">
                            Vote
                          </span>
                          <span className="bookdetail bg-white color-blacl">
                            Details
                          </span>
                        </div>
                        <img src={book2} className="img-fluid" />
                      </div>
                      <div className="col-md-4">
                        <div className=" d-flex gap-2  justify-content-center ">
                          <span className="bookvote bg-white color-black ">
                            Vote
                          </span>
                          <span className="bookdetail bg-white color-blacl">
                            Details
                          </span>
                        </div>
                        <div className="completion-board">
                          <img src={book3} className=" img-fluid" />
                        </div>
                      </div>

                      <img src={board1} className="board-compition" />

                      <div className="sectioncompletion row      py-3  px-5   justify-content-center  mx-auto ">
                        <div class=" col-md-3 input-completion completion__search">
                          <button
                            className="completion_btn btn btn-outline-secondary  "
                            type="button"
                            id="button-addon1"
                          ></button>

                          <p className="completion-input form-control ">
                            {" "}
                            View All Winners
                          </p>
                          <button
                            className="btn btn-outline-secondary  compition-category__icon"
                            type="button"
                            id="button-addon2"
                          >
                            <img src={medal} className="   " id="icon-img" />
                          </button>
                        </div>
                        <div class=" col-md-3 input-completion completion__search">
                          <button
                            className="completion_btn btn btn-outline-secondary  "
                            type="button"
                            id="button-addon1"
                          ></button>

                          <p className="completion-input form-control ">
                            {" "}
                            View All Winners
                          </p>
                          <button
                            className="btn btn-outline-secondary  compition-category__icon"
                            type="button"
                            id="button-addon2"
                          >
                            <img src={cup} className="   " id="icon-img" />
                          </button>
                        </div>
                        <div class=" col-md-3 input-completion completion__search">
                          <button
                            className="completion_btn btn btn-outline-secondary  "
                            type="button"
                            id="button-addon1"
                          ></button>

                          <p className="completion-input form-control ">
                            {" "}
                            View All Winners
                          </p>
                          <button
                            className="btn btn-outline-secondary  compition-category__icon"
                            type="button"
                            id="button-addon2"
                          >
                            <img src={docs} className="   " id="icon-img" />
                          </button>
                        </div>
                        <div class=" col-md-3 input-completion completion__search">
                          <button
                            className="completion_btn btn btn-outline-secondary  "
                            type="button"
                            id="button-addon1"
                          ></button>

                          <p className="completion-input form-control ">
                            {" "}
                            View All Winners
                          </p>
                          <button
                            className="btn btn-outline-secondary  compition-category__icon"
                            type="button"
                            id="button-addon2"
                          >
                            <img src={medal} className="   " id="icon-img" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="bestSell__bookListing-sec">
            <div className="bestSell__filters">
              <div className="container">
                <div className="row align-items-center">
                 
              
                 
                </div>
                <div className="bestBooks__listing">
                  <div className="row">
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook1} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook2} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook3} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook4} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook5} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook6} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook7} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook8} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook9} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook10} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook11} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                      <div className="bestBooks__list">
                        <div className="bestBooks__list-img">
                          <img src={BestSellingBook12} />
                          <div className="bestBooks__list-overlay">
                            <button className="bestBooks__purchase-btn">
                              Purchases
                            </button>
                          </div>
                        </div>
                        <div className="bestBooks__list-body">
                          <h3 className="bestBooks__list-title">
                            Book Name Here
                          </h3>
                          <p className="bestBooks__list-text">
                            Lorem Ipsum is simply dummy text{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="book__listing-pagination">
                    <nav aria-label="Page navigation example">
                      <ul class="pagination">
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
                      </ul>
                    </nav>
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
    </UserLayout>
  );
};