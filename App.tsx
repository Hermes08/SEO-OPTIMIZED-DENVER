
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Financing } from './pages/Financing';
import { CategoryPage } from './pages/CategoryPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { About } from './pages/About';
import { AreasWeServe } from './pages/AreasWeServe';
import { Contact } from './pages/Contact';
import { BlogIndex } from './pages/BlogIndex';
import { BlogPost } from './pages/BlogPost';

// Admin Imports
import { AdminLayout } from './pages/admin/AdminLayout';
import { Dashboard } from './pages/admin/Dashboard';
import { PostList } from './pages/admin/PostList';
import { PostEditor } from './pages/admin/PostEditor';
import { MediaLibrary } from './pages/admin/MediaLibrary';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="posts" element={<PostList />} />
            <Route path="posts/:id" element={<PostEditor />} />
            <Route path="media" element={<MediaLibrary />} />
            <Route path="settings" element={<div className="text-white">Settings Placeholder</div>} />
        </Route>

        {/* Public Routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          
          {/* Static Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/areas-we-serve" element={<AreasWeServe />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Blog Routes */}
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:postSlug" element={<BlogPost />} />
          
          {/* Dynamic Category Routes */}
          <Route path="/:categorySlug" element={<CategoryPage />} />
          
          {/* Category-Specific Sub-routes */}
          <Route path="/:categorySlug/blog" element={<BlogIndex />} />
          <Route path="/:categorySlug/blog/:postSlug" element={<BlogPost />} />
          <Route path="/:categorySlug/areas-we-serve" element={<AreasWeServe />} />
          
          <Route path="/:categorySlug/:serviceSlug" element={<ServiceDetailPage />} />
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
