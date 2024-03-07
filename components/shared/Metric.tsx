import Image from "next/image";

// util
import { numberFormatter } from "@/utility/numberFormatter";

type MetricPropsType = {
  imgUrl: string;
  alt: string;
  value: number;
  title: string;
  textStyles: string;
};

export default function Metric({
  imgUrl,
  alt,
  value,
  title,
  textStyles,
}: MetricPropsType) {
  return (
    <section className="flex-center flex-wrap gap-1">
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className="object-contain"
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {numberFormatter(value)}{" "}
        <span className="small-regular line-clamp-1 ">{title}</span>
      </p>
    </section>
  );
}
