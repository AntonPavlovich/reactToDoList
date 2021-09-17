import React from "react";
import "./img.css";

class UserImg extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
    };
  }

  errorHandler = () => {
    const { hide } = this.state;

    this.setState({
      hide: !hide,
    });
  };

  render() {
    const { className, src, alt } = this.props;
    const { hide } = this.state;

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
