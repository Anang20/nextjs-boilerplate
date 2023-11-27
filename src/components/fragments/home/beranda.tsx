import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

const Beranda = () => {
  const { theme } = useTheme();
  return (
    <section className="h-screen w-full grid grid-cols-12 gap-14 pt-36">
      <div className="mr-0 col-span-7">
        <h1 className="text-7xl leading-[1.10] font-bold">
          Lacak Resimu Dengan Mudah Dan Cepat
        </h1>
        <p className="mt-5 font-normal tracking-[0.08em] text-xl">
          lacak resimu secara gratis dan dengan berbagai macam pilihan ekspedisi
          pengiriman. Sehingga membuat mu terasa mudah dan nyaman{" "}
        </p>
        <Button className="mt-5 py-6 px-12 text-lg font-semibold">Mulai</Button>
      </div>
      <div className="-mt-5 col-span-5">
        {theme == "light" ? (
          <Image
            src={"/images/dark-ilustration.svg"}
            alt="ilustrasi"
            width="500"
            height="500"
          />
        ) : (
          <Image
            src={"/images/light-ilustration.svg"}
            alt="ilustrasi"
            width="500"
            height="500"
          />
        )}
      </div>
    </section>
  );
};

export default Beranda;
