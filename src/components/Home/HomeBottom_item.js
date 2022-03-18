import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomeBottom_item extends Component {
    render() {
        return (
            <div className="col-md-6 p-2">
                <article className="blog">
                    <div className="movie-img">
                        <li>
                            <Link to="/tinTuc">
                            <img className="movie-img-item" src={this.props.anh} alt='movie 7'/>
                            </Link>
                        </li>
                    </div>
                    <h5>
                        <li>
                            <Link to="/tinTuc">
                                {this.props.tieuDe}
                            </Link>
                        </li>
                    </h5>
                </article>
            </div>
        );
    }
}

export default HomeBottom_item;