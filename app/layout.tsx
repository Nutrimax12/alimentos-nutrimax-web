import type { Metadata } from "next";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alimentos-nutrimax.alimentosintegralesnutrimax.workers.dev"),
  title: "Alimentos Nutrimax | Granola colombiana",
  description: "Compra granola Nutrimax en diferentes presentaciones. Pedidos por WhatsApp y pagos en línea.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <WhatsAppFloat />
       <script
  defer
  src="https://static.cloudflareinsights.com/beacon.min.js"
  data-cf-beacon='{"token":"8b4cb30653ab4fb9b42bf400be6cdbdd"}'
></script>

        
      </body>
    </html>
  );
}
