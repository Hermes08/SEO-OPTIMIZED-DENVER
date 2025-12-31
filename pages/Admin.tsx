import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Image as ImageIcon, Users, BarChart } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color }: any) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${color} bg-opacity-20`}>
        <Icon size={24} className={color.replace('bg-', 'text-')} />
      </div>
    </div>
  </div>
);

export const Admin = () => {
  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar Mock */}
      <aside className="w-64 bg-gray-800 border-r border-gray-700 hidden lg:block p-6">
        <h2 className="text-xl font-bold text-white mb-8">Admin Panel</h2>
        <nav className="space-y-2">
            <div className="px-4 py-2 bg-gray-700 text-white rounded-lg font-medium cursor-pointer">Dashboard</div>
            <div className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">Blog Posts</div>
            <div className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">Services</div>
            <div className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">Media Library</div>
            <div className="px-4 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">Settings</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
            <Link to="/" className="text-orange-500 hover:text-white text-sm">Back to Website &rarr;</Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Posts" value="12" icon={FileText} color="bg-blue-500" />
            <StatCard title="Media Items" value="145" icon={ImageIcon} color="bg-purple-500" />
            <StatCard title="Total Views" value="45.2k" icon={Users} color="bg-green-500" />
            <StatCard title="Leads" value="28" icon={BarChart} color="bg-orange-500" />
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-6 border-b border-gray-700">
                <h3 className="font-bold text-white">Recent Activity</h3>
            </div>
            <div className="p-6">
                <p className="text-gray-400 text-center py-8">Chart visualization placeholder</p>
            </div>
        </div>
      </main>
    </div>
  );
};