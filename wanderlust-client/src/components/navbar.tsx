"use client";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Destinations", href: "/destinations" },
  { label: "Add destination", href: "/add-destination" },
  { label: "My Bookings", href: "/my-bookings" },
];



export function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  // console.log(user);

  const handleSignOut = () => {
    authClient.signOut();
  };

  return (
    <header className="relative z-20 flex h-16 items-center justify-between bg-white px-6 lg:px-10">
      <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={cn(
              "transition-colors hover:text-[#00a1c1]",
              link.active &&
                "text-[#00a1c1] underline underline-offset-[6px] [&:hover]:text-[#00a1c1]",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/"
        aria-label="Wanderlast home"
        className="absolute left-1/2 -translate-x-1/2"
      >
        <Image
          src="/images/Wanderlast.png"
          alt="Wanderlast"
          width={162}
          height={24}
          priority
        />
      </Link>

      {user ? (
        <Popover>
          <PopoverTrigger
            render={
              <Avatar>
                <AvatarImage src={user?.image as string} />
                <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
              </Avatar>
            }   
            
          >
             <Link
              href="/profile"
              className="transition-colors hover:text-[#00a1c1]"
            >
              Profile
            </Link>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverHeader>
              <PopoverTitle>{user?.name}</PopoverTitle>
              <PopoverDescription>
                <p>{user?.email}</p>
                <Button onClick={handleSignOut} variant={"destructive"}>
                  Sign Out
                </Button>
              </PopoverDescription>
            </PopoverHeader>
          </PopoverContent>
        </Popover>
      ) : (
        <>
            <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href="/login"
              className="transition-colors hover:text-[#00a1c1]"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="transition-colors hover:text-[#00a1c1]"
            >
              Sign Up
            </Link>
      </nav>
        </>
      )}

    </header>
  );
}
