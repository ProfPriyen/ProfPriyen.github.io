import React, { useState } from 'react';
import './StockDetail.css';

function StockDetail() {
  const [name, setName] = useState('');
  const [accountId, setAccountId] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [purchaseQuantity, setPurchaseQuantity] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [sellingQuantity, setSellingQuantity] = useState('');
  const [error, setError] = useState('');
  const [stockDetails, setStockDetails] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleAddStock = (e) => {
    e.preventDefault();

    if (sellingQuantity > purchaseQuantity) {
      setError('Selling quantity cannot be greater than purchase quantity');
      return;
    }

    if (editIndex !== -1) {
      // Update existing stock detail
      const updatedStockDetails = [...stockDetails];
      updatedStockDetails[editIndex] = {
        name,
        accountId,
        purchasePrice,
        purchaseQuantity,
        sellingPrice,
        sellingQuantity,
      };
      setStockDetails(updatedStockDetails);
      setEditIndex(-1);
    } else {
      // Add new stock detail to the list
      setStockDetails([...stockDetails, { accountId ,name, purchasePrice, purchaseQuantity, sellingPrice, sellingQuantity }]);
    }

    // Reset form fields
    setAccountId('');
    setName('');
    setPurchasePrice('');
    setPurchaseQuantity('');
    setSellingPrice('');
    setSellingQuantity('');
    setError('');
  };

  const handleEditStock = (index) => {
    const stock = stockDetails[index];
    setAccountId(stock.accountId)
    setName(stock.name);
    setPurchasePrice(stock.purchasePrice);
    setPurchaseQuantity(stock.purchaseQuantity);
    setSellingPrice(stock.sellingPrice);
    setSellingQuantity(stock.sellingQuantity);
    setEditIndex(index);
  };

  const handleDeleteStock = (index) => {
    const updatedStockDetails = [...stockDetails];
    updatedStockDetails.splice(index, 1);
    setStockDetails(updatedStockDetails);
  };

  const handleDownloadStockDetails = () => {
    const csvData = [
      ['acountId','Name', 'Purchase Price', 'Purchase Quantity', 'Selling Price', 'Selling Quantity'],
      ...stockDetails.map((stock) => [
        stock.accountId,
        stock.name,
        stock.purchasePrice,
        stock.purchaseQuantity,
        stock.sellingPrice,
        stock.sellingQuantity,
      ]),
    ];

    const csvContent = 'data:text/csv;charset=utf-8,' + csvData.map((row) => row.join(',')).join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'stock_details.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="stock-detail-container">
      <h2 className="stock-detail-title">Stock Detail</h2>
      <form onSubmit={handleAddStock} className="stock-form">
      <table className="stock-form">
  <tbody>
    <tr>
      <td>
        <label htmlFor="name" className="form-label">
          Stock Name:
        </label>
      </td>
      <td>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>
   
      <td>
        <label htmlFor="accountId" className="form-label">
          Account ID:
        </label>
      </td>
      <td>
        <select
          id="accountId"
          className="form-select"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        >
          <option value="">Select Account ID</option>
          <option value="1">Account 1</option>
          <option value="2">Account 2</option>
          <option value="3">Account 3</option>
          {/* Add more options as needed */}
        </select>
      </td>
    </tr>
    <tr>
      <td>
        <label htmlFor="purchaseQuantity" className="form-label">
          Purchase Quantity:
        </label>
      </td>
      <td>
        <input
          type="number"
          id="purchaseQuantity"
          className="form-input"
          value={purchaseQuantity}
          onChange={(e) => setPurchaseQuantity(e.target.value)}
        />
      </td>
      <td>
        <label htmlFor="purchasePrice" className="form-label">
          Purchase Price:
        </label>
      </td>
      <td>
        <input
          type="number"
          id="purchasePrice"
          className="form-input"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
        />
      </td>
    </tr>
    <tr>
      <td>
        <label htmlFor="sellingQuantity" className="form-label">
          Selling Quantity:
        </label>
      </td>
      <td>
        <input
          type="number"
          id="sellingQuantity"
          className="form-input"
          value={sellingQuantity}
          onChange={(e) => setSellingQuantity(e.target.value)}
        />
      </td>
      <td>
        <label htmlFor="sellingPrice" className="form-label">
          Selling Price:
        </label>
      </td>
      <td>
        <input
          type="number"
          id="sellingPrice"
          className="form-input"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
      </td>
    </tr>
    <br/>
    <tr>

      <td colSpan="4" className="submit-row">
        <button type="submit" className="submit-button">
          {editIndex !== -1 ? 'Update Stock' : 'Add Stock'}
        </button>
      </td>
    </tr>
      <tr>{error && <td className="error-message">{error}</td>}</tr>
  </tbody>
</table>
  </form>


      <div className="stock-table-container">
        <table className="stock-table">
          <thead>
            <tr>
              <th>AccountId</th>
              <th>Name</th>
              <th>Purchase Price</th>
              <th>Purchase Quantity</th>
              <th>Selling Price</th>
              <th>Selling Quantity</th>
              <th>Remaining Investment</th>
              <th>Profit/Loss</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stockDetails.map((stock, index) => {
              const remainingInvestment = stock.purchaseQuantity - stock.sellingQuantity;
              const profitLoss = stock.sellingPrice * stock.sellingQuantity - stock.purchasePrice * stock.purchaseQuantity;

              return (
                <tr key={index}>
                  <td>{stock.accountId}</td>
                  <td>{stock.name}</td>
                  <td>{stock.purchasePrice}</td>
                  <td>{stock.purchaseQuantity}</td>
                  <td>{stock.sellingPrice}</td>
                  <td>{stock.sellingQuantity}</td>
                  <td>{remainingInvestment}</td>
                  <td className={profitLoss >= 0 ? 'profit' : 'loss'}>{profitLoss}</td>
                  <td>
                    <button className="edit-button" onClick={() => handleEditStock(index)}>
                      Edit
                    </button>
                    <button className="delete-button" onClick={() => handleDeleteStock(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="download-button-container">
        <button className="download-button" onClick={handleDownloadStockDetails}>
          Download Stock Details
        </button>
      </div>
    </div>
  );
}

export default StockDetail;
