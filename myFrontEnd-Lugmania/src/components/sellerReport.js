import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../config';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ExampleTable2 = () => {
  const [seller_report, setSellers] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/toy/sellers_report`) // Asegúrate de que esta ruta es correcta en tu backend
      .then(response => response.json())
      .then(data => setSellers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sellers Report</h2>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Number of Toys</th>
            <th>Total Amount of Money</th>
          </tr>
        </thead>
        <tbody>
          {seller_report.map(seller => (
            <tr key={seller.id}>
              <td>{seller.id}</td>
              <td>{seller.name}</td>
              <td>{seller.lastname}</td>
              <td>{seller.address}</td>
              <td>{seller.email}</td>
              <td>{seller.number_toys}</td>
              <td>${Number(seller.total_amount_of_money).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExampleTable2;