import { Brand } from "@/types"
import type { ExtraFee } from "@/types/index"
export type FAQ = {
  id: string;
  question: string;
  isVisible?: (brand: Brand) => boolean;
  getAnswer: (brand: Brand) => React.ReactNode;
}

type FAQResponses = {
  shipments: Record<string, string>
  payments: Record<string, string>
}

const faqResponses: FAQResponses ={
  shipments: {
    blue_express: "Llevar el producto a un punto Blue Express.",
    pickup: "Solicitar una recolección del producto en tu domicilio por $2.990 (Sólo en Santiago).",
    pickup_no_cost: "Se agendará la recolección del producto en tu domicilio."
    
  },
  payments: {
    coupon_100: "En forma de giftcard",
    transfer_100: "En efectivo a través de una transferencia bancaria",
    transfer_80: "El 80% por transferencia bancaria"
  },
}

const getPaymentList = (paymentOptions: string[]): string => {
  return (
    paymentOptions.map(payment=>faqResponses.payments[payment].toLowerCase()).join(' o ')
  )
}

const getFeeResponse = (fee:ExtraFee) => {
  const { reason, amount } = fee
  let base = reason
  if (amount) base += ` Este cargo es de $${amount.toLocaleString()}.` 
  return base
}


export const faqs: FAQ[] = [
  {id: "how_to_publish",
    question: "¿Cómo puedo publicar un producto para la venta?",
    getAnswer: () => (
      <div>
        ¡Publicar tu producto es muy fácil! Simplemente haz clic en <strong>&quot;Vender&quot;</strong>, crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada.
      </div>
    )
  },
  {id: "how_to_ship",
    question: "¿Cómo envío mi artículo después de que alguien lo compra?",
    getAnswer: ({ settings }) => {
      let base = 'Después de que alguien compra tu producto, recibirás un correo electrónico que incluye las instrucciones para completar tu venta'
      if (settings?.logistics.modes) {
        if (settings.logistics.modes.length>1){
          base += `, que se puede hacer de ${settings.logistics.modes.length} maneras: `
          const shipments = (
            <ul className="pl-4 list-disc">
              {settings.logistics.modes.map(
                (s) => <li key={s}>{faqResponses.shipments[s]}</li>
              )}
            </ul>
          )
          return (
            <div>
              <div>{base}</div>
              {shipments}
            </div>
          )
        } else {
          const shipment = settings.logistics.modes[0]
          base += ` y ${faqResponses.shipments[shipment].toLowerCase()}`
        }
      }
      return base
    }
  },
  {id: "payment_policy",
    question: "¿Cómo y cuándo recibo el pago?",
    getAnswer: ({ settings }) => {
      let base = "Una vez tu artículo se entrega y es recibido conforme (manualmente por el comprador o automáticamente después de 72 horas desde que se entregó el producto), recibirás un correo electrónico"
      if (settings?.payment.methods){
        if (settings.payment.methods.length > 1){
          base += ` preguntándote cómo te gustaría recibir tu pago: ${getPaymentList(settings.payment.methods)}`  
        } else {
          const payment = settings.payment.methods[0]
          base += ` para que ingreses tus datos bancarios y puedas recibir el pago ${faqResponses.payments[payment].toLowerCase()}`
        }
      }
      base += '.'
      return <div>{base}</div>
    }
  },
  {id: "extra_fees",
    question: "¿Hay cobros adicionales por vender mi producto por acá?",
    getAnswer: ({ settings }) => {
      const extraFees = settings?.policy?.extraFees;
      if (!extraFees || extraFees.length == 0) {
        return <div>No existen cobros adicionales por vender tu producto aquí.</div>
      }
      return (
        <div>{extraFees.map(fee => getFeeResponse(fee)).join(' - ') }</div>
      )
    }
  },
  {id: "coupon_policy",
    question: "Política de uso de cupones",
    isVisible: ({ settings }) => settings?.features.supportsCoupons === true,
    getAnswer: (brand) => {
      const url = <a target="_blank" href={brand.url}>{brand.url}</a>
      return (
        <div>
          Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones: a. Se pueden utilizar únicamente para compras en el sitio web {url}. b. Tiene un tiempo máximo para ser utilizado de 6 meses. c. Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP.
        </div>
      )
    }
  },
]