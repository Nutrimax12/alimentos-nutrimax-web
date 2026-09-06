export function PageHero({ eyebrow, title, text }: { eyebrow:string; title:string; text:string }) {
  return <section className="bg-[linear-gradient(115deg,#e90022_0%,#ff0a2d_52%,#ff7900_100%)] px-5 py-16 text-white"><div className="mx-auto max-w-7xl lg:px-3"><p className="text-sm font-black uppercase tracking-[.2em] text-white">{eyebrow}</p><h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-lg leading-8 text-white">{text}</p></div></section>;
}
