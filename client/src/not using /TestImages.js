import React , { useState } from 'react';

const TestImages = () => {
  const [image, setImage] = useState([])
  

  fetch('/api/images')
      .then(res => res.json())
      .then(data => setImage(data));

      console.log(image)
  return ( 
    <h1>Test Images</h1>
   );
}
 

/*
class Customers extends Component {


  componentDidMount() {
    fetch('/api/images')
      .then(res => res.json())
      .then(data => useState(data));
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}
*/

export default TestImages;
