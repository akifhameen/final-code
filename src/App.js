import React from 'react';
import Navigation from './Navigation';
import AuthProvider from './authContext';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
