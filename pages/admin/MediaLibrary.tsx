import React from 'react';
import { Upload, Copy, Trash2 } from 'lucide-react';

export const MediaLibrary = () => {
  // Mock images based on picsum URLs used in app
  const images = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/media-${i}/300/200`,
    name: `image-${i + 1}.jpg`
  }));

  return (
    <div>
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Media Library</h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-colors">
                <Upload size={20} aria-hidden="true" />
                Upload New
            </button>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
            <div className="mb-6">
                <label htmlFor="media-search" className="sr-only">Search media</label>
                <input 
                    id="media-search"
                    type="text" 
                    placeholder="Search media files..." 
                    className="w-full md:w-1/3 bg-gray-900 border border-gray-600 text-white rounded-lg px-4 py-2 focus:border-orange-500 outline-none"
                />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {images.map((img) => (
                    <div key={img.id} className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-700" role="group" aria-label={`Image ${img.name}`}>
                        <img src={img.url} alt="" className="w-full h-32 object-cover" />
                        <div className="p-2">
                            <p className="text-xs text-gray-400 truncate">{img.name}</p>
                        </div>
                        
                        {/* Overlay Actions */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button className="p-2 bg-blue-500 rounded text-white hover:bg-blue-600" title="Copy URL" aria-label={`Copy URL for ${img.name}`}>
                                <Copy size={16} aria-hidden="true" />
                            </button>
                            <button className="p-2 bg-red-500 rounded text-white hover:bg-red-600" title="Delete" aria-label={`Delete ${img.name}`}>
                                <Trash2 size={16} aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};