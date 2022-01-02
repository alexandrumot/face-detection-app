import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceDetection from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import { useState } from 'react';
// import Clarifai from 'clarifai';

// const app = new Clarifai.App({
//   apiKey: '50aecfd11d0a4384b35fede60fca19cf'
// });


function App() {
  const [input, setInput] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [route, setRoute] = useState('signin');
  const [isSignedIn, setIsSignedIn] = useState(false);

  function onInputChange(event) {
    setInput(event.target.value);
  }

  function onButtonSubmit() {
    setImageUrl(input);
    // app.models.predict(Clarifai.GENERAL_MODEL, input).then(
    //   function(response) {
    //     console.log(response);
    //   },
    //   function(err) {
    //     console.log(err);
    //   }
    // );
    // app.models.predict(
    //     Clarifai.FACE_DETECT_MODEL,
    //     input)
    //   .then(response => console.log(response))
    //   .catch(err => console.log(err));
  }

  function onRouteChange(route) {
    if (route === 'signout') {
      setIsSignedIn(false);
    } else if (route === 'home') {
      setIsSignedIn(true);
    }
    setRoute(route);
  }

  return (
    <div className="App">
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange}/>
      { route === 'home' 
        ? <div>
            <Logo />
            <Rank />
            <ImageLinkForm 
              onInputChange={onInputChange} 
              onButtonSubmit={onButtonSubmit}
            />
            <FaceDetection imageUrl={imageUrl} />
          </div>
        : (
          route === 'signin'
          ? <Signin onRouteChange={onRouteChange}/>
          : <Register onRouteChange={onRouteChange}/>
        )      
      }
    </div>
  );
}

export default App;
