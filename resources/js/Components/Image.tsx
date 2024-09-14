import React from "react";

interface ImageProps extends React.HTMLAttributes<HTMLDivElement> {
    src: string;
    alt?: string;
    height?: number;
    width?: number;
    className?: string;
}
const Image = ({ src, alt, height, width, className }: ImageProps) => {
    return (
        <img src={src} alt={alt} height={height} width={width} className={className} />
    );
}
export default Image;
