import React from 'react';
import Link from 'next/link';
import { FiSettings, FiCoffee } from 'react-icons/fi';
import { RxDashboard } from 'react-icons/rx';
import { FaShoppingCart, FaUser, FaBoxOpen, FaThList, FaClipboardList, FaBoxes } from 'react-icons/fa';
import { MdQrCode } from 'react-icons/md';
import { useRouter } from 'next/router';
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet';
import { Button } from "../components/ui/Button/";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Menu } from "lucide-react";

const Sidebar = ({ children }) => {
  
  //if (!user) return null;
  
  const router = useRouter();
  
  const links = [
    { href: '/', label: 'Home', icon: <FiSettings size={20} /> },
    { href: '/dashboard', label: 'Relatórios', icon: <RxDashboard size={20} /> },
    { href: '/pedidos', label: 'Pedidos', icon: <FaClipboardList size={20} /> },
    { href: '/user', label: 'Usuários', icon: <FaUser size={20} /> },
    { href: '/product/list', label: 'Produtos', icon: <FaBoxOpen size={20} /> },
    { href: '/category', label: 'Categorias', icon: <FaThList size={20} /> },
    { href: '/compra', label: 'Compra', icon: <FaShoppingCart size={20} /> },
    { href: '/stock', label: 'Stock', icon: <FaBoxes size={20} /> },
    { href: '/Qr', label: 'QR', icon: <MdQrCode size={20} /> },
  ];

  return (
    <div className="flex">
      {/* Sidebar Desktop */}
      <aside className="fixed w-30 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between hidden sm:flex">
        <div className="flex flex-col items-center">
          {links.map(({ href, label, icon }, index) => (
            <Link key={index} href={href}>
              <div
                style={{ width: '140px' }}
                className={`flex justify-center items-center rounded-lg my-4 p-2 inline-block ${
                  router.pathname === href ? 'bg-purple-800 text-white' : 'bg-gray-100 hover:bg-gray-200 cursor-pointer'
                }`}
              >
                {React.cloneElement(icon, {
                  className: `mr-1 ${router.pathname === href ? 'text-white' : 'text-purple-800'}`,
                })}
                <span className={`${router.pathname === href ? 'text-white' : 'text-purple-800'}`}>{label}</span>
              </div>
            </Link>
          ))}
        </div>
      </aside>

      {/* Sidebar Mobile */}
      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14 border border-gray-500 p-4">
        <header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <Menu className="w-6 h-6 text-purple-800" />
                <span className="sr-only">Abrir / Fechar menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="sm:max-w-x">
              <nav className="grid gap-6 text-lg font-medium">
                {links.map(({ href, label, icon }, index) => (
                  <Link key={index} href={href} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
                    {React.cloneElement(icon, { className: 'h-5 w-5' })}
                    {label}
                  </Link>
                ))}
                {/* Profile and Logout Dropdown */}
               <Separator className="my-4 " />
                <DropdownMenu>
                  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

              </nav>
            </SheetContent>
             
             
          </Sheet>
        </header>
      </div>

      {/* Main Content */}
      <main className="ml-20 pl-16 w-full">{children}</main>
    </div>
  );
};

export default Sidebar;
