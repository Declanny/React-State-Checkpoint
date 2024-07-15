import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://www.shutterstock.com/image-photo/goodlooking-millennial-office-employee-glasses-260nw-1854695353.jpg",
      profession: "Engineer"
    },
    show: false
  };

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }), () => {
      if (this.state.show) {
        alert('Profile is visible');
      } else {
        alert('Profile is hidden');
      }
    });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p><strong>Profession:</strong> {profession}</p>
            <p>{bio}</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
