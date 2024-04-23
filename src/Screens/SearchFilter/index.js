import { React, useState, useEffect } from "react";
import "./style.css";
// import {
//   AdertiseImage,
//   BookImage,
//   Fancy,
//   MainNoval,
//   NovalImage,
// } from "../../Assets/images";
import { UserLayout } from "../../Components/Layout/UserLayout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Col from "react-bootstrap/Col";

import cartoon from "../../Assets/images/portrait-man-cartoon-style .png";
import RangeSlider from "react-bootstrap-range-slider";

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
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const SearchFilter = () => {
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
  const [value, setValue] = useState(25);
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

      {/* Hero Section */}
      <UserLayout>
        <sectionc class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">Book Listing</h1>
              </div>
            </div>
          </div>
        </sectionc>

        {/* <section className="bestselling_books">
        <section className="bestSell__book-sec jost-font">
          <div className="bestSell__book-cartoon1">
            <img src={SmallAnime1} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bestSell__book-title">
                  <h2>BEST SELLING BOOKS OF THE MONTH</h2>
                </div>
              </div>
              <div className="col-12">
                <div className="bestSelling__books">
                  <img src={BestSellingBooks} />
                  <div className="bestSell__book-cartoon2">
                    <img src={SmallAnime2} />
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
                <div className="col-lg-4 col-md-6">
                  <div className="filters__tabs">
                    <button className="filters__tab filters__tab-active">
                      Novels
                    </button>
                    <button className="filters__tab">Commics</button>
                    <button className="filters__tab">Fan-fic</button>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3">
                  <div className="filters__category">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Categories</option>
                      <option value="1">Categories 1</option>
                      <option value="2">Categories 2</option>
                      <option value="3">Categories 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3">
                  <div className="filters__pricing">
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Pricing</option>
                      <option value="1">Pricing 1</option>
                      <option value="2">Pricing 2</option>
                      <option value="3">Pricing 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="filters__search">
                    <div class="input-group">
                      <button
                        className="btn btn-outline-secondary filters__search-icon"
                        type="button"
                        id="button-addon1"
                      >
                        <FontAwesomeIcon icon={faSearch} />
                      </button>
                      <input
                        type="text"
                        className="form-control filters__search-input"
                        placeholder="Search book By Name, Author Name"
                        aria-describedby="button-addon1"
                      />
                      <button
                        className="btn btn-outline-secondary filters__search-btn"
                        type="button"
                        id="button-addon2"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
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
      </section> */}

        <section className="search-filter">
          <div className="container">
            <div className=" row mt-5 ">
              <div className="col-md-12 mb-5 ">
                <p className="search-title">Type</p>
                <div className=" gap-5 mt-3 radbtns">
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Web Novel</p>
                  </span>

                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Light Novel</p>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Menga</p>
                  </span>
                </div>
              </div>

              <div className="col-md-12 mb-5 ">
                <p className="search-title"> Original Language</p>
                <div className=" radbtns gap-5 mt-3  ">
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">English</p>
                  </span>

                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Japanese </p>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Malaysian</p>
                  </span>

                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Thai</p>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Khmer</p>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Filipino</p>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Indonesian</p>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Korean</p>
                  </span>
                </div>
              </div>

              <div className="col-md-12 mb-5 ">
                <p className="search-title">Category</p>
                <div className=" radbtns  gap-5 mt-3  ">
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Translated </p>
                  </span>

                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   "> MTL</p>
                  </span>
                  <span className="filter_radio  gap-2  d-flex ">
                    {" "}
                    <input type="radio" />
                    <p className="   ">Original Work</p>
                  </span>
                </div>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara">Select Chapter Range</p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Chapters</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Release Frequency </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Frequency</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Select Reviews Range </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Reviews</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Select Book Rating </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Rating</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Number of Rating </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Rating</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>

              <div className="row mb-5">
                {/* <p>Select Chapter Range</p> */}
                <Form>
                  <Form.Group as={Row}>
                    <Col xs="3">
                      <p className="rangepara"> Number of Readers </p>
                    </Col>
                    <Col xs="6">
                      <RangeSlider
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </Col>
                    <Col xs="3">
                      <p className="chapterrange">Readers</p>
                    </Col>
                  </Form.Group>
                </Form>
              </div>
              <div className="col-md-4">
                <p className="book-release-title mb-2 ">
                  Select Book Release Date
                </p>
                <div className=" d-flex mb-5  gap-2  ">
                  <span className="book-release-date">8/56/2012</span>
                  <span className="book-release-date">8/56/2012</span>
                </div>
              </div>

              <div className="col-md-8">
                <p className="book-release-title mb-2 ">Select Book Genre</p>
                <div className="book-release-genre-dropdown  mb-5  gap-3 bookGenre ">
                  <span className="book-release-genre">Lorem Ipsume</span>

                  <span className="book-release-genre">Lorem Ipsume</span>

                  <span className="book-release-genre">Lorem Ipsume</span>

                  <span className="book-release-genre">Lorem Ipsume</span>
                </div>
              </div>

              <div className="col-md-8">
                <div className="main_cartoon_image">
                  <img src={cartoon} />
                </div>
                <div className="  row">
                  <div className="    mb-2 gap-5  col-md-5 ">
                    <p className="book-release-title mb-4 ">
                      Tags [ <span className="book-release-date">OR</span> ]
                    </p>
                    <input
                      type="text"
                      placeholder="Include"
                      className="book-release-input "
                    />
                  </div>
                  <div className="    mb-2   gap-4 col-md-5  ">
                    <p className="story">Story Status </p>

                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input"
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="  d-flex mb-5  gap-4 col-md-5  ">
                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input"
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>

                <div className=" mb-4  row">
                  <div className="    mb-2 gap-5  col-md-5 ">
                    <p className="book-release-title mb-2 ">Group</p>

                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input"
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="    mb-2   gap-4 col-md-5  ">
                    <p className="book-release-title  mb-2">
                      {" "}
                      Original Publisher{" "}
                    </p>
                    <input
                      type="text"
                      placeholder="Include"
                      className="book-release-input"
                    />
                  </div>
                </div>
                <div className="  mb-4 row">
                  <div className="    mb-2 gap-5  col-md-5 ">
                    <p className="book-release-title mb-2 ">Translator</p>
                    <input
                      type="text"
                      placeholder="Include"
                      className="book-release-input "
                    />
                  </div>
                  <div className="    mb-2   gap-4 col-md-5  ">
                    <p className="book-release-title  mb-2"> Series </p>
                    <input
                      type="text"
                      placeholder="Include"
                      className="book-release-input"
                    />
                  </div>
                </div>

                <div className="  mb-4 row">
                  <div className="    mb-2 gap-5  col-md-5 ">
                    <p className="book-release-title mb-2 ">
                      Search Results By..
                    </p>

                    <Form.Select
                      aria-label="Default select example"
                      className="book-release-input"
                    >
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <div className="    mb-2   gap-4 col-md-5  ">
                    <p className="book-release-title  mb-2"> Author </p>
                    <input
                      type="text"
                      placeholder="Include"
                      className="book-release-input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        
      </UserLayout>
    </>
  );
};
