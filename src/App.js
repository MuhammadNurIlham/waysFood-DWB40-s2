import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { UserContext, UsersContextProvider } from './context/UserContext';
import PrivateRoute from './pages/PrivateRoute';
import User from './pages/User';
import LandingPage from './pages/LandingPage';
import UserMenus from './components/UserMenus';
import UserProfile from './components/UserProfile';
import IncomeTransaction from './pages/IncomeTransaction';
import AddProductPages from './pages/AddProductPages';
import EditProfileUser from './components/EditProfileUser';
import DetailOrder from './pages/DetailOrder';
import { useNavigate } from 'react-router-dom';
import { API, setAuthToken } from '../src/config/API';
import ProductPartner from './components/ProductPartner';
import NavbarUser from './components/NavbarUser';
import EditProduct from './components/EditProduct';

function App() {
  let navigate = useNavigate();
  const [IsLoading, setIsLoading] = useState(true);

  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    if (state.isLogin == false && !IsLoading) {
      navigate('/');
      // } else {
      //   if (state.user.role == "user") {
      //     navigate('/UserProfile');
      //   } else if (state.user.role == "partner") {
      //     navigate('/IncomeTransaction');
      //   }
    }
  }, [state]);

  const checkUser = async () => {
    try {
      if (localStorage.token) {
        setAuthToken(localStorage.token);
      }
      const response = await API.get("/check-auth");

      let payload = response.data.data;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <>
      {IsLoading ? (<></>) : (
        <>
          <NavbarUser />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path='/' element={<PrivateRoute />} >
              <Route exact path="/Home" element={<LandingPage />} />
              <Route exact path="/User" element={<User />} />
              <Route exact path='/UserMenus' element={<UserMenus />} />
              <Route exact path='/ProductPartner' element={<ProductPartner />} />
              <Route exact path='/ProductPartner/:id' element={<ProductPartner />} />
              <Route exact path='/UserProfile' element={<UserProfile />} />
              <Route exact path='/EditProfile' element={<EditProfileUser />} />
              <Route exact path='/EditProduct/:id' element={<EditProduct />} />
              {/* <Route exact path='/EditProduct' element={<EditProduct />} /> */}
              <Route exact path='/IncomeTransaction' element={<IncomeTransaction />} />
              <Route exact path='/AddProduct/:id' element={<AddProductPages />} />
              <Route exact path='/CartOrder' element={<DetailOrder />} />
            </Route>
          </Routes>
        </>
      )}
    </>
  )
}

export default App;
