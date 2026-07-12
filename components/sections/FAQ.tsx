import { faq } from "@/data/faq";
import FAQItem from "@/components/ui/FAQItem";

import {
  Accordion,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-28"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <h2 className="text-5xl font-black text-white">
            Najczęściej zadawane pytania
          </h2>

          <p className="mt-5 text-lg text-zinc-400">
            Odpowiedzi na pytania, które najczęściej zadają nasi klienci.
          </p>

        </div>

        <Accordion
          type="single"
          collapsible
          className="w-full"
        >

          {faq.map((item, index) => (
            <FAQItem
              key={index}
              value={`item-${index}`}
              question={item.question}
              answer={item.answer}
            />
          ))}

        </Accordion>

      </div>
    </section>
  );
}