import React from 'react';
import './img.css'

class UserImg extends React.Component{
  constructor(props){
    super(props)
    this.state = {}

  }

  render(){
    const {className ,src ,alt} = this.props;
    return <div className='imgWrapper'>
          <img className={className} src={src} alt={alt} />
    </div>
  }
}

export default UserImg