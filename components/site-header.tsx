"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/quienes-somos", label: "QUIÉNES SOMOS" },
  { href: "/productos", label: "PRODUCTOS" },
  { href: "/tienda", label: "TIENDA" },
  { href: "/recetas", label: "RECETAS" },
  { href: "/recetario-desayunos-proteicos", label: "RECETARIO DIGITAL" },
];

export function SiteHeader() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return <><div className="bg-[#f00024] px-5 py-2 text-center text-sm font-bold text-white">Compra en línea o recibe atención directa por WhatsApp</div><header className="border-b border-orange-100 bg-white"><div className="mx-auto flex min-h-24 max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 lg:px-8"><a href="/"><Image unoptimized src="/brand/nutrimax-logo-transparent.png" width={300} height={113} alt="Alimentos Nutrimax" className="h-16 w-auto sm:h-[4.5rem]"/></a><nav aria-label="Navegación principal" className="flex flex-wrap items-center justify-end gap-2 text-sm font-black">{navItems.map((item) => <a key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`rounded-full border-2 px-4 py-2.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 active:scale-95 ${isActive(item.href) ? "border-[#ff0026] bg-[#ff0026] text-white shadow-[0_0_18px_rgba(255,0,38,0.45)]" : "border-red-100 bg-white text-[#321813] shadow-sm hover:border-[#ff0026] hover:bg-red-50 hover:text-[#e00022] hover:shadow-[0_0_14px_rgba(255,0,38,0.28)]"}`}>{item.label}</a>)}<a href="/contactanos" aria-current={isActive("/contactanos") ? "page" : undefined} className={`rounded-full border-2 px-4 py-2.5 text-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-200 active:scale-95 ${isActive("/contactanos") ? "border-[#321813] bg-[#321813] shadow-[0_0_18px_rgba(50,24,19,0.35)]" : "border-[#ff0026] bg-[#ff0026] shadow-md hover:border-[#d90021] hover:bg-[#d90021] hover:shadow-[0_0_18px_rgba(255,0,38,0.45)]"}`}>CONTÁCTANOS</a></nav></div></header></>;
}

export function SiteFooter() {
  return <footer className="bg-[#2c1813] text-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 lg:px-8"><div><Image unoptimized src="/brand/nutrimax-logo-transparent.png" width={190} height={72} alt="Nutrimax" className="h-11 w-auto"/><p className="mt-4 text-orange-100">Granolas elaboradas en Colombia.</p></div><div><h2 className="font-black">Navegación</h2><div className="mt-3 grid gap-2 text-orange-100"><a href="/productos">Productos</a><a href="/tienda">Tienda</a><a href="/recetas">Recetas</a><a href="/recetario-desayunos-proteicos">Recetario digital</a></div></div><div><h2 className="font-black">Contacto</h2><p className="mt-3 text-orange-100">WhatsApp: 300 616 0613<br/>Bogotá, Colombia</p></div></div></footer>;
}
