
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className='App-main'>
          <Routes>
            <Route path='/' element={ <ShowProducts />} />
            <Route path='/create' element={ <CreateProduct />} />
            <Route path='/edit/:id' element={ <EditProduct />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
