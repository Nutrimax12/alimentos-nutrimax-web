import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://alimentos-nutrimax.alimentosintegralesnutrimax.workers.dev";
  const pages = ["quienes-somos","productos","tienda","recetas","recetario-desayunos-proteicos","contactanos"];
  return [{ url:base, changeFrequency:"weekly", priority:1 }, ...pages.map((page)=>({url:`${base}/${page}`,changeFrequency:"monthly" as const,priority:.8})), ...products.map((product)=>({url:`${base}/productos/${product.slug}`,changeFrequency:"monthly" as const,priority:.8}))];
}
