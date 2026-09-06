import Image from "next/image";

export function SiteHeader() {
  return <><div className="bg-[#f00024] px-5 py-2 text-center text-sm font-bold text-white">Compra en línea o recibe atención directa por WhatsApp</div><header className="border-b border-orange-100 bg-white"><div className="mx-auto flex min-h-24 max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-3 lg:px-8"><a href="/"><Image unoptimized src="/brand/nutrimax-logo-transparent.png" width={300} height={113} alt="Alimentos Nutrimax" className="h-16 w-auto sm:h-[4.5rem]"/></a><nav className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-sm font-extrabold"><a href="/quienes-somos">QUIÉNES SOMOS</a><a href="/productos">PRODUCTOS</a><a href="/tienda">TIENDA</a><a href="/recetas">RECETAS</a><a href="/recetario-desayunos-proteicos" className="text-[#ef1723]">RECETARIO DIGITAL</a><a href="/contactanos" className="rounded-full bg-[#ff0026] px-4 py-2 text-white shadow-md">CONTÁCTANOS</a></nav></div></header></>;
}

export function SiteFooter() {
  return <footer className="bg-[#2c1813] text-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:grid-cols-3 lg:px-8"><div><Image unoptimized src="/brand/nutrimax-logo-transparent.png" width={190} height={72} alt="Nutrimax" className="h-11 w-auto"/><p className="mt-4 text-orange-100">Granolas elaboradas en Colombia.</p></div><div><h2 className="font-black">Navegación</h2><div className="mt-3 grid gap-2 text-orange-100"><a href="/productos">Productos</a><a href="/tienda">Tienda</a><a href="/recetas">Recetas</a><a href="/recetario-desayunos-proteicos">Recetario digital</a></div></div><div><h2 className="font-black">Contacto</h2><p className="mt-3 text-orange-100">WhatsApp: 300 616 0613<br/>Bogotá, Colombia</p></div></div></footer>;
}
