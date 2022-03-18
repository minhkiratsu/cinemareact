import React, { Component } from 'react';
import {  Routes, Route,  } from "react-router-dom";
import BookMovie from '../components/BookMovie/BookMovie';
import BookTicket from '../components/BookTicket/BookTicket';
import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import MoviePlaying from '../components/MoviePlaying/MoviePlaying';
import MovieUpcoming from '../components/MovieUpcoming/MovieUpcoming';
import NewDetails from '../components/NewDetails/NewDetails';
import News from '../components/News/News';
import Pay from '../components/Pay/Pay';
import Register from '../components/Register/Register';

class DieuHuongURL extends Component {
    render() {
        return (
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/phimDangchieu" element={<MoviePlaying/>} />
                <Route path="/phimSapchieu" element={<MovieUpcoming />} />
                <Route path="/tinTuc" element={<News />} />
                <Route path="/tintuc/:slug.:id" element={<NewDetails />} />
                <Route path="/dangNhap" element={<Login />} />
                <Route path="/chiTietphim/:slug.minhcinema" element={<BookMovie />} />
                <Route path="/chonDichvu" element={<BookTicket />} />
                <Route path="/dangKy" element={<Register />} />
                <Route path="/thanhToan" element={<Pay />} />                                   
            </Routes>
        );
    }
}

export default DieuHuongURL;