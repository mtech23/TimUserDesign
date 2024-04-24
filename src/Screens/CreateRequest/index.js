 import { React, useState, useEffect } from 'react'
 import "./style.css";
import { UserLayout } from '../../Components/Layout/UserLayout'
import Form from "react-bootstrap/Form";
import { AdertiseImage, BookImage, Fancy, MainNoval, NovalImage } from '../../Assets/images'
import { Link } from 'react-router-dom';
import { BookListingCover } from '../../Assets/images'
import novelbook from '../../Assets/images/novelbook.png'
export const  CreateRequest= () => {




    const [ads, setAds] = useState([]);
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const base_url = 'https://custom.mystagingserver.site/Tim-WDLLC/public/'
    const adsListing = () => {

        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch('https://custom.mystagingserver.site/Tim-WDLLC/public/api/ads_listing',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        )
            .then(response =>
                response.json()
            )
            .then((data) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                setAds(data.data);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })
    }

    const BookListing = () => {
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch('https://custom.mystagingserver.site/Tim-WDLLC/public/api/book_listing',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
        )

            .then(response =>
                response.json()
            )
            .then((data) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(data.data)
                setBooks(data.data);
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(error)
            })
    }

    const GenreData = () => {
        document.querySelector('.loaderBox').classList.remove("d-none");
        fetch('https://custom.mystagingserver.site/Tim-WDLLC/public/api/genre_listing')
            .then((response) => response.json())
            .then((data) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.log(data)
                setGenres(data.data);
                if (data.data.length > 0) {
                    setSelectedGenre(data.data[0]); // Select the first genre by default
                }
            })
            .catch((error) => {
                document.querySelector('.loaderBox').classList.add("d-none");
                console.error('Error fetching data: ', error);
            });
    }

    useEffect(() => {
        adsListing()
        BookListing()
        GenreData()
    }, [])

    const handleTabClick = (genre) => {
        setSelectedGenre(genre);
    };
  return (
   
      <UserLayout>



<section class="inner__hero-sec jost-font">
          <div className="container">
            <div className="row">
              <div className="herro__title">
                <h1 className="typewriter"> CREATE REQUEST </h1>
              </div>
            </div>
          </div>
        </section>
        <section className='novinfo'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='novel'>NOVEL INFORMATION</h1>
                    </div>
                </div>
              <div className='spacing'>
                    <div className='row'>
                            <div className='col-md-3'>
                                <div className='bookform'>
                                <img className='img-fluid nvlbk' src={novelbook} />
                                    <form action="">

                                        <div class="form-group">
                                            <label for="login_form_email" class="email_label form-name">Name * </label>
                                            <div class="input_with_icon">
                                                <input type="text" class="form-control form_email_field f-ph" id="login_form_email" aria-describedby="emailHelp" placeholder="Within 70 Words" required/>
                                            </div>
                                        </div>

                                    <div className='btnmain'>
                                        <button type="submit" class="updatebtn ">Upload</button>
                                    </div>
                                    </form>
                            
                                </div>
                            </div>
                        
                                <div className='col-md-9'>
                                    <div className='addsyn'>
                                        <h2 className='add'>ADD SYNOPSIS</h2>
                                    </div>    
                                </div>
                            
                        </div>
              </div>
                <div className='spacing'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h4 className="book-release-title">Select Book Genre</h4>
                        <div className="book-release-genre-dropdowns mt-4 gap-3 bookGenree ">
                            <span className="book-release-genree">Lorem Ipsume</span>

                            <span className="book-release-genree">Lorem Ipsume</span>

                            <span className="book-release-genree">Lorem Ipsume</span>

                            <span className="book-release-genree">Lorem Ipsume</span>
                        </div>

                    </div>
                    <div className='col-md-2'>

                    </div>
                    <div className='col-md-4'>
                        <h4 className="book-release-title"> Maturity Rating </h4>

                        <Form.Select aria-label="Default select example" className="book-releasee-inputs">
                        <option>Select Maturity Rating</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                    </div>
                </div>
                </div>
              <div className='spacing'>
                    <div className='row'>
                            <div className='col-md-12'>
                            <h4 className="book-release-title">Type</h4>
                                    <div className=" radbtns  gap-5 mt-3  ">
                                        <span className="filter_radioo  gap-2  d-flex ">
                                            {" "}
                                            <input type="radio" name="exampleRadiosss" id="exampleRadios011"/>
                                            <p className="   ">Web Novel</p>
                                        </span>

                                        <span className="filter_radioo gap-2  d-flex ">
                                            {" "}
                                            <input type="radio" name="exampleRadiosss" id="exampleRadios012"/>
                                            <p className="   "> Light Novel </p>
                                        </span>
                                        <span className="filter_radioo  gap-2  d-flex ">
                                            {" "}
                                            <input type="radio" name="exampleRadiosss" id="exampleRadios013" />
                                            <p className="   ">Manga</p>
                                        </span>
                                    </div>
                            </div>
                        </div>
              </div>
             <div className='spacing'>
             <div className='row'>
                    <div className='col-md-12'>
                       <h4 className="book-release-title">Original Language</h4>
                            <div className=" radbtns  gap-5 mt-3  ">
                                <span className="filter_radioo  gap-2  d-flex ">
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios01" />
                                    <p className="   ">English</p>
                                </span>

                                <span className="filter_radioo gap-2  d-flex ">
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios02"/>
                                    <p className="   "> Japanese </p>
                                </span>
                                <span className="filter_radioo  gap-2  d-flex  " >
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios03"/>
                                    <p className="   ">Malaysian</p>
                                </span>
                                <span className="filter_radioo  gap-2  d-flex ">
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios04" />
                                    <p className="   ">Thai</p>
                                </span>
                                <span className="filter_radioo  gap-2  d-flex ">
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios05" />
                                    <p className="   ">Khmer</p>
                                </span>
                                <span className="filter_radioo  gap-2  d-flex ">
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios06" />
                                    <p className="   ">Filipino</p>
                                </span>
                                <span className="filter_radioo  gap-2  d-flex ">
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios07" />
                                    <p className="   ">Indonesian</p>
                                </span>
                                <span className="filter_radioo  gap-2  d-flex ">
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios08" />
                                    <p className="   ">Korean</p>
                                </span>
                                <span className="filter_radioo  gap-2  d-flex ">
                                    {" "}
                                    <input type="radio" name="exampleRadios" id="exampleRadios09" />
                                    <p className="   ">Other</p>
                                </span>
                            </div>
                    </div>
                </div>
             </div>
                <div className='spacing'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <h4 className="book-release-title">Author Name</h4>
                            <input type="text" placeholder="Type Author Name Here" className="book-releasee-input"/>
                        </div>
                        <div className='col-md-4'>
                            <h4 className="book-release-title space">Number of chapters</h4>
                            <Form.Select aria-label="Default select example" className="book-releasee-input mt-4">
                            <option>Select Number Of chapters</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className='col-md-4'>
                            <h4 className="book-release-title space">Original Publisher</h4>
                            <Form.Select aria-label="Default select example" className="book-releasee-input mt-4">
                            <option>Select Original Publisher</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </Form.Select>
                        </div>                   
                    </div>
                </div>
                <div className='spacing'>
                <div className='row'>
                <div className='col-md-4'>
                        <h4 className="book-release-title">Story Status </h4>
                        <Form.Select aria-label="Default select example" className="book-releasee-input mt-4">
                        <option>Completed</option>
                        <option value="1">Incompleted</option>
                        </Form.Select>
                    </div>
                    <div className='col-md-4'>
                        <h4 className="book-release-title space">Series</h4>
                        <input type="text" placeholder="Type to search English Publisher" className="book-releasee-input"/>
                    </div>
                   
                    <div className='col-md-4'>
                        <h4 className="book-release-title space">Tags</h4>
                        <Form.Select aria-label="Default select example" className="book-releasee-input mt-4">
                        <option>Select Tags</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </Form.Select>
                    </div>                   
                </div>


                </div>

            </div>
        </section>

         
      </UserLayout>
  )
}

 
 

