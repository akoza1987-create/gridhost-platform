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
      className="rounded-2xl border border-white/10 bg-zinc-900/60 px-6 mb-4"
    >
      <AccordionTrigger className="text-left text-lg font-semibold text-white hover:no-underline">
        {question}
      </AccordionTrigger>

      <AccordionContent className="pb-6 text-zinc-400 leading-7">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
}