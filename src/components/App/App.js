import React,{Component} from 'react';
import './../../css/App.css';
import './../../css/bootstrap4.css'
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import DieuHuongURL from '../../router/DieuHuongURL';


class App extends Component{
  render(){
    return (
      <div>
        <Nav/>
          <DieuHuongURL/>
        <Footer/>
      </div>
    ); 
  }
}

export default App;
