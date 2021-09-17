import React from "react";
import "./img.css";

class UserImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: "hideBlock",
    };
  }

  render() {
    const { className, src, alt } = this.props;

    return (
      <div className="imgWrapper">
        <img className={className} src={src} alt={alt} />
        <p className="initials">{alt}</p>
      </div>
    );
  }
}

export default UserImg;
