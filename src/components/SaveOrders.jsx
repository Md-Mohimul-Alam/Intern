// components/SaveOrders.js
import React, { useEffect } from 'react';
import { saveOrdersToIndexedDB } from './Header/card_drop'; // Adjust the path to where your function is defined

const SaveOrders = () => {
  useEffect(() => {
    const saveOrders = async () => {
      try {
        await saveOrdersToIndexedDB();
        console.log('Orders saved successfully!');
      } catch (error) {
        console.error('Failed to save orders:', error);
      }
    };
    saveOrders();
  }, []);

  return <div>Saving orders...</div>;
};

export default SaveOrders;
