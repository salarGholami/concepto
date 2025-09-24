import Image, { ImageProps } from "next/image";

type ImageWrapperProps = Omit<ImageProps, "alt"> & {
  alt?: string;
};

export default function ImageWrapper({
  alt = "",
  className,
  ...props
}: ImageWrapperProps) {
  return (
    <Image
      {...props}
      alt={alt}
      className={`object-contain ${className || ""}`}
    />
  );
}
