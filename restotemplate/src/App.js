import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './pages/About';
import Menu from './pages/MenuPage';
import ListAllFood from './components/ListAllFood';
import ListFoodByCategory from './components/ListFoodByCategory';
import PannierProvider from './components/PannierProvider';
import CommandePage from './pages/CommandePage';


function App() {
  return (
    <PannierProvider>
      <div>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/commande' element={<CommandePage />} />
              <Route path='/menu' element={<Menu />}>
                <Route path='' element={<ListAllFood />} />
                <Route path=':id' element={<ListFoodByCategory />} />
              </Route>



              <Route path='*' element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </PannierProvider>
  );
}

export default App;
