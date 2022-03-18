import React, { Component } from 'react'
import dlMovie from '../../json/DulieuMoviePlay.json'
import MoviePlaying_item from './MoviePlaying_item'
export default class MoviePlaying extends Component {
    render() {
        return (
          <div>
            <div className='set-background'>
              <section className="page-section" id="phimdangchieu">
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-heading text-uppercase">Phim đang chiếu</h2>             
                  </div>
                  <div className="row">
                        {
                          dlMovie.map((value, key) => {
                            return (      
                              <MoviePlaying_item movieID={value.id} anh={value.anh} tenPhim={value.tenPhim}></MoviePlaying_item>
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
