import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { productBySlug, products } from "@/lib/products";

const baseUrl = "https://alimentos-nutrimax.alimentosintegralesnutrimax.workers.dev";
const money = new Intl.NumberFormat("es-CO", { style:"currency", currency:"COP", maximumFractionDigits:0 });

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const product = productBySlug((await params).slug);
  if (!product) return {};
  return {
    title: `${product.name} ${product.size} | Alimentos Nutrimax`,
    description: `${product.description} Compra por WhatsApp en Alimentos Nutrimax.`,
    alternates: { canonical: `/productos/${product.slug}` },
  };
}

const rows = [
  ["Calorías", "calories", "kcal"], ["Grasa total", "fat", "g"], ["Grasa saturada", "saturated", "g"],
  ["Carbohidratos totales", "carbs", "g"], ["Fibra dietaria", "fiber", "g"], ["Azúcares totales", "sugars", "g"],
  ["Azúcares añadidos", "added", "g"], ["Proteína", "protein", "g"], ["Sodio", "sodium", "mg"],
] as const;

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const product = productBySlug((await params).slug);
  if (!product) notFound();
  const message = encodeURIComponent(`Hola, Alimentos Nutrimax. Deseo comprar ${product.name} ${product.size} por ${money.format(product.price)}.`);
  const schema = { "@context":"https://schema.org", "@type":"Product", name:`${product.name} ${product.size}`, image:`${baseUrl}${product.image}`, description:product.description, brand:{"@type":"Brand",name:"Nutrimax"}, offers:{"@type":"Offer",priceCurrency:"COP",price:product.price,availability:"https://schema.org/InStock",url:`${baseUrl}/productos/${product.slug}`} };
  return <main className="min-h-screen bg-[#fffaf6] text-[#241b18]">
    <header className="border-b border-orange-100 bg-white"><div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8"><a href="/" aria-label="Volver al inicio"><Image unoptimized src="/brand/nutrimax-logo-transparent.png" width={300} height={113} alt="Alimentos Nutrimax" className="h-16 w-auto sm:h-[4.5rem]"/></a><a href="/" className="flex items-center gap-2 font-bold text-[#c80d17]"><ArrowLeft size={18}/> Volver a la tienda</a></div></header>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
    <section className="mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-20">
      <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-red-950/10"><Image unoptimized src={product.image} width={960} height={1200} alt={`${product.name} ${product.size}`} className="aspect-[4/5] h-full w-full object-cover" priority/></div>
      <div className="self-center"><p className="text-sm font-black uppercase tracking-[.2em] text-[#e76712]">Alimentos Nutrimax</p><h1 className="mt-3 text-4xl font-black leading-tight tracking-tight sm:text-5xl">{product.name}</h1><p className="mt-2 text-xl font-bold text-[#ef1723]">{product.size}</p><p className="mt-5 text-lg leading-8 text-[#675752]">{product.description}</p><p className="mt-7 text-4xl font-black">{money.format(product.price)}</p><a href={`https://wa.me/573006160613?text=${message}`} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#20a957] px-7 py-4 text-lg font-black text-white"><MessageCircle size={21}/> Comprar por WhatsApp</a>
        <div className="mt-10 rounded-3xl border border-orange-100 bg-white p-6"><h2 className="text-2xl font-black">Ingredientes</h2><p className="mt-3 leading-7 text-[#5f4f49]">{product.ingredients}</p><p className="mt-4 text-sm font-bold text-[#c80d17]">Contiene maní, frutos secos, ajonjolí y gluten.</p></div>
      </div>
    </section>
    <section className="bg-white py-16"><div className="mx-auto max-w-4xl px-5 lg:px-8"><p className="text-sm font-black uppercase tracking-[.2em] text-[#ef1723]">Información del producto</p><h2 className="mt-3 text-3xl font-black sm:text-4xl">Información nutricional</h2><p className="mt-3 text-[#675752]">Tamaño de porción: 30 g · {product.servings}</p><div className="mt-7 overflow-hidden rounded-3xl border-2 border-[#241b18]"><table className="w-full border-collapse text-left"><thead className="bg-[#241b18] text-white"><tr><th className="p-4">Nutriente</th><th className="p-4 text-right">Por 30 g</th><th className="p-4 text-right">Por 100 g</th></tr></thead><tbody>{rows.map(([label,key,unit])=><tr key={key} className="border-t border-[#decfc8] odd:bg-[#fff8f3]"><th className="p-4 font-bold">{label}</th><td className="p-4 text-right">{product.nutrition[key][0]} {unit}</td><td className="p-4 text-right">{product.nutrition[key][1]} {unit}</td></tr>)}</tbody></table></div></div></section>
  </main>;
}
