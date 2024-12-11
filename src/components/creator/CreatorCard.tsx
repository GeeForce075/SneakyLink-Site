import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { formatPrice } from '../../lib/utils';

interface CreatorCardProps {
  name: string;
  username: string;
  avatar: string;
  coverImage: string;
  price: number;
  description: string;
}

export function CreatorCard({
  name,
  username,
  avatar,
  coverImage,
  price,
  description,
}: CreatorCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1">
      <div className="relative h-48">
        <img
          src={coverImage}
          alt={`${name}'s cover`}
          className="h-full w-full object-cover"
        />
        <img
          src={avatar}
          alt={name}
          className="absolute -bottom-6 left-4 h-20 w-20 rounded-full border-4 border-white object-cover"
        />
      </div>
      <div className="p-4 pt-8">
        <div className="mb-2 flex items-center justify-between">
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm text-gray-600">@{username}</p>
          </div>
          <Button variant="primary" size="sm">
            Subscribe {formatPrice(price)}/mo
          </Button>
        </div>
        <p className="mb-4 text-gray-600">{description}</p>
        <div className="flex items-center gap-4 text-gray-500">
          <button className="flex items-center gap-1 hover:text-red-500">
            <Heart className="h-5 w-5" />
            <span>2.1k</span>
          </button>
          <button className="flex items-center gap-1 hover:text-purple-500">
            <MessageCircle className="h-5 w-5" />
            <span>142</span>
          </button>
        </div>
      </div>
    </div>
  );
}