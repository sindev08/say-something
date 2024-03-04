"use client";
import React, { useState } from "react";

export default function BuatSiapa() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleSaveName = () => {
    setNickname(`${process.env.NEXT_PUBLIC_BASE_URL}trend/${name}`);
    setCopySuccess(false); // Reset status copy setiap kali nama disimpan
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(nickname)
      .then(() => {
        setCopySuccess(true); // Set status copy menjadi true setelah berhasil menyalin
      })
      .catch((err) => {
        console.error("Gagal menyalin link:", err);
      });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-white to-pink-50 xl:p-0 p-4">
      <div className="flex flex-col relative">
        <div className="px-6 py-8 relative bg-white shadow-lg rounded-lg border border-gray-100 flex flex-col max-w-sm">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Masukkan Nama:
          </label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="shadow appearance-none border rounded min-w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <button
            type="button"
            onClick={handleSaveName}
            className="mt-2 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Simpan Nama
          </button>
        </div>
        <div
          className={`${
            nickname.length > 0 ? "-mt-2" : "-mt-36"
          } transition-all duration-700 ease-in-out px-6 py-8 bg-pink-200 shadow-lg rounded-lg border border-pink-500 flex flex-col max-w-sm`}>
          <div className=" bg-white py-2 px-1.5 rounded">
            <span className="italic">{nickname}</span>
          </div>
          <button
            type="button"
            onClick={handleCopyLink}
            className={`mt-2  ${copySuccess ? "bg-green-500" : "bg-pink-500"} ${
              copySuccess ? "hover:bg-green-700" : "hover:bg-pink-700"
            }  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}>
            {copySuccess ? "Berhasil Disalin!" : "Salin link"}
          </button>
        </div>
      </div>
    </div>
  );
}
