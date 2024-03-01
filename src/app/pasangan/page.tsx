"use client";
import { CoupleCard } from "@/components/Cards/CoupleCard";
import { useState } from "react";

export default function Pasangan() {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);

  const handleNext = () => {
    if (currentContentIndex < coupleData.length - 1) {
      setCurrentContentIndex(currentContentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentContentIndex > 0) {
      setCurrentContentIndex(currentContentIndex - 1);
    }
  };

  const currentContent = coupleData[currentContentIndex];
  const isAtBeginning = currentContentIndex === 0;
  const isAtEnd = currentContentIndex === coupleData.length - 1;
  console.log(currentContent);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-tr from-white to-pink-50 xl:p-0 p-4">
      {/* Card */}
      <CoupleCard
        title={currentContent.title}
        desc={currentContent.desc}
        gifName={currentContent.gifName}
      />
      {/* Navigasi */}
      <div className="flex flex-row max-w-sm w-full mt-8">
        <div className="flex flex-row w-full justify-between">
          {!isAtBeginning && (
            <button
              type="button"
              onClick={handleBack}
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5">
              Balik
            </button>
          )}
          {!isAtEnd && (
            <button
              type="button"
              onClick={handleNext}
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Lanjutin
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

const coupleData = [
  {
    title: "Hai Ellsaa Sayang!",
    desc: "Kita kayak lagi naik roller coaster hidup ya? Kadang di puncak, kadang di bawah. Tapi chill aja...",
    gifName: "hi",
  },
  {
    title: "",
    desc: "Setiap bunga butuh waktu buat mekar. Kaya hidup kita gitu. Ingat, semua bakal oke...",
    gifName: "lope",
  },
  {
    title: "",
    desc: "Senja itu selalu janji buat hari baru. Kita juga gitu lho...",
    gifName: "manja",
  },
  {
    title: "",
    desc: "Senyuman dan ketawa tuh obat mujarab. Kita pasti bisa lewatin semua. Jadi, meski ada hal sulit...",
    gifName: "nangis-dikit",
  },
  {
    title: "",
    desc: "Hati kita kayak peta, ada jalan berliku. Tapi setiap jalan punya ceritanya. Jadi sekarang...",
    gifName: "panci",
  },
  {
    title: "",
    desc: "Tangan kita saling genggam erat ya, kita saling dukung. Kita pasti bisa lewatin ini semua. Jadi, nggak usah khawatir ya...",
    gifName: "pukpuk",
  },
  {
    title: "",
    desc: "Setelah hujan pasti ada pelangi. Hidup kita juga gitu, setelah susah pasti seneng. Jadi, yakin aja...",
    gifName: "pis",
  },
  {
    title: "",
    desc: "Setiap langkah bentuk perjalanan kita. Meski jalanannya belok-belok, pasti sampai di tempat asik. Jadi, yakin deh...",
    gifName: "cekolah",
  },
  {
    title: "",
    desc: "Dalam setiap langkah, kita saling ada. Meski susah, kita lewatin bareng. Yakinlah...",
    gifName: "pukpuk",
  },
  {
    title: "Pasangan Keren",
    desc: "Kita pasangan keren. Bareng-bareng, kita bisa lewatin semua. Jadi, nggak perlu cemas, aku yakin...",
    gifName: "kiss-bye",
  },
];
