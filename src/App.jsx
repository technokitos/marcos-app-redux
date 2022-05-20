import './App.css';
import ImageList from './components/ImageList';
import Navbar from './components/Navbar';



function App() {
  return (

    <div className="App">
      <Navbar />
      <h1>PHOTO GALLERY</h1>
      <p>Photo gallery made using redux toolkit and redux thunk</p>
      <hr />
      <div className="Gallery">
       <ImageList />
      </div>
    </div>
  );
}

export default App;
