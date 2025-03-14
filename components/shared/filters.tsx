import React from "react";
import { cn } from "@/lib/utils";
import { Title, FilterCheckbox } from "./index";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Filters" size="sm" className="mb-5 font-bold" />
            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Collect" value="1" />
                <FilterCheckbox text="New products" value="1" />
            </div>
        </div>
    )
}