import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import HomeTop_item from './HomeTop_item';
import dlHomeTop from '../../json/DulieuHomeTop.json';
import dlHomeCenter from '../../json/DulieuHomeCenter.json';
import HomeCenter_item from './HomeCenter_item';
import dlHomeBottom from '../../json/DulieuHomeBottom.json';
import HomeBottom_item from './HomeBottom_item';
export default class Home extends Component {
    render() {
      return (
        <div>       
          <header className="masthead">
            <div className="container">
              <div className="masthead-subheading">Welcome To My Website</div>
              <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
            </div>
          </header>
          <div className='set-background'>
            <section className="page-section" id="phimdangchieu">
              <div className="container">
                <div className="text-title">   
                  <li>
                    <Link className="title-block text-uppercase" to="/phimDangchieu"><h2>Phim đang chiếu</h2> </Link>
                  </li>               
                </div>
                <div className="row">
                  {
                    dlHomeTop.map((value, key) =>{
                      return(
                        <HomeTop_item anhPhim={value.anhPhim} tenPhim={value.tenPhim}></HomeTop_item>
                      )
                    })
                  } 
                  <div>
                    <ul className="seemore">   
                      <li>
                        <Link className="seemore-link" to="/phimDangchieu">Xem thêm </Link>
                      </li>           
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <section className="page-section" id="phimsapchieu">
              <div className="container">
                <div className="text-title">
                  <li>
                      <Link className="title-block text-uppercase" to="/phimSapchieu"><h2>Phim sắp chiếu</h2> </Link>
                  </li>
                </div>
                <div className="row">
                  {
                    dlHomeCenter.map((value, key) =>{
                      return(
                        <HomeCenter_item anhPhim={value.anhPhim} tenPhim={value.tenPhim}></HomeCenter_item>
                      )
                    })
                  }  
                  <div>
                    <ul className="seemore">       
                      <li>
                      <Link className="seemore-link" to="/phimSapchieu">Xem thêm</Link>
                      </li>         
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            {/* Services*/}
            {/* NEWS */}
            <section className="page-section" id="news">
              <div className="container">
                <div className="text-title">
                  <a href="service2.html" className="title-block text-uppercase">
                    <h2>Tin tức</h2> 
                  </a>            
                </div>
                <div className="row">
                      {
                        dlHomeBottom.map((value, key) =>{
                          return(
                            <HomeBottom_item anh={value.anh} tieuDe={value.tieuDe}></HomeBottom_item>
                          )
                        })
                      }        
                </div>
                <div>
                  <ul className="seemore">       
                    <li>
                      <Link className="seemore-link" to="/tinTuc"> Xem thêm</Link>
                    </li>
                  
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      )
    }
}
