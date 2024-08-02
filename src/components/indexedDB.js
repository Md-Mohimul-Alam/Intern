const dbName = 'AuthDB';
const userStoreName = 'users';
const orderStoreName = 'orders';
const personalInfoStoreName = 'personalInfo';

// Open the database and create object stores if they don't exist
const openDB = () => {
  return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 2); // Increment the version number to trigger onupgradeneeded

      request.onupgradeneeded = (event) => {
          const db = event.target.result;

          // Create users object store if it doesn't exist
          if (!db.objectStoreNames.contains(userStoreName)) {
              const userStore = db.createObjectStore(userStoreName, { keyPath: 'id', autoIncrement: true });
              userStore.createIndex('email', 'email', { unique: true });
              userStore.createIndex('phone', 'phone', { unique: true });
          }

          // Create orders object store if it doesn't exist
          if (!db.objectStoreNames.contains(orderStoreName)) {
              const orderStore = db.createObjectStore(orderStoreName, { keyPath: 'id', autoIncrement: true });
              orderStore.createIndex('userId', 'userId', { unique: false });
              orderStore.createIndex('items', 'items', { unique: false });
              orderStore.createIndex('totalPrice', 'totalPrice', { unique: false });
              orderStore.createIndex('totalItems', 'totalItems', { unique: false });
          }

          // Create personalInfo object store if it doesn't exist
          if (!db.objectStoreNames.contains(personalInfoStoreName)) {
              const personalInfoStore = db.createObjectStore(personalInfoStoreName, { keyPath: 'id', autoIncrement: true });
              personalInfoStore.createIndex('userId', 'userId', { unique: false });
          }
      };

      request.onsuccess = (event) => {
          resolve(event.target.result);
      };

      request.onerror = (event) => {
          reject(event.target.error);
      };
  });
};


// Add or update a user in the 'users' object store
export const addUser = (user, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction([userStoreName], 'readwrite');
      const store = transaction.objectStore(userStoreName);
      user.type = type;
      const request = store.put(user);

      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    } catch (error) {
      reject(error);
    }
  });
};

// Get a user by email
export const getUserByEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction([userStoreName], 'readonly');
      const store = transaction.objectStore(userStoreName);
      const index = store.index('email');
      const request = index.get(email);

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    } catch (error) {
      reject(error);
    }
  });
};

// Get a user by phone number
export const getUserByPhone = (phone) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction([userStoreName], 'readonly');
      const store = transaction.objectStore(userStoreName);
      const index = store.index('phone');
      const request = index.get(phone);

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    } catch (error) {
      reject(error);
    }
  });
};

// Check if a user exists by email or phone
export const userExists = (value, type) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction([userStoreName], 'readonly');
      const store = transaction.objectStore(userStoreName);
      const index = store.index(type);
      const request = index.get(value);

      request.onsuccess = (event) => resolve(!!event.target.result);
      request.onerror = (event) => reject(event.target.error);
    } catch (error) {
      reject(error);
    }
  });
};

// Add an order to the 'orders' object store

const addOrder = (order) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction(orderStoreName, 'readwrite');
      const store = transaction.objectStore(orderStoreName);
      const request = store.add(order); // Add order to the store

      request.onsuccess = () => resolve(request.result); // Return the generated ID
      request.onerror = (event) => reject(event.target.error);
    } catch (error) {
      reject(error);
    }
  });
};

export { addOrder };
// Get an order by ID from the 'orders' object store
export const getOrderById = (orderId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction([orderStoreName], 'readonly');
      const store = transaction.objectStore(orderStoreName);
      const request = store.get(orderId);

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    } catch (error) {
      reject(error);
    }
  });
};

// Get all orders for a specific userId from the 'orders' object store
export const getOrdersByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction([orderStoreName], 'readonly');
      const store = transaction.objectStore(orderStoreName);
      const index = store.index('userId');
      const request = index.openCursor(IDBKeyRange.only(userId));

      const orders = [];
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
    } catch (error) {
      reject(error);
    }
  });
};

// Add personal information to the 'personalInfo' object store
export const addPersonalInfo = (personalInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction([personalInfoStoreName], 'readwrite');
      const store = transaction.objectStore(personalInfoStoreName);
      const request = store.put(personalInfo);

      request.onsuccess = () => resolve();
      request.onerror = (event) => reject(event.target.error);
    } catch (error) {
      reject(error);
    }
  });
};

// Get personal information by userId
export const getPersonalInfoByUserId = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const db = await openDB();
      const transaction = db.transaction([personalInfoStoreName], 'readonly');
      const store = transaction.objectStore(personalInfoStoreName);
      const index = store.index('userId');
      const request = index.get(userId);

      request.onsuccess = (event) => resolve(event.target.result);
      request.onerror = (event) => reject(event.target.error);
    } catch (error) {
      reject(error);
    }
  });
};