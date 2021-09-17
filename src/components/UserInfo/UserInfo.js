import React from 'react';
import './userInfo.css'

class UserInfo extends React.Component{
  
  render(){
    const {fullName} = this.props
    return <div>
      <h1 className='heading'>{fullName}</h1>
      <p className='aboutUser'>something important about this person</p>
    </div>
  }
}

export default UserInfo;