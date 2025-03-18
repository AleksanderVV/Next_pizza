import React from 'react';
import Link from 'next/link';
import { Title } from './title';
import { Button } from '../ui';

interface Props {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ name, price, count, imageUrl, className }) => {
  return (
    <div className='className'>
        <Link href="/products/1">
            <div className='flex justify-center p-6 bg-secondary rounded-lg h-[260px]'>
                <img className='w-[215] h-[215]' src={imageUrl} alt={name} />
            </div>
            <Title size="sm" text={name} className="font-bold mt-3 mb-1" />
            <p className='text-sm text-gray-400'>
                Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic
            </p>
            <div className='flex justify-between items-center mt-4'>
                <span className="text-[20px]">{price}$</span>
                <Button>
                    <Plus className="mr-1" />
                    Add
                </Button>
            </div>
        </Link>
    </div>
);
};