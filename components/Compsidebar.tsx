import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from "./ui/Button/";
import Link from 'next/link'

import { Gift, Home, LogOut, Package, PanelBottom, Receipt, Settings, ShoppingBag, User, Warehouse } from 'lucide-react'
import { TooltipContent, TooltipProvider } from '@/components/ui/tooltip'
import { Tooltip, TooltipTrigger } from '@radix-ui/react-tooltip'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

 
export default const  CompSidebar = ()=> {
  //const user = await currentUser();
  //if (!user) return null;
  return (
    <div className=" flex w-full flex-col bg-muted/40" >
      
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 border-r bg-indigo-950
      sm:flex'>
        <nav className='flex flex-col items-center gap-4 px-2 py-5 '>
          <TooltipProvider>
            <Link
              href="/"
              className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary 
              text-primary-foreground rounded-full '
              
            >
              <Package className='h-4 w-4' />
              <span className='sr-only' >Dasbord ServeFixe</span>  
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground '
                 >
                  <Home className='h-5 w-5 text-slate-50' /> 
                  <span className='sr-only' >Início</span>  
                  
                </Link> 

              </TooltipTrigger>
              <TooltipContent side='right'>Início</TooltipContent>
            </Tooltip> 
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/stock"
                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground '
                 >
                  <Warehouse className='h-5 w-5 transition-all translate-y-[4px] text-slate-50' /> 
                  <span className='sr-only' >Stock</span>  
                  
                </Link> 

              </TooltipTrigger>
              <TooltipContent side='right'>Stock</TooltipContent>
            </Tooltip> 
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/compras"
                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground '
                 >
                   <ShoppingBag className='h-5 w-5 transition-all translate-y-[4px] text-slate-50 ' /> 
                  <span className='sr-only' >Compras</span>  
                  
                </Link> 

              </TooltipTrigger>
              <TooltipContent side='right'>Compras
                
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground '
                 >
                   <Receipt className='h-5 w-5 transition-all translate-y-[4px] text-slate-50' /> 
                  <span className='sr-only' >Vendas</span>  
                  
                </Link> 

              </TooltipTrigger>
              <TooltipContent side='right'>
                Vendas
                
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="produto"
                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg
                  text-muted-foreground transition-colors hover:text-foreground '
                 >
                   <Gift className='h-5 w-5 transition-all translate-y-[4px] text-slate-50 ' /> 
                  <span className='sr-only' >Produtos</span>  
                  
                </Link> 

              </TooltipTrigger>
              <TooltipContent side='right'>Produtos
                
              </TooltipContent>
            </Tooltip>
            
          </TooltipProvider>
        </nav>
      </aside> 

      <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header 
          className='sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static
        sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className='sm:hidden'>
                <PanelBottom className='w-5 h-5' />
                <span className='sr-only'>  Abrir / Fechar menu</span>
            </Button>
          </SheetTrigger>
            
          <SheetContent side="left" className='sm:max-w-x'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link href="/"
                  className="flex h-10 w-10 bg-primary rounded-full text-lg
                items-center justify-center text-primary-foreground md:text-base
                gap-2 "
                prefetch={false}
                >
                <Package className='h-5 w-5 transition-all' />  
                <span className='sr-only'>Logo do projecto</span>
              </Link>
              <Link
                  href="#"
                  className="flex intems-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground "
                  prefetch={false}
                >
                
                  <Home className='h-5 w-5 transition-all translate-y-[4px]'  />
                  Início
              </Link>  
              <Link
                  href="/stock"
                  className="flex intems-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground "
                  prefetch={false}
                >
                
                  <Warehouse className='h-5 w-5 transition-all translate-y-[4px] ' />
                  Stock
              </Link> 
              <Link
                  href="/compras"
                  className="flex intems-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground "
                  prefetch={false}
                >
                
                  <ShoppingBag className='h-5 w-5 transition-all translate-y-[4px] ' />
                  Compras
              </Link> 
               <Link
                  href="/vendas"
                  className="flex intems-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground "
                  prefetch={false}
                >
                
                  <Receipt className='h-5 w-5 transition-all translate-y-[4px] ' />
                  Vendas
                </Link>  
               
                <Link
                  href="/produto"
                  className="flex intems-center gap-4 px-2.5 text-muted-foreground
                  hover:text-foreground "
                  prefetch={false}
                >
                
                  <Gift className='h-5 w-5 transition-all translate-y-[4px] ' />
                  Produtos
                </Link> 
            </nav>
          </SheetContent>
        </Sheet>
        <h2>Menu</h2>
      </header>
      </div>
    </div>
  )
}