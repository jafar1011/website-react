import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="texthead"> </p>
        <div className='circle'> </div>
        <div className="menu-container">
  <button className="menubar">About Us</button>
</div>
<div className="menu-container">
  <button className="menubar" style={{left: 525}}>Contact</button>
</div>
<div className="menu-container">
  <button className="menubar" style={{left: 660}}>Vision</button>
</div>
      </header>
    </div>
  );
}

export default App;