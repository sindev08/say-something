"use client";
import { CoupleCard } from "@/components/Cards/CoupleCard";
import { PlayIcon } from "@heroicons/react/20/solid";
import { PauseIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";

export default function Page({ params }: { params: { slug: string } }) {
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>(null);

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

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playAudio = async () => {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Autoplay was prevented:", error);
    }
  };

  useEffect(() => {
    playAudio();
  }, []);

  // Membuat salinan array data pasangan
  const modifiedCoupleData = [...coupleData];

  // Mengubah title pada objek pertama
  modifiedCoupleData[0].title = `Hai ${params.slug} Sayang❤️`;

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
          <button
            type="button"
            onClick={handleBack}
            className={`${
              isAtBeginning && " opacity-0 "
            }text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-1.5 lg:px-6 lg:py-2.5`}>
            Balik
          </button>

          <button
            onClick={togglePlayPause}
            className=" shadow-2xl shadow-pink-600/60  p-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-full">
            {isPlaying ? (
              <PauseIcon className="text-pink-500 size-6" />
            ) : (
              <PlayIcon className="text-pink-500 size-6" />
            )}
          </button>
          {/* {!isAtEnd && ( */}
          <button
            type="button"
            onClick={handleNext}
            className={`${
              isAtEnd && " opacity-0 "
            } text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-4 py-2 lg:px-6 lg:py-2.5 text-center`}>
            Lanjutin
          </button>
          {/* )} */}
        </div>
      </div>
      <audio ref={audioRef} src="/sesaatkauhadir.mp4" />
      {/* src={`/avatars/${name}.gif`} */}
    </main>
  );
}

const coupleData = [
  {
    title: "Hai Ellsaa Sayang!",
    desc: "Selamat ulang tahun yaa, ya meski udah ngucapin tapi aku anggap ini lebih spesial. Karena ini buatnya ngga gampang, semoga kamuu sukaaa 🥰. Baca pelan-pelan, dan wajib pake headset",
    gifName: "hi",
  },
  {
    title: "",
    desc: "Sejujurnya dari awal kita ketemu, itu aku bingung banget. Emang ada ya orang yg mau effort datengin cowoknya dan itu lumayan jauh dari rumah.",
    gifName: "lope",
  },
  {
    title: "",
    desc: "Sejujurnya lagi aku happy banget bisa deket sama kamu, bisa ngobrol serius, ngobrolin random, gibah dan lain-lain yang bikin hubungan kita makin seruuu!",
    gifName: "manja",
  },
  {
    title: "",
    desc: "Selama kita jalani hubungan ini, aku ngerasa bersyukur banget ada orang yang mau effort dan ngasih perhatian",
    gifName: "nangis-dikit",
  },
  {
    title: "",
    desc: "Iya emang kita baru jalan setahun kurang, tapi aku ngerasa itu cepet bangeett. Kenapa? karena hari-hariku kerasa cepet aja kalo ngobrol sama kamu.",
    gifName: "panci",
  },
  {
    title: "",
    desc: "Maaf kalo selama ini bawelin kamu, tapi itu bentuk perhatian aku yg mau bawa hungungan ini bisa ketahap selanjutnya",
    gifName: "pukpuk",
  },
  {
    title: "",
    desc: "Makasih cantiikk, udah mau jalani hubungan yang hebat ini",
    gifName: "pis",
  },
  {
    title: "",
    desc: "Makasih juga udah mau effort, karena jarang banget aku nemuin orang yang kaya kamu",
    gifName: "cekolah",
  },
  {
    title: "",
    desc: "Kita ngelangkah pelan-pelan ya, belajar bareng, kasih tau kalo semisal aku salah, aku juga ngasih tau kalo semisal kamu salah.",
    gifName: "pukpuk",
  },
  {
    title: "Pasangan Hebat",
    desc: "Kita tetep jadi pasangan hebat ya😇",
    gifName: "kiss-bye",
  },
];
