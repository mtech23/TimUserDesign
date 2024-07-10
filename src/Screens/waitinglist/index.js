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
import Clock from "../../Assets/images//Clock.png";
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
export const Waitinglist = () => {
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
                <h1 className="typewriter">    WAITING LIST </h1>
              </div>
            </div>
          </div>
        </section>
      
      





















        <section class="coverr">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 ">
                        <div class="btnrrw">
                            <button class="history">Library </button>
                            <button class="hist" >History </button>
                            <button class="lib" >Waiting List </button>
                            <img class="img-fluid polygoon" src={Polygon6}/>
                        </div>
                      
                        <div class="bookk">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="watch">
                                        <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                       </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                        <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                   <div class="raate">
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
                            <div class="linee"></div>
                            <div class="row mt-3 pb-3">
                                <div class="col-lg-6">
                                    <p class="numm">Status: <span class="numb"> Requested</span></p>
                                </div>
                                <div class="col-lg-6 ">
                                    <div class="btnrow">
                                        
                                    <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                         <div class="bookk">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="watch">
                                    <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                       </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                    <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                   <div class="raate">
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
                            <div class="linee"></div>
                            <div class="row mt-3 pb-3">
                                <div class="col-lg-6">
                                    <p class="numm">Status: <span class="dropp"> Dropped</span></p>
                                </div>
                                <div class="col-lg-6 ">
                                    <div class="btnrow">
                                        
                                    <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                         <div class="bookk">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="watch">
                                    <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                       </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                    <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                   <div class="raate">
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
                            <div class="linee"></div>
                            <div class="row mt-3 pb-3">
                                <div class="col-lg-6">
                                    <p class="numm">Status: <span class="numb"> Requested</span></p>
                                </div>
                                <div class="col-lg-6">
                                    <div class="btnrow">
                                        
                                    <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                          <div class="bookk">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="watch">
                                    <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                       </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                    <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                   <div class="raate">
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
                            <div class="linee"></div>
                            <div class="row mt-3 pb-3">
                                <div class="col-lg-4">
                                    <p class="numm">Status: <span class="pickk"> Picked Up</span></p>
                                </div>
                                <div class="col-lg-8">
                                    <div class="btnrrw">
                                        <button class="read" ><span>Add To Library  &nbsp;&nbsp;</span> <i class="fa-solid fa-book-open iicon"></i></button>
                                    <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                           <div class="bookk">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="watch">
                                    <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                       </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                    <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                   <div class="raate">
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
                            <div class="linee"></div>
                            <div class="row mt-3 pb-3">
                                <div class="col-lg-6">
                                    <p class="numm">Status: <span class="numb"> Requested</span></p>
                                </div>
                                <div class="col-lg-6 ">
                                    <div class="btnrow">
                                        
                                    <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                       
                    </div>


                    <div class="col-md-6 ">
                       <div class="btnrrw">
                        <button class="reading" >Sort Books &nbsp;&nbsp;<i class="fa-solid fa-arrow-down-wide-short icons"></i></button>
                        <button class="reading" >Clear Waiting List &nbsp;&nbsp;<i class="fa-solid fa-trash icons"></i></button>
                       </div>

                      
                         <div class="bookk">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="watch">
                                    <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                       </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                    <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                   <div class="raate">
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
                            <div class="linee"></div>
                            <div class="row mt-3 pb-3">
                                <div class="col-lg-4">
                                    <p class="numm">Status: <span class="pickk"> Picked Up</span></p>
                                </div>
                                <div class="col-lg-8">
                                    <div class="btnrrw">
                                        <button class="read" ><span>Add To Library  &nbsp;&nbsp;</span> <i class="fa-solid fa-book-open iicon"></i></button>
                                    <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="bookk">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="watch">
                                    <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                       </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                    <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                   <div class="raate">
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
                            <div class="linee"></div>
                            <div class="row mt-3 pb-3">
                                <div class="col-lg-4">
                                    <p class="numm">Status: <span class="pickk"> Picked Up</span></p>
                                </div>
                                <div class="col-lg-8">
                                    <div class="btnrrw">
                                        <button class="read" ><span>Add To Library  &nbsp;&nbsp;</span> <i class="fa-solid fa-book-open iicon"></i></button>
                                    <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                            <div class="bookk">
                                <div class="row">
                                    <div class="col-lg-3 col-sm-12">
                                        <div class="watch">
                                        <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                           </div>
                                        
                                    </div>
                                    <div class="col-lg-9 col-sm-12">
                                       <div class="description">
                                        <h3 class="name">Book Name Here</h3>
                                        <div class="p-3 res">
                                        <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                        </div>
                                       </div>
                                       <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                       <div class="raate">
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
                                <div class="linee"></div>
                                <div class="row mt-3 pb-3">
                                    <div class="col-lg-5">
                                        <p class="numm">Status: <span class="dropp"> Dropped</span></p>
                                    </div>
                                    <div class="col-lg-7 ">
                                        <div class="btnrow">
                                            
                                        <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          
                             <div class="bookk">
                                <div class="row">
                                    <div class="col-lg-3 col-sm-12">
                                        <div class="watch">
                                        <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                           </div>
                                        
                                    </div>
                                    <div class="col-lg-9 col-sm-12">
                                       <div class="description">
                                        <h3 class="name">Book Name Here</h3>
                                        <div class="p-3 res">
                                        <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                        </div>
                                       </div>
                                       <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                       <div class="raate">
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
                                <div class="linee"></div>
                                <div class="row mt-3 pb-3">
                                    <div class="col-lg-5">
                                        <p class="numm">Status: <span class="dropp"> Dropped</span></p>
                                    </div>
                                    <div class="col-lg-7 ">
                                        <div class="btnrow">
                                            
                                        <button class="read" >Book Deatils &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                           <div class="bookk">
                            <div class="row">
                                <div class="col-lg-3 col-sm-12">
                                    <div class="watch">
                                    <img class="img-fluid clock" src={Clock}/>
                                        <img class="img-fluid bookcover" src={lcimg}/>
                                       </div>
                                    
                                </div>
                                <div class="col-lg-9 col-sm-12">
                                   <div class="description">
                                    <h3 class="name">Book Name Here</h3>
                                    <div class="p-3 res">
                                    <img class="img-fluid vote" src={Vote}/>
                                        <img class="img-fluid vote" src={Notification}/>
                                        <img class="img-fluid vote" src={Trashcan}/>
                                    </div>
                                   </div>
                                   <div class="mainly">
                                   <button class="category" >Category </button>
                                   <button class="category" >Category </button>
                                   </div>
                                   <div class="raate">
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
                            <div class="linee"></div>
                            <div class="row mt-3 pb-3">
                                <div class="col-lg-5">
                                    <p class="numm">Status: <span class="dropp"> Dropped</span></p>
                                </div>
                                <div class="col-lg-7 ">
                                    <div class="btnrow">
                                        
                                    <button class="read" >Book Deatils &nbsp;&nbsp; <i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                    
                </div>
            </div>
        </section>











        {/* Footer */}
       
      </>
    </UserLayout>
  );
};
