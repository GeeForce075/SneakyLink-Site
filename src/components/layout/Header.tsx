import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, Menu, User } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-600">
              SneakyLink
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search creators..."
                className="w-96 rounded-full border border-gray-300 bg-gray-50 px-4 py-2 pl-10 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="p-2">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="primary">Create Post</Button>
            <Button variant="ghost" className="p-2">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}