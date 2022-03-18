import React, { Component } from 'react'
import dlMovieUp from '../../json/DulieuMovieUp.json'

import MovieUpcoming_item from './MovieUpcoming_item'
export default class MovieUpcoming extends Component {
    render() {
        return (
          <div>
            <div className='set-background'>
              <section className="page-section" id="phimdangchieu">
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-heading text-uppercase">Phim sắp chiếu</h2>             
                  </div>
                  <div className="row">
                        {
                          dlMovieUp.map((value, key) => {
                            return ( 
                              <MovieUpcoming_item movieID={value.id} anh={value.anh} tenPhim={value.tenPhim}></MovieUpcoming_item>     
                            
                            )
                          })               
                        }  
                  </div>
                </div>
              </section>
            </div>
          </div>
        )
    }
}
