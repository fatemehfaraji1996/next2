import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className=" text-cyan-500 m-10 bg-slate-300">
    <ul>
    <li>
      <Link href="/home">Home</Link>
    </li>
    <li>
      <Link href="/about">About Us</Link>
    </li>
    <li>
      <Link href="/store">Store</Link>
    </li>
    <li>
      <Link href="/support">Support</Link>
    </li>
  </ul>

    </div>

    
  )
}
