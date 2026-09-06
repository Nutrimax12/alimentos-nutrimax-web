import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SiteFooter, SiteHeader } from "@/components/site-header";
import { products } from "@/lib/products";

export const metadata: Metadata = { title:"Productos | Granolas Nutrimax", description:"Conoce las granolas clásica, premium, gourmet y dietética de Alimentos Nutrimax." };
export default function ProductsPage(){return <main className="bg-[#fffaf6] text-[#241b18]"><SiteHeader/><PageHero eyebrow="Catálogo Nutrimax" title="Granolas para cada momento." text="Conoce ingredientes, presentaciones e información nutricional de cada producto."/><section className="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.map(p=><article key={p.slug} className="overflow-hidden rounded-3xl bg-white shadow-sm"><Image unoptimized src={p.image} width={720} height={800} alt={`${p.name} ${p.size}`} className="aspect-[4/3] w-full object-cover"/><div className="p-6"><p className="font-bold text-[#ef1723]">{p.size}</p><h2 className="mt-1 text-2xl font-black">{p.name}</h2><p className="mt-3 leading-7 text-[#675752]">{p.description}</p><a href={`/productos/${p.slug}`} className="mt-5 inline-flex rounded-full bg-[#ef1723] px-5 py-3 font-black text-white">Conocer producto</a></div></article>)}</div></section><SiteFooter/></main>}
