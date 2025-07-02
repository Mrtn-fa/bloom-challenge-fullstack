import Accordion from "./Accordion"
import { faqs } from "@/data/faq"
import type { Brand } from "@/types"

type Props = {brand: Brand}

export const Faq = ({brand}: Props) => {
  return (
    <div className="w-full lg:w-3/5">
      <h1 className="text-4xl mb-8">{brand.name}</h1>
        <h1 className="w-full text-center text-3xl mb-8"><strong>Preguntas frecuentes</strong></h1>
        <h1 className="mb-2"><strong>Preguntas frecuentes al vender</strong></h1>
      {faqs
      .filter(faq => faq.isVisible?.(brand) ?? true)
      .map(
        (faq) => (
          <Accordion key={faq.id} title={faq.question}>
            {faq.getAnswer(brand)}
          </Accordion>
        )
      )}
    </div>
  )
}