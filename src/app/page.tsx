"use client";
import { Card } from "@/components/Cards/DefaultCard";
import MultiSelect from "@/components/Multiselect";
import { PlusCircleIcon, PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleMultiSelectChange = (newSelectedOptions: string[]) => {
    setSelectedOptions(newSelectedOptions);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-pink-50">
      <div className="w-full h-[40vh] bg-gradient-to-bl from-pink-400 via-pink-300 to-pink-200">
        <div className=" max-w-2xl mx-auto flex justify-center items-center h-full">
          <h1 className="text-xl text-neutral-100">
            Template ini khusus buat kamu yang pengen ngungkapin sesuatu, tapi
            bingung harus lewat apa.
          </h1>
        </div>
      </div>
      <div className="xl:p-0 p-4">
        <div className="flex flex-row space-x-4">
          <div className=" bg-white py-2 px-3 flex flex-row items-center rounded-lg shadow-lg shadow-pink-100 my-4">
            <span className=" text-base font-semibold">Filter :</span>
            <MultiSelect
              options={options}
              selectedOptions={selectedOptions}
              onChange={handleMultiSelectChange}
            />
            <div className="mt-4">
              <p>Selected Options: {selectedOptions.join(", ")}</p>
            </div>
          </div>
          <div className=" bg-pink-500 py-2 flex flex-row px-3 rounded-lg shadow-lg shadow-pink-100 my-4">
            <PlusCircleIcon className="h6 w-6 text-white" />
            <span className="text-white font-medium">Tambah Konten</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-32 mt-12">
          {templateData.map((content: any, i: number) => (
            <Card
              key={i}
              title={content.title}
              desc={content.desc}
              gifName={content.gifName}
              link={content.link}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

const templateData = [
  {
    title: "Kita pasangan kereen",
    desc: "Kita kayak lagi naik roller coaster hidup ya? Kadang di puncak, kadang di bawah.",
    gifName: "panci",
    link: "/pasangan/buat-siapa",
  },
  {
    title: "Yang lagi trend ditiktok",
    desc: "Yang lagi trend ditiktok katanya",
    gifName: "manja",
    link: "/trend/buat-siapa",
  },
];

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  // Add more options as needed
];
