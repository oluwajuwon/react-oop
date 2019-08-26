import React from 'react';
import './Home.scss';

class Home extends React.Component {

  state = {
    imgUrl: 'https://images.pexels.com/photos/139762/pexels-photo-139762.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  }

  componentDidMount () {

  }

  renderLog () {
    console.log('new one');
    return (
      <div>
        <p>Just testing</p>
      </div>
    )
  }

  render() {
    const { imgUrl } = this.state;
    return (
      <div>
        <img scr={imgUrl} alt='baseball' />
      </div>
    )
  }

}

export default Home;
