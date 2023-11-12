import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import Banner from "../../public/stream.jpg";
import { Stats, StatsFallback } from "./stats";

export const runtime = "edge";
export const revalidate = 60;

export default async function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="text-center flex flex-col items-center justify-center gap-1">
          <h1 className="text-5xl font-bold [text-wrap:balance]">
            Revolutionizing the future of{" "}
            <span className="text-primary underline italic">statistics</span>.
          </h1>
          <p className="[text-wrap:balance]">
            We are a team dedicated to tracking and visualizing all types of
            statistics.
          </p>
        </div>
        <Link
          href="https://youtube.com/@graphifystatistics/live"
          target="_blank"
          title="Check out this stream!"
          className="pt-3 relative"
        >
          <Image
            src={Banner}
            alt="Banner"
            width="1200"
            height="200"
            priority
            placeholder="blur"
            className="rounded-lg shadow-[0_25px_100px_-12px_rgb(0_0_0_/_0.25)]"
          />
          <span className="absolute top-0 bottom-1/2 w-[95%] h-40 bg-primary/80 rounded-lg blur-[120px] -z-10" />
          <div className="hidden md:block bottom-0 top-1/2 bg-gradient-to-t from-background left-0 right-0 absolute z-10" />
        </Link>
      </section>
      <section className="max-w-[1200px] mx-auto">
        <Suspense fallback={<StatsFallback />}>
          <Stats />
        </Suspense>
      </section>
      <section className="mt-8 max-w-[1200px] mx-auto">
        <h1 className="text-2xl text-center font-semibold">Meet our team</h1>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <Link
            href="https://youtube.com/@ToastedDev"
            target="_blank"
            className="flex flex-col items-center p-2 hover:bg-primary/5 transition-all rounded-lg"
          >
            <Avatar>
              <AvatarImage alt="ToastedToast" src="/team/toastedtoast.jpg" />
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">ToastedToast</h3>
            <p className="text-base text-gray-400">Founder & CEO</p>
          </Link>
          <Link
            href="https://youtube.com/@RedFireNiceBoi"
            target="_blank"
            className="flex flex-col items-center p-2 hover:bg-primary/5 transition-all rounded-lg"
          >
            <Avatar>
              <AvatarImage
                alt="RedFireNiceBoi"
                src="/team/redfireniceboi.jpg"
              />
              <AvatarFallback>RFNB</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">RedFireNiceBoi</h3>
            <p className="text-base text-gray-400">Stream Host</p>
          </Link>
          <Link
            href="https://youtube.com/@JipStats"
            target="_blank"
            className="flex flex-col items-center p-2 hover:bg-primary/5 transition-all rounded-lg"
          >
            <Avatar>
              <AvatarImage alt="JipStats" src="/team/jipstats.jpg" />
              <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">JipStats</h3>
            <p className="text-base text-gray-400">Stream Host & Partner</p>
          </Link>
          <Link
            href="https://youtube.com/@GNZGUY"
            target="_blank"
            className="flex flex-col items-center p-2 hover:bg-primary/5 transition-all rounded-lg"
          >
            <Avatar>
              <AvatarImage alt="GNZGUY" src="/team/gnzguy.jpg" />
              <AvatarFallback>GNZ</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">GNZGUY</h3>
            <p className="text-base text-gray-400">Thumbnail Artist</p>
          </Link>
        </div>
      </section>
    </>
  );
}
