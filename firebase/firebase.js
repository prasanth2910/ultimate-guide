// Import the Firebase SDKs
const { initializeApp } = require('firebase/app');
const { getAnalytics, isSupported } = require('firebase/analytics');

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

// Initialize Firebase Analytics if supported
if (isSupported()) {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  // Now you can use the analytics instance
} else {
  console.log("Firebase Analytics is not supported in this environment.");
}

// Now you can use the analytics instance


