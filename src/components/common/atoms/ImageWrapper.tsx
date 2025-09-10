// components/common/atoms/ImageWrapper.tsx
import Image, { ImageProps } from "next/image";

export default function ImageWrapper(props: ImageProps) {
  return (
    <Image {...props} className={`object-contain ${props.className || ""}`} />
  );
}
