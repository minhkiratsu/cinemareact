import React, { Component } from 'react'
import NavRight from '../NavRight/NavRight';
import dlNewDetail from '../../json/DulieuNewDetails.json'
import NewDetails_item from './NewDetails_item';

export default class NewDetails extends Component {
    render() {     
        return (
          <div>
            <div className='set-background'>
              <div className="block-wrapper">
                <div className="container">
                    {
                      dlNewDetail.map((value, key) =>{
                        return(
                          <NewDetails_item anh={value.anh} tieuDe={value.tieuDe} noiDung={value.noiDung}></NewDetails_item>
                        )
                      })
                    }
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
