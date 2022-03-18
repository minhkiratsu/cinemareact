import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import News_item from './News_item';
import dln from '../../json/DulieuNews.json'
import NavRight from '../NavRight/NavRight';

export default class News extends Component {
    render() {
        return (
          <div>
            <div className='set-background'>
              <div className="block-wrapper">
                <div className="container">
                  <div className="col-md-8 col-sm-8 col-xs-12">
                    <section>
                      <div className="row">
                        <div className="text-center">
                          <h2 className="section-heading text-uppercase">Trang tin tức</h2>             
                        </div>
                        {
                          dln.map((value, key) => {
                            return(
                                <News_item tinID={value.id} anh={value.anh} tieuDe={value.tieuDe}></News_item>
                            )
                          })               
                        }            
                      </div>
                    </section>
                  </div>
                  {/* end details  */}
                  {/* movie sidebar  */}
                  <NavRight/>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
