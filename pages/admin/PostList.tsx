import React from 'react';
import { Link } from 'react-router-dom';
import { Edit, Trash2, Plus, Search } from 'lucide-react';
import { BLOG_POSTS } from '../../constants';

export const PostList = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
            <Link to="/admin/posts/new" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
                <Plus size={20} aria-hidden="true" />
                New Post
            </Link>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            {/* Filters */}
            <div className="p-4 border-b border-gray-700 flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} aria-hidden="true" />
                    <label htmlFor="post-search" className="sr-only">Search posts</label>
                    <input 
                        id="post-search"
                        type="text" 
                        placeholder="Search posts..." 
                        className="w-full bg-gray-900 border border-gray-600 text-white rounded-lg pl-10 pr-4 py-2 focus:border-orange-500 outline-none"
                    />
                </div>
                <label htmlFor="category-filter" className="sr-only">Filter by Category</label>
                <select id="category-filter" className="bg-gray-900 border border-gray-600 text-white rounded-lg px-4 py-2 outline-none">
                    <option>All Categories</option>
                    <option>Electrical</option>
                    <option>Plumbing</option>
                    <option>HVAC</option>
                </select>
                <label htmlFor="status-filter" className="sr-only">Filter by Status</label>
                <select id="status-filter" className="bg-gray-900 border border-gray-600 text-white rounded-lg px-4 py-2 outline-none">
                    <option>All Status</option>
                    <option>Published</option>
                    <option>Draft</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-750 text-gray-400 text-sm uppercase tracking-wider">
                        <tr>
                            <th className="p-4">Title</th>
                            <th className="p-4">Category</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Date</th>
                            <th className="p-4 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {BLOG_POSTS.map((post) => (
                            <tr key={post.id} className="hover:bg-gray-750 transition-colors">
                                <td className="p-4">
                                    <div className="font-medium text-white">{post.title}</div>
                                    <div className="text-xs text-gray-500">/{post.slug}</div>
                                </td>
                                <td className="p-4 text-gray-300">{post.category}</td>
                                <td className="p-4">
                                    <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-bold">
                                        Published
                                    </span>
                                </td>
                                <td className="p-4 text-gray-400 text-sm">{new Date(post.publishDate).toLocaleDateString()}</td>
                                <td className="p-4 text-right">
                                    <div className="flex justify-end gap-2">
                                        <Link to={`/admin/posts/${post.id}`} className="p-2 text-blue-400 hover:bg-blue-500/10 rounded-lg transition-colors" aria-label={`Edit ${post.title}`}>
                                            <Edit size={18} aria-hidden="true" />
                                        </Link>
                                        <button className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" aria-label={`Delete ${post.title}`}>
                                            <Trash2 size={18} aria-hidden="true" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  );
};