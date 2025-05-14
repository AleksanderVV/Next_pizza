import { cn } from "@/lib/utils";
import React from "react";


interface Props {
    className?: string;
    imageUrl: string;
    size: number;
}

export const ProductImage: React.FC<Props> = ({ className, imageUrl, size }) => {
    return (
        <div className={cn(className, 'relative flex justify-center items-center flex-1 w-full')}>
            <img 
                src={imageUrl} 
                alt="Logo"
                className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
                    'w-[300px] h-[300px]': size === 20,
                    'w-[400px] h-[400px]': size === 30,
                    'w-[500px] h-[500px]': size === 40
                })}
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-2 border-dashed border-gray-200" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[370px] h-[370px] rounded-full border-2 border-dashed border-gray-100" />
        </div>
    )
};