import React, {Component} from 'react';
import ModalImage from "react-modal-image";

class ImageCard extends Component {

    constructor(props) {
        //console.log(props.image.id)
        super(props);
        this.state = {spans : 0}
        this.imageRef = React.createRef();

    }

    componentDidMount() {
        //console.log(this.imageRef);
        this.imageRef.current.addEventListener('load', this.setSpans)

    }

    setSpans = () => {
        //console.log(this.imageRef.current.clientHeight)
        const height = this.imageRef.current.clientHeight;
        const spanRows = Math.ceil(height / 10);
        this.setState({spans:spanRows })
    }
    
    render() { 
        console.log(this.props.image.id)

        return ( 
            <div> 
            <img
            style={{gridRowEnd: `span ${this.state.spans}`}}
            ref={this.imageRef}
            key={this.props.image.id}
     src={this.props.image.urls.small}
     //large={this.props.image.urls.regular}
     alt={this.props.image.alt_description}
     showRotate={true}
     hideDownload={true}
     imageBackgroundColor="#FFFFFF"
     className="image-wrapper"
     id="image-wrapper"
     
   />
   </div> 
         );
    }
}
 
export default ImageCard;