import Image from "next/image";

type Variant = "p-track" | "p-garage" | "p-portrait" | "p-podium" | "p-crowd" | "p-slalom" | "p-kart";

const SRC: Record<Variant, string> = {
  "p-track": "/photos/aerial.jpg",
  "p-garage": "/photos/pit.jpg",
  "p-portrait": "/photos/portrait.jpg",
  "p-podium": "/photos/podium.jpg",
  "p-crowd": "/photos/paddock.jpg",
  "p-slalom": "/photos/slalom.jpg",
  "p-kart": "/photos/kart.jpg",
};

type PhotoProps = {
  variant: Variant;
  label: string;
  className?: string;
};

export default function Photo({ variant, label, className }: PhotoProps) {
  return (
    <div className={`photo ${variant}${className ? ` ${className}` : ""}`}>
      <Image src={SRC[variant]} alt={label} fill sizes="(max-width: 880px) 100vw, 40vw" style={{ objectFit: "cover" }} />
    </div>
  );
}
