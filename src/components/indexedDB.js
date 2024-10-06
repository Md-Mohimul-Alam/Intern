// Import items from your data file
import { items } from './data'; // Adjust the path according to your file structure

const dbName = 'AuthDB';
const userStoreName = 'users';
const orderStoreName = 'orders';
const personalInfoStoreName = 'personalInfo';
const cartStoreName = 'cart';
const itemsStoreName = 'items';

// Function to initialize items in the database
const initializeItems = async (db, items) => {
  const transaction = db.transaction([itemsStoreName], 'readwrite');
  const store = transaction.objectStore(itemsStoreName);

  const promises = items.map(item => {
    return new Promise((resolve, reject) => {
      // Check if the item already exists
      const request = store.get(item.id);
      request.onsuccess = (event) => {
        const existingItem = event.target.result;
        if (!existingItem) {
          // If item doesn't exist, add it to the store
          const putRequest = store.put(item);
          putRequest.onsuccess = () => resolve();
          putRequest.onerror = (event) => {
            console.error('Error adding item:', event.target.error);
            reject(event.target.error);
          };
        } else {
          // If the item already exists, resolve without doing anything
          resolve();
        }
      };
      request.onerror = (event) => {
        console.error('Error checking item:', event.target.error);
        reject(event.target.error);
      };
    });
  });

  try {
    await Promise.all(promises);
    console.log('All items initialized successfully.');
  } catch (error) {
    console.error('Error initializing items:', error);
  }
};

// Open the database and create object stores if they don't exist
const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, 3); // Ensure version is updated

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // Create users object store if it doesn't exist
      if (!db.objectStoreNames.contains(userStoreName)) {
        const userStore = db.createObjectStore(userStoreName, { keyPath: 'id', autoIncrement: true });
        userStore.createIndex('email', 'email', { unique: true });
        userStore.createIndex('phone', 'phone', { unique: true });
        console.log('User object store created.');
      }

      // Create orders object store if it doesn't exist
      if (!db.objectStoreNames.contains(orderStoreName)) {
        const orderStore = db.createObjectStore(orderStoreName, { keyPath: 'id', autoIncrement: true });
        orderStore.createIndex('userId', 'userId', { unique: false });
        console.log('Orders object store created.');
      }

      // Create personalInfo object store if it doesn't exist
      if (!db.objectStoreNames.contains(personalInfoStoreName)) {
        const personalInfoStore = db.createObjectStore(personalInfoStoreName, { keyPath: 'id', autoIncrement: true });
        personalInfoStore.createIndex('userId', 'userId', { unique: false });
        console.log('Personal Info object store created.');
      }

      // Create cart object store if it doesn't exist
      if (!db.objectStoreNames.contains(cartStoreName)) {
        db.createObjectStore(cartStoreName, { keyPath: 'id', autoIncrement: true });
        console.log('Cart object store created.');
      }

      // Create items object store if it doesn't exist
      if (!db.objectStoreNames.contains(itemsStoreName)) {
        db.createObjectStore(itemsStoreName, { keyPath: 'id', autoIncrement: true });
        console.log('Items object store created.');
      }
    };

    request.onsuccess = async (event) => {
      const db = event.target.result;

      // Check if items object store was created for the first time
      if (event.oldVersion < 3) {
        try {
          await initializeItems(db); // Initialize the items
        } catch (error) {
          console.error('Error initializing items:', error);
        }
      }

      console.log('Database opened successfully.');
      resolve(db);
    };

    request.onerror = (event) => {
      console.error('Database error:', event.target.error);
      reject(event.target.error);
    };
  });
};

// User Operations
export const addUser = async (user, type) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([userStoreName], 'readwrite');
    const store = transaction.objectStore(userStoreName);
    user.type = type;
    const request = store.put(user);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserByEmail = async (email) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([userStoreName], 'readonly');
    const store = transaction.objectStore(userStoreName);
    const index = store.index('email');
    const request = index.get(email);

    return new Promise((resolve, reject) => {
      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  } catch (error) {
    throw error;
  }
};

export const getUserByPhone = async (phone) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([userStoreName], 'readonly');
    const store = transaction.objectStore(userStoreName);
    const index = store.index('phone');
    const request = index.get(phone);

    return new Promise((resolve, reject) => {
      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  } catch (error) {
    throw error;
  }
};

export const userExists = async (value, type) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([userStoreName], 'readonly');
    const store = transaction.objectStore(userStoreName);
    const index = store.index(type);
    const request = index.get(value);

    return new Promise((resolve, reject) => {
      request.onsuccess = (event) => resolve(!!event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  } catch (error) {
    throw error;
  }
};

export const addOrder = async (orderDetails, userId) => {
  // Include userId in the orderDetails
  const orderWithUserId = {
    ...orderDetails,
    userId: userId, // Link order with the user ID
  };
  
  const db = await openDB(); // Ensure the database is opened
  return new Promise((resolve, reject) => {
    const transaction = db.transaction([orderStoreName], 'readwrite');
    const store = transaction.objectStore(orderStoreName);
    const request = store.add(orderWithUserId); // Add the order with userId

    request.onsuccess = () => resolve(request.result); // Resolve with the result
    request.onerror = (event) => reject(event.target.error); // Handle errors
  });
};

export const getOrderById = async (orderId) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([orderStoreName], 'readonly');
    const store = transaction.objectStore(orderStoreName);
    const request = store.get(orderId);

    return new Promise((resolve, reject) => {
      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  } catch (error) {
    throw error;
  }
};

export const getOrdersByUserId = async (userId) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([orderStoreName], 'readonly');
    const store = transaction.objectStore(orderStoreName);
    const index = store.index('userId');
    const request = index.openCursor(IDBKeyRange.only(userId));

    const orders = [];
    return new Promise((resolve, reject) => {
      request.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          orders.push(cursor.value);
          cursor.continue();
        } else {
          resolve(orders);
        }
      };

      request.onerror = (event) => reject(event.target.error);
    });
  } catch (error) {
    throw error;
  }
};

// Personal Information Operations
export const addPersonalInfo = async (personalInfo) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([personalInfoStoreName], 'readwrite');
    const store = transaction.objectStore(personalInfoStoreName);
    const request = store.put(personalInfo);

    return new Promise((resolve, reject) => {
      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    });
  } catch (error) {
    throw error;
  }
};

export const getPersonalInfoByUserId = async (userId) => {
  try {
    const db = await openDB();
    const transaction = db.transaction([personalInfoStoreName], 'readonly');
    const store = transaction.objectStore(personalInfoStoreName);
    const index = store.index('userId');
    const request = index.get(userId);

    return new Promise((resolve, reject) => {
      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    });
  } catch (error) {
    throw error;
  }
};

// Cart and Items Operations
export const getCartItems = async () => {
  const db = await openDB();
  const transaction = db.transaction([cartStoreName], 'readonly');
  const store = transaction.objectStore(cartStoreName);
  return store.getAll();
};

export const getItemDetails = async (itemId) => {
  const db = await openDB();
  const transaction = db.transaction([itemsStoreName], 'readonly');
  const store = transaction.objectStore(itemsStoreName);
  return store.get(itemId);
};
// indexedDB.js

// Add this function to your existing exports
export const getPreviousOrders = async (userId) => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('AuthDB', 1); // Adjust the version as needed

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction(['orders'], 'readonly'); // Make sure 'orders' is your object store
      const objectStore = transaction.objectStore('orders');

      // Use an index to query orders by userId
      const index = objectStore.index('userId'); // Ensure you have an index on userId
      const orders = [];

      // Fetch all orders for the specific userId
      const getOrdersRequest = index.openCursor(IDBKeyRange.only(userId));

      getOrdersRequest.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          orders.push(cursor.value); // Store the current order
          cursor.continue(); // Move to the next order
        } else {
          resolve(orders); // Resolve with the array of orders
        }
      };

      getOrdersRequest.onerror = (event) => {
        console.error('Error fetching previous orders:', event.target.error);
        reject(event.target.error);
      };
    };

    request.onerror = (event) => {
      console.error('Error opening database:', event.target.error);
      reject(event.target.error);
    };
  });
};
