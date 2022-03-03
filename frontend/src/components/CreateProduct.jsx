import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from  'react-router-dom';

const CreateProduct = () => {

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();

  const store = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:8000/api/v1/product`, {
      description: description,
      price: price,
      stock: stock
    });
    navigate('/');
  }

  return (
    <div>
      <h3>Create Product</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input 
            type="text" 
            className="form-control"
            value={description}
            onChange={ (event) => setDescription(event.target.value) }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input 
            type="number" 
            className="form-control"
            value={price}
            onChange={ (event) => setPrice(event.target.value) }
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input 
            type="number" 
            className="form-control"
            value={stock}
            onChange={ (event) => setStock(event.target.value) }
          />
        </div>

        <button type='submit' className="btn btn-sm btn-primary">Store</button>
      </form>
    </div>
  );
}

export default CreateProduct;