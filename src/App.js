import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Login from './pages/Shared/Login/Login';
import Register from './pages/Shared/Register/Register';
import NotFound from './pages/NotFound/Notfound';
import AllServices from './pages/Home/Services/HomeServices/AllServices';
import ContactUs from './pages/ContactUs/ContactUs';
import Small from './pages/Home/Services/CarType/Small';
import MainService from './pages/Home/Services/DetailsCar/MainService';
import Medium from './pages/Home/Services/CarType/Medium';
import Large from './pages/Home/Services/CarType/Large';
import GetCourses from './pages/Home/FullCourses/GetCourse/GetCourses';
import AuthProvider from './contexts/AuthProvider';
import FindBasisBrand from "./pages/Home/FindCar/FindBasisBrand/FindBasisBrand";
import NewDashbord from "./pages/NewDashbord/NewDashbord";
import ManageAllOrder from "./pages/NewDashbord/ManageAllOrder/ManageAllOrder";
import Popup from "./pages/Home/Services/Popup/Popup";
import ChatApp from './pages/Chat/ChatApp';
import './App.css';
import DashboardHome from './pages/NewDashbord/DashbordHome/DashboardHome';
import User from './pages/NewDashbord/User/User';
import AddBlog from './pages/NewDashbord/AddBlog/AddBlog';
import UserOrder from './pages/NewDashbord/UserOrder/UserOrder';
import AllReview from './pages/NewDashbord/AllReview/AllReview';
import Products from './pages/NewDashbord/Products/Products';
import AddProduct from './pages/NewDashbord/AddProduct/AddProduct';
import UserDetails from './pages/UserDetails/UserDetails'
import FindSingleCar from './pages/Home/FindCar/FindSingleCar/FindSingleCar';
import AddReview from './pages/AddReview/AddReview';
// import Success from './pages/Payment/Success';
import Cancel from './pages/Payment/Cancel';
import ProfileHome from './pages/UserProfile/ProfileHome/ProfileHome';
import Profile from './pages/UserProfile/Profile/Profile';
import AddService from './pages/Home/Services/AddService/AddService';
import PayNow from './pages/Home/Services/PayNow/PayNow';
import AboutUs from './pages/Home/AboutUs/AboutUs';
import MyOrders from './pages/UserProfile/MyOrders/MyOrders';
import CarRent from './pages/Home/FindCar/FindSingleCar/rent/CarRent';
import ManageOrder from './pages/Home/Services/HomeServices/ManageOrder/ManageOrder';
import NewService from './pages/NewService/NewService';
import Blog from './pages/Blog/Blog';
import Courses from './pages/Courses/Courses';
import SingleCourse from './pages/Courses/singleCourse/SingleCourse';
import TruckCar from './pages/Home/Services/CarType/TruckCar';
import Pickup from './pages/Home/Services/CarType/PicupCar';

import Drivers from './pages/Home/Drivers/Drivers';
// import Clock from './pages/Home/Clock/Clock';
// import Clock from "../src/pages/Home/Clock";
import CourseDetails from "./pages/Courses/CourseDetails";
function App() {

  return (
    <div className="App">

      <AuthProvider>

        <BrowserRouter>
          {/* <Appbar></Appbar> */}
          {/* <Clock /> */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/services' element={<AllServices />} />
            <Route path='/details' element={<MainService />} />
            <Route path='/small' element={<Small />} />
            <Route path='/medium' element={<Medium />} />
            <Route path='/large' element={<Large />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/myOrders' element={<MyOrders />} />
            <Route path='/drivers' element={<Drivers />} />
            <Route path='/addService' element={<AddService />} />
            <Route path='/pay' element={<PayNow />} />
            <Route path='/profileHome' element={<ProfileHome />} />
            <Route path='/manageOrder' element={<ManageOrder />} />
            <Route path='/truck' element={<TruckCar />} />
            <Route path='/pickup' element={<Pickup />} />
            
            <Route path='/newService' element={<NewService />} />
            <Route path='/blog' element={<Blog />} />


            <Route path='/newDashbord' element={<NewDashbord />}>
              <Route path='/newDashbord/' element={<DashboardHome />} />
              <Route path='/newDashbord/userOrder' element={<UserOrder />} />
              <Route path='/newDashbord/user' element={<User />} />
              <Route path='/newDashbord/dashreview' element={<AllReview />} />
              <Route path='/newDashbord/manageallorder' element={<ManageAllOrder />} />
              <Route path='/newDashbord/addproduct' element={<AddProduct />} />
              <Route path='/newDashbord/products' element={<Products />} />
              <Route path='/newDashbord/addblog' element={<AddBlog />} />
            </Route>

            <Route path='/course' element={<Courses />} />
            <Route path='/course/details/:courseName' element={<CourseDetails />} />
            <Route path='/course/:courseId' element={<SingleCourse />} />
            <Route path='/book/:BookingId' element={<Popup />} />
            <Route path='AboutUs' element={<AboutUs />} />
            <Route path='/GetCourses' element={<GetCourses />} />
            <Route path='/ChatApp' element={<ChatApp />} />
            <Route path="car/:carName" element={<FindBasisBrand />} />
            <Route path="singleCar/:carName" element={<FindSingleCar />} />
            <Route path="/rent/:tranId" element={<CarRent />} />
            <Route path='/userdetails/:id' element={<UserDetails />} />
            <Route path='/addreview' element={<AddReview></AddReview>} />
            <Route path='/paymentcancel' element={<Cancel></Cancel>} />
            <Route path='/addreview' element={<AddReview></AddReview>} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;


