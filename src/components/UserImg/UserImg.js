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
    this.setState({
      hide: true
    });
  };

  loadHandler = () => {
    this.setState({
      hide : false
    })
  }

  render() {
    const { className, src, alt } = this.props;
    const { hide } = this.state;

    const img = <img onLoad={this.loadHandler} onError={this.errorHandler} className={className} src={src} alt={alt}
      />
    const par = <p className="initials">{alt}</p>
 
    const elem = hide ? img : par;

    return (
      <div className="imgWrapper">
         {elem}
      </div>
    );
  }
}

export default UserImg;
