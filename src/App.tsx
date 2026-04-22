import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import StreamingPage from './pages/StreamingPage';
import PodcastsPage from './pages/PodcastsPage';
import ResourcesPage from './pages/ResourcesPage';
import MarketingPage from './pages/MarketingPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/streaming" element={<StreamingPage />} />
          <Route path="/podcasts" element={<PodcastsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
