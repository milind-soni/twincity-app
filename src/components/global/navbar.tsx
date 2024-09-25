import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'

type Props = {}

const Navbar = async (props: Props) => {
  const calendlyUrl = "https://cal.com/milind-soni-002qed/30min";

  return (
    <header className="fixed right-0 left-0 top-0 py-6 px-6 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <h1 className="text-3xl md:text-5xl font-bold">
          TwinCity
        </h1>
      </aside>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 list-none">
          <li>
            <Link href="https://docs.fused.io/blog/rainfall-similarity-global/" className="text-lg font-semibold hover:text-purple-400 transition-colors">Case Studies</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
        >
          Schedule a Call
        </a>
        <MenuIcon className="md:hidden w-8 h-8 text-white hover:text-purple-400 transition-colors" />
      </aside>
    </header>
  )
}

export default Navbar