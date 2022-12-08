import './App.css';
import image from './shop.jpg';
import picture from './man.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={ image } width='200px' alt='pic1'/>
      </div>
      <div className="container">
        <h1>Список покупок</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={ picture } width='200px' alt='pic1'/>
      </div>
    </div>
  );
}

export default App;
