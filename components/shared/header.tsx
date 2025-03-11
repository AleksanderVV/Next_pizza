import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import React from "react";
import Image from "next/image";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn("border border-b", className)}>
            <Container className="flex items-center justify-between py-8">
                <div className="flex items-center gap-4">
                    <Image src="/logo.png" alt="Next Pizza" width={35} height={35} />
                    <div>
                    <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                    <p className="text-sm text-gray-400 leading-3">it couldn't be tastier</p>
                    </div>
                </div>
                
            </Container>
        </header>
    );
};