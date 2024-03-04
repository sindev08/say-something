import { AvatarGif } from "@/components/Avatars";
import Link from "next/link";
import React from "react";

interface ICardProps {
  title: string;
  desc: string;
  gifName: string;
  link: string;
}

export const Card = ({ title, desc, gifName, link }: ICardProps) => {
  return (
    <div className=" max-w-xs bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="bg-pink-100 w-full h-52 rounded-md flex justify-center items-center">
        <AvatarGif name={gifName} alt={gifName} w={200} h={200} />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        <Link
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
          Buat sekarang
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
