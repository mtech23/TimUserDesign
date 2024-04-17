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
import redio from "../../Assets/images/radio.png";
import spiner from "../../Assets/images/spinerimg.png";
import spinerpercentage from "../../Assets/images/spinerpercentage.png";
import missionbg from "../../Assets/images/missionbg.png";
import coin from "../../Assets/images/coin.png";
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

export const Mission = () => {
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
     <UserLayout>
      {/* Header */}

      {/* Hero Section */}
      <sectionc class="inner__hero-sec jost-font">
        <div className="container">
          <div className="row">
            <div className="herro__title">
              <h1 className="typewriter">MISSIONS </h1>
            </div>
          </div>
        </div>
      </sectionc>

      <section className="bestselling_books">
        <section className="bestSell__mission-sec jost-font">
          <div className="bestSell__book-cartoon1">
            <img src={SmallAnime1} />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bestSell__book-title">
                  <h2> SPIN FOR FREE REWARD</h2>
                </div>
              </div>
              <div className="col-12">
                <div className="bestSelling__books">
                  {/* <img src={BestSellingBooks} /> */}
                  <div className="bestSell__book-cartoon2">
                    {/* <img src={SmallAnime2} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bestSell__bookListing-sec">
          <div className="bestSell__filters">
            <div className="container">
              <div className="bg-spiner  justify-content-center  mx-auto ">
                <img src={spiner} className="spiner-img" />
              </div>

              <div className="row">
                <div className="col-md-4  spiner-time">
                  <div className="spiner-ione-time">
                    <p className="spiner-ione-time">ONE TIME</p>
                  </div>

                  <div className="missionimg1">
                    <div className=" connect row ms-2 mb-2 color-white">
                      <div className="col-md-5">
                        <p className="cnt">Connect Social: </p>
                      </div>
                      <div className="col-md-6    d-flex  gap-3 align-items-center">
                        <img className="coinimg" src={coin} />
                        <p className="mana">5 MANA</p>
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>

                    <div className=" connect row  ms-2  mb-2 color-white">
                      <div className="col-md-5">
                        <p className="cnt">Purchase Mana Pack: </p>
                      </div>
                      <div className="col-md-6   d-flex  gap-3 ">
                        <img className="coinimg" src={coin} />
                        <p className="mana">5 MANA</p>
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>

                    <div className=" connect row  ms-2  mb-2 color-white">
                      <div className="col-md-5">
                        <p className="cnt">Purchase Subscription:</p>
                      </div>
                      <div className="col-md-6   d-flex  gap-3 ">
                        <img className="coinimg" src={coin} />
                        <p className="mana">5 MANA</p>
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>

                    <span className="spinerpercentage  ">
                      <img
                        className="percentage justify-content-center "
                        src={spinerpercentage}
                      />
                    </span>
                  </div>
                </div>
                <div className="col-md-4 spiner-time">
                  <div className="spiner-ione-time">
                    <p className="reading">DAILY</p>
                    <p className="missionpara"> Mission resets In 12hr</p>
                  </div>
                  <p></p>

                  <div className="missionimg2">
                     
                  
                  
                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-8  ">
                        <p className="cnt">Login </p>
                      </div>
                      <div className="col-md-4    d-flex  gap-2 ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>



                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-8  ">
                        <p className="cnt">Vote for a book you like </p>
                      </div>
                      <div className="col-md-2    d-flex  gap-2 ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>
                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-8  ">
                        <p className="cnt" >Post One Comment </p>
                      </div>
                      <div className="col-md-4    d-flex  gap-2 ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>

                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-8  ">
                        <p className="cnt" >Spend 5 or more coins </p>
                      </div>
                      <div className="col-md-4    d-flex  gap-2 ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>

                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-8  ">
                        <p className="cnt">Like A review</p>
                      </div>
                      <div className="col-md-4    d-flex  gap-2 ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>
                    <div
                      className="completespercent  mb-4  mx-auto">
                      <p className="cnt">4/5 Completed</p>
                    </div>
                    <div className="complete-all   ">
                      <p>COMPLETE ALL DAILY MISSION TO GET</p>
                    </div>
                    <div className="manacoin1 mx-auto ">
                      <p className="manaco1">5 MANA</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 spiner-time">
                  <div className="spiner-ione-time">
                    <p className="reading">READING/WEEKLY</p>

                    <p className="missionpara">Mission resets In 3 Days</p>
                  </div>

                  <div className="missionimg3">
                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-10  ">
                        <p className="cnt" >Read for 60 more mins this week: </p>
                      </div>
                      <div className="col-md-2    d-flex   ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>
                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-10  ">
                        <p className="cnt">Read for 60 more mins this week: </p>
                      </div>
                      <div className="col-md-2    d-flex   ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>
                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-10  ">
                        <p className="cnt">Read for 60 more mins this week: </p>
                      </div>
                      <div className="col-md-2    d-flex   ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>
                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-10  ">
                        <p className="cnt">Read for 60 more mins this week: </p>
                      </div>
                      <div className="col-md-2    d-flex   ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>

                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-10  ">
                        <p className="cnt">Read for 60 more mins this week: </p>
                      </div>
                      <div className="col-md-2    d-flex   ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>




                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-10  ">
                        <p className="cnt">Read for 60 more mins this week: </p>
                      </div>
                      <div className="col-md-2    d-flex   ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>



                    <div className=" connect row   mb-4  ms-5 mx-auto   mb-2 color-white justify-content-cente">
                      <div className="col-md-10  ">
                        <p className="cnt">Read for 60 more mins this week: </p>
                      </div>
                      <div className="col-md-2    d-flex   ">
                        <img src={redio} className="radioimg" />
                      </div>
                    </div>


                

                    <div className="complete-all   ">
                      <p>COMPLETE ALL DAILY MISSION TO GET</p>
                    </div>
                    <div className="manacoin2 mx-auto ">
                      <p className="manaco2">5 MANA</p>
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
      </UserLayout>
    </>
  );
};
