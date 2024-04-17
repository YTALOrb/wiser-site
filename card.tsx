import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

export default function Card({
  title,
  description,
  large,
}: {
  title: string;
  description: string;
  large?: boolean;
}) {
  return (
    <div
      className={`relative col-span-1 h-96 overflow-hidden rounded-xl border-gray-200 bg-gradient-to-br from-white to-stone-500 shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-60 items-center justify-center"></div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
          {title}
        </h2>
        <div className="prose-sm mt-3 leading-normal text-gray-500 [text-wrap:balance] md:prose">
          <p>➕</p>
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
