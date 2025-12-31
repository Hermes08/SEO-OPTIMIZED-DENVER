
import React from 'react';
import { FileText, Image as ImageIcon, Users, BarChart, TrendingUp } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, color, trend }: any) => (
  <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-bold text-white">{value}</h3>
      </div>
      <div className={`p-3 rounded-lg ${color} bg-opacity-20`}>
        <Icon size={24} className={color.replace('bg-', 'text-')} />
      </div>
    </div>
    <div className="flex items-center gap-2 text-sm">
        <span className="text-green-500 flex items-center font-medium">
            <TrendingUp size={14} className="mr-1" /> {trend}
        </span>
        <span className="text-gray-500">vs last month</span>
    </div>
  </div>
);

export const Dashboard = () => {
  return (
    <div>
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
            <p className="text-gray-400 mt-2">Welcome back! Here is what's happening with your site today.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Total Posts" value="12" icon={FileText} color="bg-blue-500" trend="+2" />
            <StatCard title="Media Items" value="145" icon={ImageIcon} color="bg-purple-500" trend="+15" />
            <StatCard title="Total Views" value="45.2k" icon={Users} color="bg-green-500" trend="+12.5%" />
            <StatCard title="Leads" value="28" icon={BarChart} color="bg-orange-500" trend="+5.2%" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                    <h3 className="font-bold text-white text-lg">Recent Activity</h3>
                    <button className="text-sm text-orange-500 hover:text-orange-400">View All</button>
                </div>
                <div className="p-6">
                    <ul className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <li key={i} className="flex items-center gap-4 pb-4 border-b border-gray-700 last:border-0 last:pb-0">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <div className="flex-1">
                                    <p className="text-white text-sm">New blog post "Summer Maintenance Tips" published</p>
                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="p-6 border-b border-gray-700">
                    <h3 className="font-bold text-white text-lg">System Status</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-300">Sitemap Generated</span>
                            <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-bold">Success</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-300">Database Connection</span>
                            <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs rounded-full font-bold">Healthy</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-300">Image Optimization</span>
                            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 text-xs rounded-full font-bold">Processing</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
