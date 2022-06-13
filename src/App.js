import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemCount from './components/temCount';


function App() {
  const onAdd = () =>{
    
  }
  return (
  <>
    <NavBar/>
    <ItemListContainer greeting={(`hola`)}/>
    <ItemCount inicial = {1} max = {5} ondAd = {onAdd}/> 
    <ItemDetailContainer/>
  </>
  );
}

export default App;
