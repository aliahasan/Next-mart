"use client";
import Logo from "@/assets/svgs/Logo";
import { protectedRoutes } from "@/constants";
import { useUser } from "@/context/UserContext";
import { logout } from "@/services/authService";
import { Heart, LogOut, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Navbar() {
  const { user, setIsLoading } = useUser();
  const pathName = usePathname();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathName.match(route))) {
      router.push("/");
    }
  };

  return (
    <header className="border-b w-full sticky z-50 backdrop-blur-md top-0">
      <div className="container flex justify-between items-center mx-auto h-16 px-3">
        <h1 className="text-2xl font-black flex items-center">
          <Logo />
          Next Mart
        </h1>
        <div className="max-w-md flex-grow">
          <input
            type="text"
            placeholder="Search for products"
            className="w-full max-w-6xl border border-gray-300 rounded-full py-2 px-5"
          />
        </div>
        <nav className="flex gap-2">
          <Button variant="outline" className="rounded-full p-0 size-10">
            <Heart />
          </Button>
          <Link href="/cart">
            <Button variant="outline" className="rounded-full p-0 size-10">
              <ShoppingBag />
            </Button>
          </Link>

          {user ? (
            <>
              <Link href="/create-shop">
                <Button className="rounded-full">Create Shop</Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>User</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <Link href={`${user?.role}/dashboard`}>
                    <DropdownMenuItem>Dashboard</DropdownMenuItem>
                  </Link>
                  <DropdownMenuItem>My shop</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className="bg-red-500 cursor-pointer"
                    onClick={handleLogout}
                  >
                    <LogOut /> <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link href="/login">
              <Button variant="outline" className="rounded-full">
                Login
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
