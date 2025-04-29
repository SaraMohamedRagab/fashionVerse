import React from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '@/types';

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  return (
    <Link 
      to={`/collections/${collection.slug}`}
      className="group block relative rounded-md overflow-hidden aspect-[3/2]"
    >
      <img
        src={collection.image}
        alt={collection.name}
        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-6">
        <h3 className="text-xl md:text-2xl font-medium text-white">{collection.name}</h3>
        <p className="text-sm text-gray-200 mt-1">{collection.description}</p>
      </div>
    </Link>
  );
};

export default CollectionCard;
