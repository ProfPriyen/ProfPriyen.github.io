import React, { useState } from 'react';

const VegetableCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const vegetableData = {
    fruits: ['Tomato', 'Cucumber', 'Bell Pepper'],
    leafyGreens: ['Spinach', 'Kale', 'Lettuce'],
    rootVegetables: ['Carrot', 'Potato', 'Beetroot'],
  };

  const handleChangeCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <h1>Vegetable Categories</h1>
      <select onChange={handleChangeCategory} value={selectedCategory}>
        <option value="">Select Category</option>
        <option value="fruits">Fruits</option>
        <option value="leafyGreens">Leafy Greens</option>
        <option value="rootVegetables">Root Vegetables</option>
      </select>

      {selectedCategory && (
        <div>
          <h2>Vegetables in {selectedCategory}</h2>
          <ul>
            {vegetableData[selectedCategory].map((vegetable, index) => (
              <li key={index}>{vegetable}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VegetableCategories;
