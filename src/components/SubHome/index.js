import React from 'react';
import Home from '../Home/';

class SubHome extends Home{

  render(){
    const newHome = new Home();
    return newHome.renderLog();
  }
}

export default SubHome;
