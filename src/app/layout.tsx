import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import background from "@/assets/background.svg";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anthurium",
  description: "Digitalizá tu negocio con Anthurium. ¡Conocé más!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="w-full flex flex-col min-h-dvh relative">
        <img
          src={background.src}
          alt=""
          className="absolute top-0 left-0 w-full h-full -z-10 blur-[200px]"
        />

        <Navbar />
        <main className="flex-1 flex justify-center w-full">
          <div className="max-w-7xl w-full px-6">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
