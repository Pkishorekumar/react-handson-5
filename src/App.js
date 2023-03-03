// import logo from './logo.svg';
import './App.css';
import Higher from './Higherordercomponen/Higher';
import Review from './Purecomponent/Review';




function App() {
  return (
    <div className="App">
        
        <div className="movie">
        <h2>Higher Order Component</h2>
       <Higher/>
      
      </div>

    
      <div className="review">
        <h2>Pure Component</h2>
       
       <Review/>
      </div>

    </div>
  );
}

export default App;
