import './App.css';
import NavBar from './Component/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';



function App() {
  let titulo ='Bike Tour'
  return (
    <div>
          <NavBar />
          <ItemListContainer titulo={titulo} /> 
    </div>
  );
}

export default App;
