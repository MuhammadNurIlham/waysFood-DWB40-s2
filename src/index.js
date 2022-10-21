import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { UsersContextProvider } from './context/UserContext';
import { CartReducer, CartReducerProvider } from './context/CartReducer';
import PrivateRoute from './pages/PrivateRoute';
import NavbarUser from './components/NavbarUser';
import User from './pages/User';
import LandingPage from './pages/LandingPage';
import UserMenus from './components/UserMenus';
import UserProfile from './components/UserProfile';
import IncomeTransaction from './pages/IncomeTransaction';
import AddProductPages from './pages/AddProductPages';
import EditProfileUser from './components/EditProfileUser';
import ChartOrder from './components/ChartOrder';
import DetailOrder from './pages/DetailOrder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
      <CartReducerProvider>

        <Router>
          <NavbarUser />
          <Routes>
            <Route exact path="/" element={<LandingPage />} />

            <Route exact path='/' element={<PrivateRoute />} >

              <Route exact path="/Home" element={<LandingPage />} />
              <Route exact path="/User" element={<User />} />
              <Route exact path='/UserMenus' element={<UserMenus />} />
              <Route exact path='/UserProfile' element={<UserProfile />} />
              <Route exact path='/EditProfile' element={<EditProfileUser />} />
              <Route exact path='/IncomeTransaction' element={<IncomeTransaction />} />
              <Route exact path='/AddProduct' element={<AddProductPages />} />
              <Route exact path='/CartOrder' element={<DetailOrder />} />

            </Route>
          </Routes>
        </Router>
      </CartReducerProvider>
    </UsersContextProvider>
  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
