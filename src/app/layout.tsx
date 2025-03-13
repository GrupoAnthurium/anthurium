import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import { Toaster } from "@/components/ui/sonner";
// import background from "@/assets/background.svg";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anthurium Group",
  description: "Digitalizá tu negocio con Anthurium. ¡Conocé más!",
  robots: "index, follow",
  openGraph: {
    title: "Anthurium Group",
    description: "Digitalizá tu negocio con Anthurium. ¡Conocé más!",
    url: "https://anthurium-xyz.vercel.app/",
    siteName: "Anthurium Group",
    images: [
      {
        url: "https://www.tusitio.com/imagen.jpg", // foto para social media
        width: 800,
        height: 600,
        alt: "Anthurium Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image", // tipo de tarjeta de Twitter
    title: "Anthurium Group",
    description: "Digitalizá tu negocio con Anthurium. ¡Conocé más!",
    images: [
      {
        url: "https://www.tusitio.com/imagen.jpg", // imagen para Twitter
        width: 800,
        height: 600,
        alt: "Anthurium Group",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1", // escalado para dispositivos móviles
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.className} w-full flex flex-col min-h-dvh relative`}
      >
        {/* <img
          src={background.src}
          alt=""
          className="absolute top-0 left-0 w-full h-full -z-10 blur-[100px]"
        /> */}
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center w-full">
          <div className="max-w-7xl w-full px-6">{children}</div>
        </main>
        <Footer />

        <Toaster />

        <Analytics /> 
      </body>
    </html>
  );
}
