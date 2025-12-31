
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { BLOG_POSTS, CATEGORIES } from '../../constants';

export const PostEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = id === 'new';
  
  // Mock data fetching
  const existingPost = BLOG_POSTS.find(p => p.id === id);
  
  const [post, setPost] = useState(existingPost || {
    title: '',
    slug: '',
    category: '',
    excerpt: '',
    content: '',
    status: 'draft',
    image: '',
    publishDate: new Date().toISOString().split('T')[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate save
    alert('Post saved successfully!');
    navigate('/admin/posts');
  };

  return (
    <div>
        <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
                <button onClick={() => navigate('/admin/posts')} className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                </button>
                <h1 className="text-3xl font-bold text-white">{isNew ? 'New Post' : 'Edit Post'}</h1>
            </div>
            <div className="flex gap-4">
                <button className="px-6 py-3 rounded-lg font-bold bg-gray-700 text-white hover:bg-gray-600 transition-colors">
                    Save Draft
                </button>
                <button onClick={handleSubmit} className="px-6 py-3 rounded-lg font-bold bg-orange-500 text-white hover:bg-orange-600 flex items-center gap-2 transition-colors">
                    <Save size={20} />
                    Publish
                </button>
            </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content Form */}
            <div className="lg:col-span-2 space-y-6">
                <div>
                    <label className="block text-gray-300 font-bold mb-2">Title</label>
                    <input 
                        type="text" 
                        value={post.title}
                        onChange={(e) => setPost({...post, title: e.target.value})}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:border-orange-500 outline-none text-lg"
                        placeholder="Enter post title"
                    />
                </div>
                
                <div>
                    <label className="block text-gray-300 font-bold mb-2">Slug</label>
                    <input 
                        type="text" 
                        value={post.slug}
                        onChange={(e) => setPost({...post, slug: e.target.value})}
                        className="w-full bg-gray-800 border border-gray-700 text-gray-400 rounded-lg px-4 py-2 focus:border-orange-500 outline-none text-sm"
                        placeholder="url-slug-here"
                    />
                </div>

                <div>
                    <label className="block text-gray-300 font-bold mb-2">Excerpt</label>
                    <textarea 
                        value={post.excerpt}
                        onChange={(e) => setPost({...post, excerpt: e.target.value})}
                        rows={3}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:border-orange-500 outline-none resize-none"
                        placeholder="Short description for SEO and cards..."
                    />
                </div>

                <div>
                    <label className="block text-gray-300 font-bold mb-2">Content (HTML Support)</label>
                    <textarea 
                        value={post.content}
                        onChange={(e) => setPost({...post, content: e.target.value})}
                        rows={15}
                        className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:border-orange-500 outline-none font-mono text-sm"
                        placeholder="<p>Write your content here...</p>"
                    />
                </div>
            </div>

            {/* Sidebar Settings */}
            <div className="space-y-6">
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h3 className="font-bold text-white mb-4">Post Settings</h3>
                    
                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm mb-2">Category</label>
                        <select 
                            value={post.category}
                            onChange={(e) => setPost({...post, category: e.target.value})}
                            className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg px-3 py-2 outline-none"
                        >
                            <option value="">Select Category</option>
                            {CATEGORIES.map(c => (
                                <option key={c.id} value={c.title}>{c.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-400 text-sm mb-2">Publish Date</label>
                        <input 
                            type="date"
                            value={post.publishDate}
                            onChange={(e) => setPost({...post, publishDate: e.target.value})}
                            className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg px-3 py-2 outline-none"
                        />
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                    <h3 className="font-bold text-white mb-4">Featured Image</h3>
                    <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-orange-500 transition-colors cursor-pointer">
                        {post.image ? (
                            <img src={post.image} alt="Featured" className="w-full h-32 object-cover rounded mb-2" />
                        ) : (
                            <ImageIcon className="mx-auto text-gray-500 mb-2" size={32} />
                        )}
                        <p className="text-gray-400 text-xs">Click to upload or select from library</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
