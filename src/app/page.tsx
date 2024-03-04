import { Card } from "@/components/Cards/DefaultCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-tr from-neutral-50 to-blue-50 xl:p-0 p-4">
      <div className=" max-w-3xl mx-auto h-[30vh] flex justify-center items-center">
        <h1 className="text-xl text-neutral-900">
          Template ini khusus buat kamu yang pengen ngungkapin sesuatu, tapi
          bingung harus lewat apa.
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
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
    gifName: "hi",
    link: "/pasangan/buat-siapa",
  },
  {
    title: "Kita pasangan keren",
    desc: "Kita kayak lagi naik roller coaster hidup ya? Kadang di puncak, kadang di bawah.",
    gifName: "hi",
    link: "/pasangan/buat-siapa",
  },
  {
    title: "Kita pasangan kereen",
    desc: "Kita kayak lagi naik roller coaster hidup ya? Kadang di puncak, kadang di bawah.",
    gifName: "hi",
    link: "/pasangan/buat-siapa",
  },
  {
    title: "Kita pasangan kereen",
    desc: "Kita kayak lagi naik roller coaster hidup ya? Kadang di puncak, kadang di bawah.",
    gifName: "hi",
    link: "/pasangan/buat-siapa",
  },
  {
    title: "Kita pasangan kereen",
    desc: "Kita kayak lagi naik roller coaster hidup ya? Kadang di puncak, kadang di bawah.",
    gifName: "hi",
    link: "/pasangan/buat-siapa",
  },
  {
    title: "Kita pasangan kereen",
    desc: "Kita kayak lagi naik roller coaster hidup ya? Kadang di puncak, kadang di bawah.",
    gifName: "hi",
    link: "/pasangan/buat-siapa",
  },
];
