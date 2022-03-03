import React from 'react';
import './Cart.css';

let Cart = ({ details, id, deleteDetail, update, setdetails, name }) => {
  const handleComplete = id => {
    setdetails(
      details.map(detail => {
        if (name.id === id) {
          return {
            ...name,
            complete: !name.complete,
          };
        }
        return name;
      })
    );
  };

  const handleItem = id => {
    const editItem = details.find(el => el.id === id);
    setdetails(editItem.item);
    setdetails(true);
    setdetails(id);
  };

  return details.map(detail => <tr key={detail.name}></tr>);
};

export default Cart;
