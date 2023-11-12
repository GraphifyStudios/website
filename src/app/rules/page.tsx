/**
 * DO NOT MODIFY THIS FILE UNLESS ABSOLUTELY NECESSARY.
 * Everything in this file is generated automatically. If you want to update the contents of this page, update it in content/rules.tsx.
 */

import { Metadata } from "next";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { rules } from "../../../content/rules";

export const metadata: Metadata = {
  title: "Stream Rules",
};

export default function Rules() {
  return (
    <>
      <section className="flex flex-col gap-2">
        <h1 className="text-center text-5xl font-bold">Stream Rules</h1>
        <p className="text-center [text-wrap:balance]">
          All the rules listed here apply to all livestreams on{" "}
          <Link
            href="https://youtube.com/@GraphifyStatistics"
            className="text-primary hover:opacity-50 transition-all"
          >
            Graphify
          </Link>
          ,{" "}
          <Link
            href="https://youtube.com/@GraphifyPlus"
            className="text-primary hover:opacity-50 transition-all"
          >
            Graphify+
          </Link>
          , and any other channel affiliated with Graphify Studios (such as{" "}
          <Link
            href="https://youtube.com/@ToastedDev"
            className="text-primary hover:opacity-50 transition-all"
          >
            ToastedToast
          </Link>
          ).
        </p>
      </section>
      <section className="max-w-4xl mt-3 mx-auto">
        <ol className="list-none flex flex-col gap-3">
          {rules.map((rule, index) => (
            <li key={rule.title}>
              <div className="text-2xl flex items-start gap-1 [text-wrap:balance]">
                <p>{index + 1}.</p>
                <b>{rule.title}</b>
              </div>
              <p className="[text-wrap:balance]">{rule.description}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-3 max-w-[1200px] mx-auto">
        <p className="text-center">Created by</p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="https://youtube.com/@ToastedDev"
            className="flex flex-col items-center p-4 hover:bg-primary/5 transition-all rounded-lg"
          >
            <Avatar>
              <AvatarImage alt="ToastedToast" src="/team/toastedtoast.jpg" />
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">ToastedToast</h3>
          </Link>
          <Link
            href="https://youtube.com/@Matheusify"
            className="flex flex-col items-center p-4 hover:bg-primary/5 transition-all rounded-lg"
          >
            <Avatar>
              <AvatarImage alt="Matheusify" src="/matheusify.jpg" />
              <AvatarFallback>Matheusify</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">Matheusify</h3>
          </Link>
        </div>
      </section>
    </>
  );
}
