import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ShowProducts = () => {

  const [ products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get('http://localhost:8000/api/v1/products');
    setProducts(response.data);
  }

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:8000/api/v1/product/${id}`);
    getAllProducts();
  }

  return (
    <div>
      <div className=''>
        <Link to='/create' className='btn btn-success btn-lg my-4 text-white' style={{ float: 'right' }}><FaPlus /> Create</Link>
      </div>
      <table className='table table-striped'>
        <thead className='bg-primary text-white'>
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
                  <Link to={`/edit/${product.id}`} className='btn btn-warning'><FaEdit/> Edit</Link>
                  <button onClick={() => deleteProduct(product.id)} className='btn btn-danger mx-3'><FaTrash /> Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default ShowProducts