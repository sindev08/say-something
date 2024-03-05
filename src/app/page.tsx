import { Card } from "@/components/Cards/DefaultCard";

export default function Home() {
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
      <div className="grid grid-cols-4 gap-4 xl:p-0 mb-32 mt-12 p-4">
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
    title: "Yang lagi tend ditiktok",
    desc: "Yang lagi tend ditiktok katanya",
    gifName: "manja",
    link: "/trend/buat-siapa",
  },
];
