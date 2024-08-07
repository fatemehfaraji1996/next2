"use client";
import React from "react";
import { notFound } from "next/navigation";
export default function page({ params }) {
  const data = [
    {
      id: 1,
      name: "book",
      price: 10.99,
      imgUrl:
        "https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg",
    },
    {
      id: 2,
      name: "computer",
      price: 1199,
      imgUrl: "https://m.media-amazon.com/images/I/41RbCADklWL.jpg",
    },
    {
      id: 3,
      name: "bnana",
      price: 1.05,
      imgUrl:
        "https://blog-images-1.pharmeasy.in/blog/production/wp-content/uploads/2021/01/30152155/shutterstock_518328943-1.jpg",
    },

    {
      id: 4,
      name: "car",
      price: 10.99,
      imgUrl:
        "https://hips.hearstapps.com/hmg-prod/images/kathleen-brooks-1967-annie-beetle-9207-1544465705.jpg?crop=1.00xw:0.839xh;0,0.161xh&resize=980:*",
    },
  ];
const cheooseitem = data.find((x)=>x.id==params.id)
if(!cheooseitem){
  notFound()
}
  return (
    <>
      {data.map((item, id) => {
    return item.id== params.id ? (
      <div key={id} className="bg-red-100">
        <img
          key={id}
          style={{ width: "150px", margin: "30px" }}
          src={item.imgUrl}
          alt=""
        />
        <p key={id}>{item.name}</p>
        <p key={id}>{item.id}</p>
      </div>
    ) : null
   
      }
      )}
    </>
  );
}
