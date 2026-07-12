"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItemProps = {
  value: string;
  question: string;
  answer: string;
};

export default function FAQItem({
  value,
  question,
  answer,
}: FAQItemProps) {
  return (
    <AccordionItem
      value={value}
      className="mb-4 rounded-2xl border border-white/10 bg-zinc-900/60 px-6 transition-colors duration-300 hover:border-cyan-500/30"
    >
      <AccordionTrigger className="py-6 text-left text-lg font-semibold text-white hover:no-underline">
        {question}
      </AccordionTrigger>

      <AccordionContent className="pb-6 leading-7 text-zinc-400">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}