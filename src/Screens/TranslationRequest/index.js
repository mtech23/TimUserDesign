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
import {
 
  Product_Icon,
  HarryPotterBook,
   
} from "../../Assets/images";
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
import dragon from "../../Assets/images/dragon.png";
import mana from "../../Assets/images/mana.png";
import chechmark from "../../Assets/images/checkmark.png";
import timebg from "../../Assets/images/timebg.png";
import ihk from "../../Assets/images/ihk.png";
import book2 from "../../Assets/images/book2.png";
import book3 from "../../Assets/images/book3.png";
import Ellipse44 from "../../Assets/images/Ellipse 44.png";
import votefile from "../../Assets/images/votefile.png";
import detailfile from "../../Assets/images/detailfile.png";
import Clock from "../../Assets/images//Clock.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from '../../Assets/images/51L+xXb2C7L 1.png'
export const TranslationRequest = () => {
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
useEffect(() =>{
  adsListing()
} , [])
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
                <h1 className="typewriter"> Translation Request </h1>
              </div>
            </div>
          </div>
        </section>
        <section className="bestSell__book-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="col-12">
                  <h2 className="topfive">TOP 5</h2>
                  <h6 className="novelVote">voted novels of all time</h6>
              </div>
              <div className="col-12">
                <div className="bestSelling__books">
                  <img src={BestSellingBooks} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recent">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h3 className="picked">Recently Picked Up</h3>
                    </div>
                    <div className="col-md-4">
                       <div className="dualbtn">   
                               <ul class="nav nav-pills " id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link active recentbtn recomend" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Recent</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link recentbtn recomend" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile " aria-selected="false">Recommended</button>
                                </li>
                            
                            </ul>

                            </div>
                    </div>
                    <div className="divider"></div>
                    <div className="dividerr"></div>                  
                </div>

                <div class="tab-content" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                  
                <div className="row mt-5 bookboxes">
                    <div className="col-lg-3 col-sm-8 col-md-6">

                        <div className="rankbook">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook1">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook2">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div>  
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook3">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>
                            </div>    
                          </div>
                        </div>
                    </div>   
                </div>

                      </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                      <div className="row mt-5 bookboxes">
                    <div className="col-lg-3 col-sm-8 col-md-6">

                        <div className="rankbook">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook1">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook2">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div>  
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook3">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>
                            </div>    
                          </div>
                        </div>
                    </div>   
                </div>

                      </div>
                    </div>

                {/* <div className="row mt-5 bookboxes">
                    <div className="col-lg-3 col-sm-8">


                        <div className="rankbook">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8">
                        <div className="rankbook1">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8">
                        <div className="rankbook2">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div>  
                    <div className="col-lg-3 col-sm-8">
                        <div className="rankbook3">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>
                            </div>    
                          </div>
                        </div>
                    </div>   
                </div> */}

            </div>
        </section>
        <section className="topfive__book-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="col-12">
                  <h2 className="topfive">TOP 5</h2>
                  <h6 className="novelVote">voted novels of all time</h6>
              </div>
              <div className="col-12">
                <div className="bestSelling__books">
                  <img src={BestSellingBooks} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="recent">
            <div className="container">
                {/* <div className="row">
                    <div className="col-md-8">
                        <h3 className="picked">Recently Picked Up</h3>
                    </div>
                    <div className="col-md-4">
                       <div className="dualbtn">
                            <p className="recomend"> Recent </p>                      
                            <button className="recentbtn">Recommended</button>
                            <img class="img-fluid points" src={Polygon6}/> 
                       </div>
                       
                    </div>
                    <div className="divider"></div>
                    <div className="dividerr"></div>                  
                </div> */}
                {/* <div className="row mt-5 bookboxes">
                    <div className="col-lg-3 col-sm-8">
                        <div className="rankbook">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8">
                        <div className="rankbook1">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8">
                        <div className="rankbook2">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div>  
                    <div className="col-lg-3 col-sm-8">
                        <div className="rankbook3">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>
                            </div>    
                          </div>
                        </div>
                    </div>   
                </div> */}
                  <div className="row">
                    <div className="col-md-8">
                        <h3 className="picked">Recently Picked Up</h3>
                    </div>
                    <div className="col-md-4">
                       <div className="dualbtn">   
                               <ul class="nav nav-pills " id="pills-tab" role="tablist">
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link active recentbtn recomend" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Recent</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                  <button class="nav-link recentbtn recomend" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile " aria-selected="false">Recommended</button>
                                </li>
                            
                            </ul>

                            </div>
                    </div>
                    <div className="divider"></div>
                    <div className="dividerr"></div>                  
                </div>

                <div class="tab-content" id="pills-tabContent">
                      <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

                  
                <div className="row mt-5 bookboxes">
                    <div className="col-lg-3 col-sm-8 col-md-6">

                        <div className="rankbook">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook1">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook2">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div>  
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook3">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>
                            </div>    
                          </div>
                        </div>
                    </div>   
                </div>

                      </div>
                      <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                      <div className="row mt-5 bookboxes">
                    <div className="col-lg-3 col-sm-8 col-md-6">

                        <div className="rankbook">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook1">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook2">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>

                            </div>    
                          </div>
                        </div>
                    </div>  
                    <div className="col-lg-3 col-sm-8 col-md-6">
                        <div className="rankbook3">
                            <div className="authorprofile">
                                <img className="img-fluid authorprof" src={Ellipse44}/>
                                <div>
                                        <p className="profilename">Author Name </p>
                                    <div className="mainrating">
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                            <i class="fa-solid fa-star starRate"></i>
                                    </div>
                                </div>
                            <div className="vote_actionBtn">
                           
                            <button class="votebtn" > Vote &nbsp;&nbsp;&nbsp;&nbsp;<img className="img-fluid voteicon" src={votefile}/> </button>
                            <button class="votebtn" > Details &nbsp; <img className="img-fluid voteicon" src={ detailfile}/> </button>
                            </div>    
                          </div>
                        </div>
                    </div>   
                </div>

                      </div>
                 
                    </div>
                

                <div className="row mt-5">
                    <div className="col-md-6">
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
                                <div class="col-md-5">
                                    <p class="numm">Status: <span class="numb">Requested </span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrrw">
                                        <button class="readbtns" ><span> Add To Waiting List &nbsp;&nbsp;</span> <i class="fa-solid fa-clock iicon"></i></button>
                                    <button class="readbtns" >Book Details &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
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
                                <div class="col-md-5">
                                    <p class="numm">Status: <span class="pickk"> PICKED UP </span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrrw">
                                        <button class="readbtns" ><span> Add To Waiting List &nbsp;&nbsp;</span> <i class="fa-solid fa-clock iicon"></i></button>
                                    <button class="readbtns" >Book Details &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
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
                                <div class="col-md-5">
                                    <p class="numm">Status: <span class="numb">Requested </span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrrw">
                                        <button class="readbtns" ><span> Add To Waiting List &nbsp;&nbsp;</span> <i class="fa-solid fa-clock iicon"></i></button>
                                    <button class="readbtns" >Book Details &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
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
                                <div class="col-md-5">
                                    <p class="numm">Status: <span class="numb"> Requested </span></p>
                                </div>
                                <div class="col-md-7 ">
                                    <div class="btnrrw">
                                        <button class="readbtns" ><span> Add To Waiting List &nbsp;&nbsp;</span> <i class="fa-solid fa-clock iicon"></i></button>
                                    <button class="readbtns" >Book Details &nbsp;&nbsp;<i class="fa-solid fa-calendar-week iicon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>

        

       
      </>
    </UserLayout>
  );
};
