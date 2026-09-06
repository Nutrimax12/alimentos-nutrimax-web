import type { Metadata } from "next";
import Image from "next/image";
import { Check, CreditCard, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Recetario: 10 desayunos con potencial proteico | Nutrimax",
  description: "Recetario digital Nutrimax con 10 desayunos variados, fáciles y prácticos. PDF en español por $10.000 COP.",
};

const paymentLink = "https://checkout.nequi.wompi.co/l/Z801LL";
const whatsappText = encodeURIComponent("Hola, Alimentos Nutrimax. Ya realicé el pago de $10.000 por el recetario digital de 10 desayunos con potencial proteico. Adjunto mi comprobante para recibir el PDF.");
const recipes = [
  "Tazón crocante de granola, yogur griego y frutas",
  "Avena cremosa con banano y mantequilla de maní",
  "Huevos con espinaca, queso y arepa",
  "Parfait de frutos rojos, yogur y granola",
  "Panqueques de avena, banano y queso cottage",
  "Sándwich integral de huevo, aguacate y queso",
  "Batido de cacao, banano, yogur y maní",
  "Omelette de champiñones, tomate y queso",
  "Pudín de chía con yogur y granola Nutrimax",
  "Bowl tropical de cuajada, mango, coco y granola",
];

export default function DigitalRecipeBookPage() {
  return <main className="bg-[#fffaf6] text-[#241b18]">
    <SiteHeader />
    <section className="overflow-hidden bg-[linear-gradient(120deg,#ed0025_0%,#ff1532_52%,#ff7900_100%)] text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[.82fr_1.18fr] lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-sm rounded-[2rem] bg-white p-3 shadow-2xl lg:mx-0"><Image unoptimized src="/digital-products/recetario-10-desayunos-cover.jpg" width={765} height={990} alt="Portada del recetario Nutrimax de 10 desayunos" className="w-full rounded-[1.4rem]" priority /></div>
        <div><span className="inline-flex rounded-full border border-white/35 bg-white/15 px-4 py-2 text-sm font-black">RECETARIO DIGITAL · PDF EN ESPAÑOL</span><h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">10 desayunos variados con potencial proteico</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-red-50">Recetas fáciles, prácticas y explicadas paso a paso para comenzar el día con variedad y buen sabor.</p><div className="mt-7 flex flex-wrap items-end gap-5"><div><p className="text-sm font-bold text-red-100">Precio de lanzamiento</p><p className="text-5xl font-black">$10.000 <span className="text-xl">COP</span></p></div><span className="mb-1 rounded-full bg-white px-4 py-2 text-sm font-black text-[#d50020]">10 recetas · 13 páginas</span></div><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href={paymentLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#241b18] px-7 py-4 text-lg font-black text-white shadow-xl"><CreditCard size={21}/> Comprar por $10.000</a><a href={`https://wa.me/573006160613?text=${whatsappText}`} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-4 text-lg font-black text-white"><MessageCircle size={21}/> Enviar comprobante</a></div><p className="mt-4 max-w-2xl text-sm leading-6 text-red-50">En Wompi ingresa $10.000. Después envía el comprobante por WhatsApp y recibirás el PDF.</p></div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_.9fr]"><div><p className="text-sm font-black uppercase tracking-[.18em] text-[#e76712]">Lo que recibirás</p><h2 className="mt-3 text-4xl font-black">Diez ideas para no desayunar siempre lo mismo</h2><div className="mt-7 grid gap-3 sm:grid-cols-2">{recipes.map((recipe,index)=><div key={recipe} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm"><span className="grid h-8 min-w-8 place-items-center rounded-full bg-[#ef1723] text-sm font-black text-white">{index+1}</span><p className="font-bold leading-6">{recipe}</p></div>)}</div></div><aside className="h-fit rounded-[2rem] bg-white p-7 shadow-xl sm:p-9"><h2 className="text-2xl font-black">Compra sencilla y segura</h2><div className="mt-6 grid gap-5"><div className="flex gap-4"><CreditCard className="mt-1 shrink-0 text-[#ef1723]"/><div><p className="font-black">1. Realiza el pago</p><p className="mt-1 leading-6 text-[#675752]">Paga $10.000 mediante Nequi, PSE o tarjeta en Wompi.</p></div></div><div className="flex gap-4"><MessageCircle className="mt-1 shrink-0 text-[#20a957]"/><div><p className="font-black">2. Envía el comprobante</p><p className="mt-1 leading-6 text-[#675752]">Compártelo con Nutrimax por WhatsApp.</p></div></div><div className="flex gap-4"><FileText className="mt-1 shrink-0 text-[#e76712]"/><div><p className="font-black">3. Recibe tu recetario</p><p className="mt-1 leading-6 text-[#675752]">Te enviaremos el PDF digital para que lo consultes cuando quieras.</p></div></div></div><div className="mt-7 flex gap-3 rounded-2xl bg-orange-50 p-4 text-sm leading-6 text-[#743509]"><ShieldCheck className="mt-1 shrink-0"/><p>El pago es procesado por Wompi. El archivo completo se entrega únicamente después de confirmar la compra.</p></div></aside></div></section>
    <section className="bg-white py-16"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="text-sm font-black uppercase tracking-[.18em] text-[#ef1723]">Vista previa</p><h2 className="mt-3 text-4xl font-black">Mira cómo están explicadas las recetas</h2></div><div className="mx-auto mt-10 grid max-w-4xl gap-7 sm:grid-cols-2"><Image unoptimized src="/digital-products/recetario-muestra-1.png" width={774} height={1001} alt="Página de muestra del recetario Nutrimax" className="w-full rounded-2xl border border-red-100 shadow-xl"/><Image unoptimized src="/digital-products/recetario-muestra-2.png" width={774} height={1001} alt="Segunda página de muestra del recetario Nutrimax" className="w-full rounded-2xl border border-red-100 shadow-xl"/></div></div></section>
    <section className="bg-[#2c1813] py-16 text-white"><div className="mx-auto max-w-3xl px-5 text-center"><Check className="mx-auto text-orange-400" size={38}/><h2 className="mt-4 text-4xl font-black">Empieza a variar tus desayunos</h2><p className="mt-4 text-lg text-orange-100">Compra el recetario digital Nutrimax por solo $10.000 COP.</p><a href={paymentLink} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#ff1738] px-8 py-4 text-lg font-black shadow-xl"><CreditCard size={21}/> Comprar ahora</a></div></section>
    <SiteFooter />
  </main>;
}
