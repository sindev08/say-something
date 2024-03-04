import Image from "next/image";

interface IAvatarProps {
  name: string | number;
  w: number;
  h: number;
  alt?: string;
}

export function AvatarGif({ name, alt = "omongin aja", w, h }: IAvatarProps) {
  return (
    <Image
      src={`/avatars/${name}.gif`}
      alt={alt}
      width={w ?? "100%"}
      height={h ?? "100%"}
    />
  );
}
