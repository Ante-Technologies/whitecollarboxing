import Image from "next/image";
import { Sidebar } from "@/components/sidebar";

export function PageWrap({
  title,
  children,
  image,
  imageAlt = "",
}: {
  title?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div className="bg-background pt-[84px]">
      <div className="mx-auto grid max-w-[1170px] gap-10 px-4 py-12 lg:grid-cols-3 lg:px-6 lg:py-16">
        <div className="lg:col-span-2">
          {title && (
            <h1 className="mb-6 font-heading text-3xl font-bold leading-tight text-heading lg:text-[34px]">
              {title}
            </h1>
          )}
          {image && (
            <Image
              src={image}
              alt={imageAlt}
              width={271}
              height={300}
              unoptimized
              className="float-left mb-4 mr-6 h-auto w-[240px] max-w-[45%]"
            />
          )}
          {children}
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
