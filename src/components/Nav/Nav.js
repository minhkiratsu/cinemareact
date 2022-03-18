import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
export default class Nav extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
              <li>
                <Link className="navbar-brand" to="/home">
                <img src="https://c1.staticflickr.com/1/293/20195446071_af78f92732_b.jpg" alt="..." />
                </Link>
              </li>
              <div className='row'>
                <div className='col'>
                  <div className="input-search">
                    <input type="text" className="search" placeholder="&nbsp;Nhập từ khóa..."/>
                                
                  </div>
                </div>
              </div>     
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars ms-1" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                  <li className="nav-item"><Link className="nav-link" to="/home">Trang chủ</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/phimDangchieu">Phim đang chiếu</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/phimSapchieu">Phim sắp chiếu</Link></li>           
                  <li className="nav-item"><Link className="nav-link" to="/tinTuc">Tin tức</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/dangNhap">Đăng nhập</Link></li>         
                </ul>
              </div>
            </div>
          </nav>        
        )
    }
}
