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
import promoimg from "../../Assets/images/promoimg.png";
import timebg from "../../Assets/images/timebg.png";
import ihk from "../../Assets/images/ihk.png";
import book2 from "../../Assets/images/book2.png";
import book3 from "../../Assets/images/book3.png";
import carddd1 from "../../Assets/images/carddd1.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from "aos";
import "aos/dist/aos.css";
import lcimg from '../../Assets/images/51L+xXb2C7L 1.png'
export const Shop = () => {
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
                <h1 className="typewriter">      Shop </h1>
              </div>
            </div>
          </div>
        </section>

        <section class="shop">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="head">MANA PACKS</h1>
                <img class="img-fluid dragon_image" src={dragon}/>
              </div>
            </div>
          </div>
        </section>

        <section class="second">
          <div class="container">
            <div class="cardrow">
            <div class="row">
              
            <div class="col-lg-3 col-sm-6 ">
              <div class="box">
                <img class="img-fluid mana" src={mana}/>
               </div>
               <div class="rect">
                <h3 class="recthe">250 MANA PACK</h3>
                <p class="para"> $19.99 <span class="price"> $19.99 </span></p>
                <div class="cartbtn">
                <button class="cart"> Add to cart <i class="fa-solid fa-cart-shopping carticon"></i></button>
                </div>
               </div>
              </div>

              <div class="col-lg-3 col-sm-6 ">
              <div class="box">
                <img class="img-fluid mana" src={mana}/>
               </div>
               <div class="rect">
                <h3 class="recthe">250 MANA PACK</h3>
                <p class="para"> $19.99 <span class="price"> $19.99 </span></p>
                <div class="cartbtn">
                <button class="cart"> Add to cart <i class="fa-solid fa-cart-shopping carticon"></i></button>
                </div>
               </div>
              </div>

              <div class="col-lg-3 col-sm-6 ">
              <div class="box">
                <img class="img-fluid mana" src={mana}/>
               </div>
               <div class="rect">
                <h3 class="recthe">250 MANA PACK</h3>
                <p class="para"> $19.99 <span class="price"> $19.99 </span></p>
                <div class="cartbtn">
                <button class="cart"> Add to cart <i class="fa-solid fa-cart-shopping carticon"></i></button>
                </div>
               </div>
              </div>

              <div class="col-lg-3 col-sm-6 ">
              <div class="box">
                <img class="img-fluid mana" src={mana}/>
               </div>
               <div class="rect">
                <h3 class="recthe">250 MANA PACK</h3>
                <p class="para"> $19.99 <span class="price"> $19.99 </span></p>
                <div class="cartbtn">
                <button class="cart"> Add to cart <i class="fa-solid fa-cart-shopping carticon"></i></button>
                </div>
               </div>
              </div>




            </div>
            </div>

          
          </div>



























          

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
                            industry's standard dummy text ever since the when
                            an unknown
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
                    {/* <div class="row  harrypotter_book active">
                      <div className="col-4">
                        <img src={MyRebbetsBook} alt="..." />
                      </div>
                      <div className="col-8">
                        <h3 className="harrypotter_books-title jost-font">
                          Lorem Ipsume Doller
                        </h3>
                        <p className="harrypotter_books-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry's standard
                        </p>
                        <h3 class="author__poduct_title harrypotter_books-price jost-font">
                          <div class="product__price">
                            <span class="discount__price">$18.99</span>
                            <span class="actual__price">$18.99</span>
                          </div>
                        </h3>
                      </div>
                    </div> */}
                  
                  {  ads && ads.map((item, index) => (  
                  <div class="row  harrypotter_book mb-4 ">
                      <div className="col-4">
                        <img src={base_url +  item?.ad_image} alt="..." />
                      </div>
                      <div className="col-8">
                        <h3 className="harrypotter_books-title jost-font">
                        {  item?.ad_title}
                        </h3>
                        {/* <p className="harrypotter_books-body">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry Lorem Ipsum has been the
                          industry's standard
                        </p> */}
                        {/* <h3 class="author__poduct_title harrypotter_books-price jost-font">
                          <div class="product__price">
                            <span class="discount__price">$18.99</span>
                            <span class="actual__price">$18.99</span>
                          </div>
                        </h3> */}
                      </div>
                    </div>))}
                   
                    
                 
                  
                   
                  
                  
                
               
               
                  
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
       
       
        <section class="subscription">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="subs">SUBSCRIPTIONS</h1>
              </div>
            </div>
          </div>
        </section>
       
       <section class="price">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="eco">
                <p class="ecohead">Economic</p>
                <p class="ecohead1">$15/Month</p>
                <button class="cart"> Subscribe <i class="fa-solid fa-cart-shopping carticon"></i></button>
                <hr class="hori"></hr>
                <p class="plan">Economic plan for all users.</p>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="basic
              ">
                <p class="ecohead">Basic</p>
                <p class="ecohead1">$35/Month</p>
                <button class="cart"> Subscribe <i class="fa-solid fa-cart-shopping carticon"></i></button>
                <hr class="hori"></hr>
                <p class="plan">Economic plan for all users.</p>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="pre">
                <p class="ecohead">Premium</p>
                <p class="ecohead1">$55/Month</p>
                <button class="cart"> Subscribe <i class="fa-solid fa-cart-shopping carticon"></i></button>
                <hr class="hori"></hr>
                <p class="plan">Economic plan for all users.</p>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
                <div class="check">
                <img class="img-fluid chk" src={chechmark}/>
                <p class="point">Lorem Ipsum is simply dummy text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </section>


       <section className="discount_voucher">

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="diccount_num">
                <div className="dicount_bg">
                <h2 className="twentyfive">25%</h2>
                </div>
                <h4 className="vouchers">DISCOUNT VOUCHER</h4>
                <p className="monthly_discount">This voucher is valid for only one month</p>

              </div>

            </div> 
            <div className="col-md-6">
              <div className="diccount_nums">
                <div className="dicount_bg">
                <h2 className="twentyfive">50%</h2>
                </div>
                <h4 className="vouchers">DISCOUNT VOUCHER</h4>
                <p className="monthly_discount">This voucher is valid for only one month</p>

              </div>

            </div> 
          </div>

          <div className="row mt-5">
            <div className="col-md-6">
              <div className="diccount_num">
                <div className="dicount_bg">
                <h2 className="twentyfive">75%</h2>
                </div>
                <h4 className="vouchers">DISCOUNT VOUCHER</h4>
                <p className="monthly_discount">This voucher is valid for only one month</p>

              </div>

            </div> 
            <div className="col-md-6">
              <div className="diccount_nums">
                <div className="dicount_bg">
                <h2 className="twentyfive">100%</h2>
                </div>
                <h4 className="vouchers">DISCOUNT VOUCHER</h4>
                <p className="monthly_discount">This voucher is valid for only one month</p>

              </div>

            </div> 
          </div>
        </div>
        </section>
        {/* <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <h3 class="recthe">GIFT CARDS</h3>
              </div>
            </div>
          </div>

        </section> */}
        <section class="shop_two">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="gift">GIFT CARDS</h1>
              
              </div>
            </div>
          </div>
        </section>

        <section className="gift_cards_bg">
          <div className="container">
            <div className="row coinMain">
              <div className="col-lg-2 col-sm-12 col-md-4">
               <div className="gift_coins_one">
                  <img className="img-fluid promoCards" src={carddd1}/>
               </div>

              </div>
              <div className="col-lg-2 col-sm-12 col-md-4">
               <div className="gift_coins">
                  <img className="img-fluid promoCards" src={carddd1}/>
               </div>

              </div>
              <div className="col-lg-2 col-sm-12 col-md-4">
               <div className="gift_coins">
                  <img className="img-fluid promoCards" src={carddd1}/>
               </div>

              </div>
              <div className="col-lg-2 col-sm-12 col-md-4">
               <div className="gift_coins">
                  <img className="img-fluid promoCards" src={carddd1}/>
               </div>

              </div>
              <div className="col-lg-2 col-sm-12 col-md-4">
               <div className="gift_coins">
                  <img className="img-fluid promoCards" src={carddd1}/>
               </div>

              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
              
              <h1 class="promos">PROMO CODES</h1>

              <div className="row">
                <div class="col-md-8 mx-auto">
                  <div class="promo_code">
                <form>
                <div className="promo_codes_fields">
                  <input class="code_form" type="text" placeholder="Enter Promo Code" name="Name"/>
                  <button class="sub_btn"> Submit </button>
                </div>
                </form>
                </div>
              </div>
              </div>
              
              </div>
            </div>
           
          </div>
        </section>
        <section class="shop_two">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="gift">AVAILABLE PROMOTIONS</h1>
                <img class="img-fluid promo_image" src={promoimg}/>
              
              </div>
            </div>
          </div>
        </section>
        <section className="promo_card_box">
          <div className="container">
          <div className="promo_cards_boxes">
            <div className="row">
             
             <div className="col-md-4">
                <div className="promo_pin">
                  <h3 className="promo_heading">PROMO CODE</h3>
                  <p className="promo_para">Get 50% oFF Voucher Using This Promo Code</p>
                  <input className="promo_number" type="number" placeholder="EXAMPLEPROMOCODE123" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="promo_pin">
                  <h3 className="promo_heading">PROMO CODE</h3>
                  <p className="promo_para">Get 50% oFF Voucher Using This Promo Code</p>
                  <input className="promo_number" type="number" placeholder="EXAMPLEPROMOCODE123" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="promo_pin">
                  <h3 className="promo_heading">PROMO CODE</h3>
                  <p className="promo_para">Get 50% oFF Voucher Using This Promo Code</p>
                  <input className="promo_number" type="number" placeholder="EXAMPLEPROMOCODE123" />
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
