"use client";


import { SIDENAV_ITEMS, SidenavItem } from "@/lib/menus";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const SideNav = () => {
    return (
       <div className="md:w-72 h-screen flex-1 fixed border-r border-dashed border-zinc-200 hidden md:flex">
        <div className="flex flex-col space-y-6 w-full">
            <Link
                href={"/"}
                className="flex flex-row items-center justify-center md:justify-start md:px-8 h-12 w-full pt-6"
            >
                <Image src={"/logonav.png"} width={170} height={170} alt="logonav"></Image>
            </Link>
            <div className="flex flex-col space-y-2 md:px-6">
                {SIDENAV_ITEMS.map((item, idx) => {
                    return <MenuItem key={idx} item={item} />
                })}
            </div>
        </div>
       </div>
    )
}

export default SideNav; 



const MenuItem = ({item}: {item: SidenavItem}) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen)
    }

    return (
        <div className="">
          {item.submenu ? (
            <>
              <button
                onClick={toggleSubMenu}
                className={`flex flex-row items-center p-2 rounded-lg w-full justify-between hover:bg-secondary ${
                  pathname.includes(item.path) ? 'bg-secondary' : ''
                }`}
              >
                <div className="flex flex-row space-x-4 items-center">
                  {item.icon}
                  <span className="font-semibold flex">{item.title}</span>
                </div>
    
                <div className={`transform transition-transform duration-500 ${subMenuOpen ? 'rotate-180' : ''} flex`}>
                  <Icon icon="lucide:chevron-down" width="24" height="24" />
                </div>
              </button>
    
              {subMenuOpen && (
                <div className="my-2 ml-12 flex flex-col space-y-4">
                  {item.subMenuItems?.map((subItem, idx) => {
                    return (
                      <Link
                        key={idx}
                        href={subItem.path}
                        className={`hover:bg-secondary rounded-lg ${
                          subItem.path === pathname ? 'font-bold' : ''
                        }`}
                      >
                        <span>{subItem.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <Link
              href={item.path}
              className={`flex flex-row space-x-4 items-center p-2 rounded-lg hover:bg-secondary ${
                item.path === pathname ? 'bg-secondary' : ''
              }`}
            >
              {item.icon}
              <span className="font-semibold flex">{item.title}</span>
            </Link>
          )}
        </div>
      );
}