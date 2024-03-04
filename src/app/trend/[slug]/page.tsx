"use client";
import { CoupleCard } from "@/components/Cards/CoupleCard";
import { useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
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

  // Membuat salinan array data
  const modifiedCoupleData = [...coupleData];

  // Mengubah desc pada objek pertama
  modifiedCoupleData[0].desc = `Hai ${params.slug}, luangin waktu bentar buat baca ini 👉👈🥺`;

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
    title: "",
    desc: "",
    gifName: "hi",
  },
  {
    title: "",
    desc: "Pulpennya kok ngga nyala, cintanya abis ya?",
    gifName: "bom",
  },
  {
    title: "",
    desc: "Kertas buat print itu apa namanya, hts bukan?",
    gifName: "manja",
  },
  {
    title: "",
    desc: "Berakit-rakit ke hulu, berenang-berenang kemana ya, kesepian bukan?",
    gifName: "nangis-dikit",
  },
  {
    title: "",
    desc: "Pengobatan tusuk jarum itu namanya apa? aku mundur?",
    gifName: "panci",
  },
  {
    title: "",
    desc: "Setelah hari selasa hari apa sih, ragu ya?",
    gifName: "kerja-banget",
  },
  {
    title: "",
    desc: "Lagu cicak-cicak itu gimana? diam-diam ada yang baru?",
    gifName: "kipasan",
  },
  {
    title: "",
    desc: "Lupa ngasih bumbu jadinya apa sih? ngga ada rasa ya?",
    gifName: "manja",
  },
  {
    title: "",
    desc: "Steak yang mateng itu disebut apa? we're done ya?",
    gifName: "nangis",
  },
  {
    title: "",
    desc: "Kok warna temboknya udah luntur, ngga dichat ya?",
    gifName: "patah-hati",
  },
  {
    title: "",
    desc: "Air laut rasanya apa? asing ya?",
    gifName: "utukutuk",
  },
  {
    title: "",
    desc: "Huruf R di mobil artinya apa? mundur ngga si?",
    gifName: "nangis-dikit",
  },
  {
    title: "",
    desc: "Setelah empat belas itu angka berapa sih? lama bales bukan?",
    gifName: "manja",
  },
  {
    title: "",
    desc: "Kalo mau beli air isi ulang harus bawa apa? gamon ya?",
    gifName: "panci",
  },
  {
    title: "",
    desc: "Kalo mau colokin kabel dimana ya? lost contact bukan?",
    gifName: "kipasan",
  },
  {
    title: "",
    desc: "Flatshoes itu yang gimana sih? ngga ada hak ya?",
    gifName: "nangis",
  },
  {
    title: "",
    desc: "Makan dikondangan yang bisa ambil sendiri itu apa namanya? penasaran ya?",
    gifName: "kerja-banget",
  },
  {
    title: "",
    desc: "Perawatan wajah itu nama lainnya apa sih? silent treatment bukan?",
    gifName: "manja",
  },
];
