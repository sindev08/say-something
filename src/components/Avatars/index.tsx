import Image from "next/image";

interface IAvatarProps {
  name: string | number;
  alt: string;
  w: number;
  h: number;
}

export function AvatarGif({ name, alt, w, h }: IAvatarProps) {
  return (
    <Image
      src={`/avatars/${name}.gif`}
      alt={alt}
      width={w ?? "100%"}
      height={h ?? "100%"}
    />
  );
}
