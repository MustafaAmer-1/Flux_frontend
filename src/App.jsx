import { ApiConfig } from './config/api';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

// Components
import Layout from './components/Layout';

// Pages
import LoginPage from './pages/LoginPage';
import AddFeedPage from './pages/AddFeedPage';
import AllFeedsPage from './pages/AllFeedsPage';
import MyPostsPage from './pages/MyPostsPage';
import MyFeedsPage from './pages/MyFeedsPage';

ApiConfig.setBaseUrl('http://localhost:8080/v1/');

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/feeds" element={<AllFeedsPage />} />
          <Route path="/my-feeds" element={<MyFeedsPage />} />
          <Route path="/my-posts" element={<MyPostsPage />} />
          <Route path="/add-feed" element={<AddFeedPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
