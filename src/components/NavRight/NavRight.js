import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dlMovie from '../../json/DulieuMoviePlay.json';
import NavRight_item from './NavRight_item';

class NavRight extends Component {
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
          <div className="col-md-4 col-sm-4 col-xs-12">
            <section id="movieSidebar" className="hidden text-uppercase">
              <h3>phim đang chiếu</h3>
              <div className="row movie">
                {
                  dlMovie.map((value, key) => {
                    return(
                      <NavRight_item movieID={value.id} anh={value.anh} tenPhim={value.tenPhim}></NavRight_item>
                    )
                  })
                }                                                          
              </div>
              <div className="button-seemore">
                <div className="item-seemore">
                  <li>
                    <Link to="/phimDangchieu">Xem thêm</Link>
                  </li>
                  
                </div>
              </div>
            </section>
          </div>
        );
    }
}

export default NavRight;