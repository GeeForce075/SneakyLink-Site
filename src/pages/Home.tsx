import React from 'react';
import { CreatorCard } from '../components/creator/CreatorCard';

const FEATURED_CREATORS = [
  {
    name: 'Sarah Wilson',
    username: 'sarahcreates',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    coverImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    price: 9.99,
    description: 'Digital artist sharing my creative journey and exclusive artwork',
  },
  {
    name: 'Mike Chen',
    username: 'mikefit',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6',
    coverImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    price: 14.99,
    description: 'Fitness coach sharing workout tips and nutrition advice',
  },
  {
    name: 'Emma Davis',
    username: 'emmacooks',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    coverImage: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352',
    price: 12.99,
    description: 'Culinary adventures and exclusive recipes every week',
  },
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Featured Creators</h1>
          <p className="mt-2 text-gray-600">
            Discover and support amazing content creators
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_CREATORS.map((creator) => (
            <CreatorCard key={creator.username} {...creator} />
          ))}
        </div>
      </main>
    </div>
  );
}