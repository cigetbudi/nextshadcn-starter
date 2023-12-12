"use client"; 
import React from "react";
import useScroll from "@/hooks/use-scroll"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { ModeToggle } from "./toggle-theme";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"


const Header = () => {

    const scrolled = useScroll(5);
    const selectedLayout = useSelectedLayoutSegment();

    return (
        <div
        className={cn(
            `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-zinc-200`,
            {
                "border-b border-gray-200 backgrop-blur-lg": scrolled,
                "border-b border-gray-200":selectedLayout,
            }
        )}
        >
            <   div className="flex h-[60px] items-center justify-between px-4">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex flex-row space-x-3 items-center justify-center md:hidden">
                        <Image src={"/logonav.png"} width={170} height={170} alt="logonav"></Image>
                    </Link>
                    
                
                </div>

                <div className="hidden md:block">
                    <div className="h-8 w-8 rounded-full bg-zink-200 flex items-center justify-center mr-4">
                        <ModeToggle />    
                        
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                            <Avatar className="m-2">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar> 
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>Halo, Admin</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>                  
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header