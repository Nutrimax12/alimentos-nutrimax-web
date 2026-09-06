export type Nutrition = {
  calories: [number, number]; fat: [number, number]; saturated: [number, number];
  carbs: [number, number]; fiber: [number, number]; sugars: [number, number];
  added: [number, number]; protein: [number, number]; sodium: [number, number];
};

export type Product = {
  slug: string; name: string; size: string; price: number; image: string; description: string;
  ingredients: string; servings: string; nutrition: Nutrition;
};

const classicNutrition: Nutrition = { calories:[123,409], fat:[3.9,13.1], saturated:[1.2,4.1], carbs:[19.4,64.7], fiber:[2.6,8.8], sugars:[3.5,11.7], added:[1.3,4.5], protein:[3.8,12.6], sodium:[3,9] };
const gourmetNutrition: Nutrition = { calories:[132,439], fat:[5.6,18.8], saturated:[1.3,4.4], carbs:[17.7,59], fiber:[2.7,9.1], sugars:[2.6,8.7], added:[1.3,4.3], protein:[4,13.4], sodium:[2,8] };

export const products: Product[] = [
  { slug:"premium-340", name:"Granola Nutrimax Premium", size:"Tarro 340 g", price:22000, image:"/products/granola-premium-340g.webp", description:"Granola crocante con almendras en una presentación práctica.", ingredients:"Hojuelas de maíz, hojuelas de avena, uvas pasas, maní natural, almendras, arándanos deshidratados, coco en hojuelas, panela orgánica, quinua, germen de trigo y ajonjolí.", servings:"Aproximadamente 11 porciones", nutrition:{ calories:[125,416], fat:[4.4,14.7], saturated:[1.2,4], carbs:[18.8,62.8], fiber:[2.7,8.9], sugars:[3.4,11.4], added:[1.3,4.3], protein:[3.9,13], sodium:[3,9] } },
  { slug:"clasica-500", name:"Granola Nutrimax Clásica", size:"Bolsa 500 g", price:22000, image:"/products/granola-bowl.webp", description:"Nuestra mezcla clásica para desayunos y meriendas.", ingredients:"Hojuelas de maíz, hojuelas de avena, uvas pasas, maní natural, arándanos deshidratados, coco en hojuelas, panela orgánica, quinua, germen de trigo y ajonjolí.", servings:"Aproximadamente 17 porciones", nutrition:classicNutrition },
  { slug:"clasica-1500", name:"Granola Nutrimax Clásica", size:"Bolsa 1.500 g", price:45000, image:"/products/granola-clasica-1500g.webp", description:"La mezcla clásica en tamaño familiar.", ingredients:"Hojuelas de maíz, hojuelas de avena, uvas pasas, maní natural, arándanos deshidratados, coco en hojuelas, panela orgánica, quinua, germen de trigo y ajonjolí.", servings:"Aproximadamente 50 porciones", nutrition:classicNutrition },
  { slug:"gourmet-1500", name:"Granola Nutrimax Gourmet", size:"Bolsa 1.500 g", price:60000, image:"/products/granola-gourmet-1500g.webp", description:"Mezcla especial con almendras, pistachos y avellanas.", ingredients:"Hojuelas de maíz, hojuelas de avena, ajonjolí, quinua, maní natural, arándanos deshidratados, coco en hojuelas, panela orgánica, almendras, pistachos sin cáscara y avellanas.", servings:"Aproximadamente 50 porciones", nutrition:gourmetNutrition },
  { slug:"dietetica-500", name:"Granola Nutrimax Dietética", size:"Bolsa 500 g", price:25000, image:"/products/granola-bowl.webp", description:"Sin panela, sin uvas pasas y con mayor contenido de almendras. Sin azúcares añadidos.", ingredients:"Hojuelas de maíz, hojuelas de avena, maní natural, almendras, arándanos deshidratados sin azúcar añadida, coco en hojuelas, quinua, germen de trigo y ajonjolí.", servings:"Aproximadamente 17 porciones", nutrition:{ calories:[129,431], fat:[5.3,17.6], saturated:[1.3,4.4], carbs:[17.6,58.6], fiber:[2.9,9.7], sugars:[1.5,5], added:[0,0], protein:[4.3,14.4], sodium:[2,7] } },
];

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);
