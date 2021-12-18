import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceDetection from './components/FaceRecognition/FaceRecognition';
import { useState } from 'react';
import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//   apiKey: '50aecfd11d0a4384b35fede60fca19cf'
// });

function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onButtonSubmit() {
    setImageUrl(input);
    // app.models.predict(
    //     Clarifai.FACE_DETECT_MODEL,
    //     input)
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={onInputChange} 
        onButtonSubmit={onButtonSubmit}/>
      <FaceDetection imageUrl={imageUrl}/>
    </div>
  );
}

export default App;
