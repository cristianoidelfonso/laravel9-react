import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {

  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();

  const { id } = useParams();

  const update = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:8000/api/v1/product/${id}`, {
      description: description,
      price: price,
      stock: stock
    });
    navigate('/');
  }

  useEffect( () => {
    const getProductById = async () => {
      const response = await axios.get(`http://localhost:8000/api/v1/product/${id}`);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setStock(response.data.stock);
    }
    getProductById();
  }, [])

  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input
            type="number"
            className="form-control"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
          />
        </div>

        <button type='submit' className="btn btn-sm btn-primary">Update</button>
      </form>
    </div>
  );
}

export default EditProduct;