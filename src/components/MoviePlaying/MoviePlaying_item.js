import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MoviePlaying_item extends Component {
  constructor(props){
    super(props);

}
chuyenDoiURL = (str) => {
  //Đổi chữ hoa thành chữ thường
  str = str.toLowerCase();     

  // xóa dấu
  str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
  str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
  str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
  str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
  str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
  str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
  str = str.replace(/(đ)/g, 'd');

  // Xóa ký tự đặc biệt
  str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
} 
    render() {
        return (
          <div className="col-md-4 mb-3 ">
            <div className="content">
              <li>
                <Link to={"/chiTietphim/" + this.chuyenDoiURL(this.props.tenPhim) + ".minhcinema"}>
                  <div className="content-overlay" />
                  <img className="content-image" src={this.props.anh} alt='for react my app'/>
                  <div className="content-details fadeIn-bottom">
                    <button className="content-button">Mua vé</button>
                  </div>
                </Link>
              </li>
            </div>
            <div className="title-movie mt-2 ml-3">
              <h4 className="upper-text">
                {this.props.tenPhim}
              </h4>
            </div> 
          </div>
        );
    }
}

export default MoviePlaying_item;