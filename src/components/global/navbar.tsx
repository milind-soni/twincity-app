import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuIcon } from 'lucide-react'
// import { UserButton, currentUser } from '@clerk/nextjs'

type Props = {}

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-6 px-6 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <h1 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          TwinCity
        </h1>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-6 list-none">
          <li>
            <Link href="#" className="text-lg font-semibold hover:text-purple-400 transition-colors">Maps</Link>
          </li>
          <li>
            <Link href="#" className="text-lg font-semibold hover:text-purple-400 transition-colors">Pricing</Link>
          </li>
          <li>
            <Link href="#" className="text-lg font-semibold hover:text-purple-400 transition-colors">Clients</Link>
          </li>
          <li>
            <Link href="#" className="text-lg font-semibold hover:text-purple-400 transition-colors">Case Studies</Link>
          </li>
          <li>
            <Link href="#" className="text-lg font-semibold hover:text-purple-400 transition-colors">Enterprise</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-base font-medium text-white backdrop-blur-3xl">
            Try It Out
          </span>
        </Link>
        <MenuIcon className="md:hidden w-8 h-8 text-white hover:text-purple-400 transition-colors" />
      </aside>
    </header>
  )
}

export default Navbar