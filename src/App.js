import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
function App() {
  return <>
   <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <ItemListContainer />
      </Route>
      <Route exact path="/item">
        <Item />
      </Route>
    </Switch>
   </BrowserRouter>
  </>
}

  export default App;