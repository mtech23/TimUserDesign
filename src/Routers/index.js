import { Route, Routes, BrowserRouter } from "react-router-dom";

import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import AdminLogin from "../Screens/Auth/Login";
import AdminSignup from "../Screens/Auth/signup";
import { Completion } from "../Screens/Completion/index";
import { Library } from "../Screens/library/index";
import { Waitinglist } from "../Screens/waitinglist";
import { History } from "../Screens/history";
import { Shop } from "../Screens/shop";
//  Shop
import Error from "../Screens/Error";
import { Mission } from "../Screens/Mission";
import { Home } from "../Screens/Home";
import { ProductListing } from "../Screens/ProductListing";
import { Novel } from "../Screens/Novel";
import { ProductDetail } from "../Screens/ProductListing/productDetail";
import { ProductDetails } from "../Screens/ProductListing/ProductDetails";
import { CreateRequest } from "../Screens/CreateRequest/index.js";
import { MyAccount } from "../Screens/MyAccount";
 
import { ProtectedRoutes } from "./ProtectedRoutes";
import { Beta } from "../Screens/Home/Beta";

import { AuthorModule } from "../Screens/AuthorModule";
import { BookListing } from "../Screens/BookListing";

import { SearchFilter } from "../Screens/SearchFilter/index";
export default function UserRouter() {
  return (
    <BrowserRouter basename="/TimUser">
      <Routes>
        <Route path="/beta" element={<Home />}></Route>
        <Route path="/" element={<Beta />}></Route>
        <Route path="/author-listings" element={<AuthorModule />}></Route>
        <Route path="/book-listing" element={<BookListing />}></Route>


        <Route path="/library" element={<Library />}></Route>
        <Route path="/Waitinglist" element={<Waitinglist />}></Route>
        <Route path="/History" element={<History />}></Route>

       <Route path="/shop" element={<Shop />}></Route>
         
         



        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />
        <Route path="/create-request" element={<CreateRequest />}></Route>


        <Route path="/book-listing" element={<ProductListing />}></Route>
        <Route path="/novel-listing" element={<Novel />}></Route>

        <Route path="/search-filter" element={<SearchFilter />}></Route>
        <Route path="/completeion" element={<Completion />}></Route>
        <Route path="/mission" element={<Mission />}></Route>
        <Route
          path="/book-detail/:id"
          element={<ProductDetail />}
        ></Route>
        <Route
          path="/book-details/:id"
          element={<ProductDetails />}
        ></Route>

        <Route path="*" element={<Error />} />
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/sign_up" element={<AdminSignup />}></Route>
        <Route
          path="/account"
          element={<ProtectedRoutes Components={MyAccount} />}
        ></Route>
        
      </Routes>
    </BrowserRouter>
  );
}
