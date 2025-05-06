import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-bold text-gray-800">
      <div className="w-full max-w-xl p-4">
        {/* Teks pojok kiri atas */}
        <h1 className="text-2xl mb-4">page</h1>

        {/* Kotak besar */}
        <div className="border-4 border-black rounded-xl p-8 text-center">
          <h2 className="text-2xl mb-6">ini project react-nama antum</h2>

          {/* Tombol foto */}
          <div className="inline-block border-4 border-black rounded-xl px-8 py-3">
            <p className="text-xl">foto</p>
          </div>
        </div>
      </div>
    </div>
  );
}


