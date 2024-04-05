import { React, useState, useEffect } from "react";
import "./style.css";
// import {
//   AdertiseImage,
//   BookImage,
//   Fancy,
//   MainNoval,
//   NovalImage,
// } from "../../Assets/images";
import Group1000002083 from '../../Assets/images/Group1000002083.png'
import Polygon6 from '../../Assets/images/Polygon6.png'
import Form from "react-bootstrap/Form";
import medal from "../../Assets/images/Medal.png";

import cup from "../../Assets/images/cupimg.png";
import docs from "../../Assets/images/docimg.png";
 
import Trashcan from '../../Assets/images/Trashcan.png'

import Notification from '../../Assets/images/Notification.png'
import Vote from '../../Assets/images/Vote.png'
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
import lcimg from '../../Assets/images/51L+xXb2C7L 1.png'
export const History = () => {
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
        <section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter">      HISTORY </h1>
              </div>
            </div>
          </div>
        </section>
      
      
























        <section class="cover">
            
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="btnrw">
                            <button class="lib" >WAITING LIST </button>
                            <img class="img-fluid polygon" src={Polygon6}/>
                            <button class="hist" >History </button>
                            <button class="history" >  WAITING LIST </button>
                        </div>
                        
                        <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="main">
                                        <img class="img-fluid bookcover" src={Group1000002083}/>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                         
                                         
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrw">
                                        <button class="read" ><span>Continue Reading</span><i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                         
                         <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                   <div class="main">
                                    <img class="img-fluid bookcover" src={Group1000002083}/>
                                   </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class=" res p-3 res">
                                         
                                         
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrw">
                                        <button class="read" ><span>Continue Reading</span> <i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                         
                         <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="main">
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                    
                                    </div>
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                         
                                         
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrw">
                                        <button class="read" ><span>Continue Reading</span><i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                          
                          <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="main">
                                        <img class="img-fluid bookcover" src={Group1000002083}/>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                         
                                         
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrw">
                                        <button class="read" ><span>Continue Reading</span> <i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                           
                           <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="main">
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                         
                                        
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrw">
                                        <button class="read m-auto " ><span>Continue Reading</span> <i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                       
                    </div>


                    <div class="col-md-6">
                       <div class="btnrow">
                        <button class="reading" >Sort Books <i class="fa-solid fa-arrow-down-wide-short icons"></i></button>
                        <button class="reading" >Recommendations <i class="fa-solid fa-book-open icons"></i></button>
                       </div>

                         
                         <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="main">
                                        <img class="img-fluid bookcover" src={Group1000002083}/>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                         
                                         
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrw">
                                        <button class="read" ><span>Continue Reading</span> <i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
                        
                        <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="main">
                                        <img class="img-fluid bookcover" src={Group1000002083}/>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                         
                                         
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7">
                                    <div class="btnrw">
                                        <button class="read" ><span>Continue Reading</span> <i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                          
                            <div class="book">
                                <div class="row">
                                    <div class="col-lg-3 col-sm-12">
                                        <div class="main">
                                            <img class="img-fluid bookcover" src={Group1000002083}/>
                                        </div>
                                        
                                    </div>
                                    <div class="col-lg-9 col-sm-12">
                                       <div class="description">
                                        <h3 class="name">Book Name Here</h3>
                                        <div class="p-3 res">
                                             
                                             
                                            <img class="img-fluid vote" src={Trashcan}/>
                                        </div>
                                       </div>
                                       <button class="category" >Category </button>
                                       <button class="category" >Category </button>
                                       <div class="rate">
                                        <span class="fa fa-star checked star" ></span>
                                        <span class="fa fa-star checked star " ></span>
                                        <span class="fa fa-star checked star " ></span>
                                        <span class="fa fa-star checked star "></span>
                                        <span class="fa fa-star checked star " ></span>
                                        <p class="rating">(4.82)</p>
                                      </div>
                                        <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                            <span class="view" > View More </span></p>
                                            
                                    </div>
                                </div>
                                <div class="line"></div>
                                <div class="row mt-3">
                                    <div class="col-md-5">
                                        <p class="num">10/ <span class="number">1032</span></p>
                                    </div>
                                    <div class="col-md-7 ">
                                        <div class="btnrw">
                                            <button class="read" ><span>Continue Reading</span><i class="fa-solid fa-book-open icon"></i></button>
                                        <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             
                          
                         <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="main">
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                         
                                         
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrw">
                                        <button class="read" ><span>Continue Reading</span> <i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                           
                           <div class="book">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="main">
                                        <img class="img-fluid bookcover" src={Group1000002083}/>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                         
                                         
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   <div class="rate">
                                    <span class="fa fa-star checked star" ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <span class="fa fa-star checked star "></span>
                                    <span class="fa fa-star checked star " ></span>
                                    <p class="rating">(4.82)</p>
                                  </div>
                                    <p class="detail">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                        <span class="view" > View More </span></p>
                                        
                                </div>
                            </div>
                            <div class="line"></div>
                            <div class="row mt-3">
                                <div class="col-md-5">
                                    <p class="num">10/ <span class="number">1032</span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrw">
                                        <button class="read" ><span>Continue Reading</span> <i class="fa-solid fa-book-open icon"></i></button>
                                    <button class="read" >Book Deatils <i class="fa-solid fa-calendar-week icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                         
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
    </UserLayout>
  );
};
