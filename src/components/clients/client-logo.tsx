import Image from "next/image";

interface ClientItemProps {
  src: string;
  alt: string;
}

export const ClientLogo = ({ src, alt }: ClientItemProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={120}
        height={60}
        className="transition-all hover:scale-110 hover:text-primary"
      />
    </div>
  );
};
