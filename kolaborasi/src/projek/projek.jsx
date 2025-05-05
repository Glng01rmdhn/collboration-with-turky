import React from "react";
import fotogalang from "../assets/galang.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center justify-start p-8">
        <h1 className="text-4xl font-blod text-gray-800 mb-6"> ini punya galang</h1>
        <img src={fotogalang} alt="foto galang" alt="foto besar" className=""/>
    </div>
  );
}
