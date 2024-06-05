// FloatingButton.jsx
import React from 'react';
import './DeleteButton.css';

const DeleteButton = ({ id }) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:8080/deletebyId/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        alert('Item deleted successfully!');
      } else {
        alert('Failed to delete the item.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while deleting the item.');
    }
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      X
    </button>
  );
};

export default DeleteButton;
