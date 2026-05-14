'use client'
import { useState } from "react";
import { Link, Button } from "@heroui/react";



export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItem = [
    {
      id: 1,
      name: "All Products",
      path: "/products"
    },
    {
      id: 2,
      name: "Add Product",
      path: "/products/add"
    },
    {
      id: 3,
      name: "About",
      path: "/about"
    },
  ]

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div><h2><Link href="/">PH E-Commerce</Link></h2></div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
        {
          menuItem.map(item => <li key={item.id}>
            <Link href={item.path}>{item.name}</Link>
          </li>)
        }
        </ul>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
             {
          menuItem.map(item => <li key={item.id}>
            <Link href={item.path}>{item.name}</Link>
          </li>)
        }
          </ul>
        </div>
      )}
    </nav>
  );
}