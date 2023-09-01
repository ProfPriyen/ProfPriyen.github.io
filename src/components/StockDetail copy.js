import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
// npm install react-csv to run this
function StockDetail() {
  const [stocks, setStocks] = useState([]);
  const [name, setName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [profitLoss, setProfitLoss] = useState('');

  const addStock = () => {
    const investment = parseFloat(purchasePrice) * parseInt(quantity);
    const profitLossValue = (parseFloat(sellingPrice) * parseInt(quantity)) - investment;

    const newStock = {
      name,
      purchasePrice: parseFloat(purchasePrice),
      quantity: parseInt(quantity),
      sellingPrice: parseFloat(sellingPrice),
      investment,
      profitLoss: profitLossValue
    };

    setStocks([...stocks, newStock]);
    setName('');
    setPurchasePrice('');
    setQuantity('');
    setSellingPrice('');
    setProfitLoss('');
  };

  const exportData = () => {
    const csvData = stocks.map(stock => ({
      Name: stock.name,
      'Purchase Price': stock.purchasePrice,
      Quantity: stock.quantity,
      'Selling Price': stock.sellingPrice,
      Investment: stock.investment,
      'Profit/Loss': stock.profitLoss
    }));

    return csvData;
  };

  return (
    <div>
      <h2>Stock Detail</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>Purchase Price:</label>
        <input type="number" value={purchasePrice} onChange={e => setPurchasePrice(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
      </div>
      <div>
        <label>Selling Price:</label>
        <input type="number" value={sellingPrice} onChange={e => setSellingPrice(e.target.value)} />
      </div>
      <div>
        <button onClick={addStock}>Add Stock</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purchase Price</th>
            <th>Quantity</th>
            <th>Selling Price</th>
            <th>Investment</th>
            <th>Profit/Loss</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock, index) => (
            <tr key={index}>
              <td>{stock.name}</td>
              <td>{stock.purchasePrice}</td>
              <td>{stock.quantity}</td>
              <td>{stock.sellingPrice}</td>
              <td>{stock.investment}</td>
              <td>{stock.profitLoss}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {stocks.length > 0 && (
        <div>
          <CSVLink data={exportData()} filename="stock_details.csv">
            Export CSV
          </CSVLink>
        </div>
      )}
    </div>
  );
}

export default StockDetail;
