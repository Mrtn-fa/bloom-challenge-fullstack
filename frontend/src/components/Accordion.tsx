import { useState } from "react"
import { ChevronDown } from "lucide-react"

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({
  title,
  children,
  defaultOpen=false
}:AccordionProps){
  const [isVisible, setIsVisible] = useState(defaultOpen)
  const toggleIsVisible = () => {
    setIsVisible(!isVisible)
  }
  return (
    <div className="py-2 border-b">
      <button onClick={toggleIsVisible} className="flex w-full items-center justify-between py-2 text-left hover: cursor-pointer">
        <span className="info">{title}</span>
        <span className={`mx-4 shrink-0 fill-current transition-transform duration-200 ease-out ${isVisible ? 'rotate-180': ''} `}><ChevronDown/></span>
      </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isVisible ? 'grid-rows-[1fr] mb-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="detail overflow-hidden detail pl-4">
          {children}
        </div>
      </div>
    </div>
  )
}