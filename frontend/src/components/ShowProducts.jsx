import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowProducts = () => {

  const [ products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get('http://localhost:8000/api/v1/products');
    setProducts(response);
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/api/v1/product/${id}`);
    getAllProducts();
  }

  return (
    <div>
      <div className='d-grid gap-2'>
        <Link to='/create' className='btn btn-success btn-lg my-2 text-white'>Create</Link>
      </div>
      <table className=''>
        <thead>
          <tr>
            <th>DESCRIPTION</th>
            <th>PRICE</th>
            <th>STOCK</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                  <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowProducts