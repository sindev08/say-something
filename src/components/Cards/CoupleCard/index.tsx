import { AvatarGif } from "@/components/Avatars";
import React from "react";

interface IContentProps {
  title?: string;
  desc: string;
  gifName: string;
}

export const CoupleCard = ({ title, desc, gifName }: IContentProps) => {
  return (
    <div className="px-6 py-8 bg-white shadow-lg rounded-lg border border-gray-100 flex flex-col xl:w-96 max-w-sm min-h-[446px]">
      <div className="bg-pink-100 w-full h-60 rounded-md flex justify-center items-center">
        <AvatarGif name={gifName} alt={gifName} w={200} h={200} />
      </div>
      {title && <h2 className=" text-xl font-bold mt-6">{title}</h2>}
      {/* <p className="text-sm text-black mt-4">{desc}</p> */}

      <blockquote className="text-base italic font-medium text-left text-gray-900 mt-4">
        <p>&quot;{desc}&quot;</p>
      </blockquote>
    </div>
  );
};
