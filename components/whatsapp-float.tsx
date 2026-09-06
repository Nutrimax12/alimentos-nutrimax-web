import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/573006160613?text=Hola%2C%20Alimentos%20Nutrimax.%20Quiero%20informaci%C3%B3n%20sobre%20sus%20productos.";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hablar con Alimentos Nutrimax por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#20a957] px-4 py-3.5 font-black text-white shadow-[0_12px_35px_rgba(24,126,67,0.38)] transition hover:-translate-y-1 hover:bg-[#178b46] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-green-300"
    >
      <MessageCircle size={25} aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
