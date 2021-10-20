import './App.css';
import NavBar from './Component/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import ItemCount from ' ./Component/ItemCount/ItemCount';




function App() {
  let titulo ='Bike Tour'
  return (
    <div>
          <NavBar />
          <ItemListContainer titulo={titulo} /> 
          <ItemCount /> 
    </div>
  );
}

export default App;
