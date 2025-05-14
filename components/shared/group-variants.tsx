'use client';
import { cn } from "@/lib/utils";
import React from "react";

type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
}

interface Props {
    className?: string;
    items: readonly Variant[];
    onClick?: (value: Variant['value']) => void;
    selectedValue?: Variant['value'];
}

export const GroupVariants: React.FC<Props> = ({ className, items, selectedValue, onClick }) => {
    return (
        <div className={cn(className, 'flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none mt-3')}>
            {
                items.map((items) => (
                    <button 
                        key={items.name}
                        onClick={() => onClick?.(items.value)}
                        className={cn(
                            'flex items-center justify-center cursor-pointer h-[30px] px-5 flex-1 rounded-3xl transition-all duration-400 text-sm',
                            {
                                'bg-white shadow' : items.value === selectedValue,
                                'text-gray-500 opacity-50 pointer-events-none' : items.disabled,
                            },
                        )}
                    >
                        {items.name}
                    </button>
                )                        
            )}
        </div>
    )
};