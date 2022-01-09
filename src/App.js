import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceDetection from './components/FaceRecognition/FaceRecognition';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import React from 'react';
// import Clarifai from 'clarifai';

// const app = new Clarifai.App({
  //   apiKey: '50aecfd11d0a4384b35fede60fca19cf'
  // });

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      imageUrl: '',
      route: 'signin',
      isSignedIn: false,
      user: {
        id:'',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onButtonSubmit = this.onButtonSubmit.bind(this)
    this.onRouteChange = this.onRouteChange.bind(this)
    this.loadUser = this.loadUser.bind(this)
  }

  loadUser = (data) => {
    this.setState({ 
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        { this.state.route === 'home' 
          ? <div>
              <Logo />
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm 
                onInputChange={this.onInputChange} 
                onButtonSubmit={this.onButtonSubmit}
              />
              <FaceDetection imageUrl={this.state.imageUrl} />
            </div>
          : (
            this.state.route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
            : <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
          )      
        }
      </div>
    )
  }
}

export default App;
