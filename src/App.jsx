import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import LoginPage from './pages/LoginPage';
import AddFeedPage from './pages/AddFeedPage';
import AllFeedsPage from './pages/AllFeedsPage';
import MyFeedsPage from './pages/MyFeedsPage';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/feeds" element={<AllFeedsPage />} />
          <Route path="/my-feeds" element={<MyFeedsPage />} />
          <Route path="/add-feed" element={<AddFeedPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
