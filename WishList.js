import React, { useState } from 'react';
import './WishList.css';

function WishList() {
  const [items, setItems] = useState([]);

  const addItem = (event) => {
    event.preventDefault();
    const newItem = {
      text: event.target.item.value,
      priority: 1
    };
    setItems([...items, newItem]);
    event.target.item.value = '';
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const updatePriority = (index, newPriority) => {
    const newItems = [...items];
    newItems[index].priority = newPriority;
    setItems(newItems);
  };

  const moveToTop = (index) => {
    const newItems = [...items];
    const item = newItems.splice(index, 1)[0];
    newItems.unshift(item);
    setItems(newItems);
  };

  return (
    <center>
    <div className="wishlist-container">
    <h1 className="wishlist-header">WishList</h1>
        
      <form onSubmit={addItem}>
        <input type="text" name="item" />
        <button type="submit" className='btn2'>Add Item</button>
      </form>
      <ul className="wishlist-items">
        {items.map((item, index) => (
          <li className="wishlist-item" key={index}>
            <div className="wishlist-item-text">{item.text}</div>
            <div className="wishlist-item-buttons">
              <button className="wishlist-item-button" onClick={() => removeItem(index)}>Remove</button>
              <button className="wishlist-item-button" onClick={() => updatePriority(index, item.priority + 1)}>Increase Priority</button>
              <button className="wishlist-item-button" onClick={() => updatePriority(index, item.priority - 1)}>Decrease Priority</button>
              <button className="wishlist-item-button" onClick={() => moveToTop(index)}>Move to Top</button>
            </div>
            <div className="wishlist-item-priority">Priority: {item.priority}</div>
          </li>
        ))}
      </ul>
    </div>
    </center>
  );
}

export default WishList;
