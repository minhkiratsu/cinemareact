import React, { Component } from 'react';

class NewDetails_item extends Component {
    render() {
        return (
          <div className="col-md-8 col-sm-8 col-xs-12">
            <section className="des-news">
              <div className="content-wrapper">
                <h1 className="content-title">{this.props.tieuDe}</h1>
                <div className="content-text">
                  <img className="content-image" src={this.props.anh} alt='for react my app'/>
                  <p>
                    <span>
                      {this.props.noiDung} 
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default NewDetails_item;