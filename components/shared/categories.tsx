'use client'

import React from "react";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";

interface Props {
    items: Category[];
    className?: string;
}


export const Categories: React.FC<Props> = ({ className, items }) => {

    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div className={cn('inline-flex gap-1 bg-orange-50 p-1 rounded-2xl', className)}>
           {items.map(({ name, id }, index) => (
                <a className={cn(
                    'flex items-center font-bold h-11 rounded-2xl px-5',
                    categoryActiveId === id && 'bg-white shadow-md shadow-gray-300 text-primary')} 
                    key={index}
                    href={`#${name}`}
                >
                    {name}
                </a>
            ))}
        </div>
    )
}