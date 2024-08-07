"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Nav() {
  const path = usePathname();

  const paths = [
    { title: "home", rout: "/home" },
    { title: "about", rout: "/about" },
    { title: "store", rout: "/store" },
    { title: "support", rout: "/support" },
  ];

  return (
    <div className=" text-cyan-500 m-10 bg-slate-300">
      <ul className='flex flex-row gap-7 p-4'>
        {paths.map((item, i) => {
          const activeStyle = { color: path === item.rout ? "darkgray" : "#fff" };
          return (
            <li>
              <Link
                style={{ ...activeStyle, textDecoration: "none" }}
                href={item.rout}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
