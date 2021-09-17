import React from "react";
import UserImg from "./../UserImg/UserImg";
import UserInfo from "./../UserInfo/UserInfo";
import "./userCard.css";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userNumber: 0,
    };
  }

  changeUser =()=> {
    let { userNumber } = this.state;
    if(userNumber > 6){
      userNumber = -1
    }
    return this.setState({
      userNumber: userNumber + 1,
    });
  }

  render() {
    const { userNumber } = this.state;

    const { user } = this.props;
    const { id, firstName, lastName, profilePicture } = user[userNumber];
    const fullName = `${firstName} ${lastName}`.trim() || "Unknown";

    return (
      <div id={id} className="card">
        <UserImg src={profilePicture} className="userImg" alt={fullName} />
        <UserInfo fullName={fullName} />
        <button onClick={this.changeUser} className="changeBtn">
          Click here to change user
        </button>
      </div>
    );
  }
}

export default UserCard;
