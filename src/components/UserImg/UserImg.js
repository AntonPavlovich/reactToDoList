import React from "react";
import "./img.css";

class UserImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: false,
    };
  }

  errorHandler = () => {
    this.setState({
      hide: true
    });
  };

  render() {
    const { className, src, alt } = this.props;

    const img = <img onError={this.errorHandler} className={className} src={src} alt={alt}
      />
    const par = <p className="initials">{alt}</p>
    

    return (
      <div className="imgWrapper">
         {img}
         {par}
      </div>
    );
  }
}

export default UserImg;
