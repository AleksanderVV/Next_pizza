'use client'

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
    className?: string;
}

const cats = [
    { id: 1, name: 'Pizza' },
    { id: 2, name: 'Combo' },
    { id: 3, name: 'Appetizers' },
    { id: 4, name: 'Burgers' },
    { id: 5, name: 'Coffee' },
    { id: 6, name: 'Drinks' },
    { id: 7, name: 'Desserts' },
];

const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

export const Categories: React.FC<Props> = ({ className }) => {

    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div className={cn('inline-flex gap-1 bg-orange-50 p-1 rounded-2xl', className)}>
           {cats.map(({ name, id }, index) => (
                <a className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    categoryActiveId === index + 1 && 'bg-white shadow-md shadow-gray-300 text-primary')} 
                    key={id}
                    href={`/#${name}`} 
                    onClick={(e) => smoothScroll(e, name)}
                >
                    {name}
                </a>
            ))}
        </div>
    )
}