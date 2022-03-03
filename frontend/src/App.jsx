import logo from './logo.svg'
import './App.css'
import Button from './components/Button'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowProducts from './components/ShowProducts'
import CreateProduct from './components/CreateProduct'
import EditProduct from './components/EditProduct'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3 className='text-white'>Laravel 9 API + ReactJS</h3>
      </header>
      <main className='App-main'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <ShowProducts />} />
            <Route path='/create' element={ <CreateProduct />} />
            <Route path='/edit/:id' element={ <EditProduct />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App
