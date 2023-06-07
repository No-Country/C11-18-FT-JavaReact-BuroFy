import "./globals.css";
import { Providers } from "@/components";
import Script from "next/script";

import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import { AxiosInterceptor } from "@/interceptors/axiosInterceptor";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], style: "normal" });

export const metadata = {
  title: "Burofy",
  description:
    "Burofy: Conectamos clientes con abogados expertos en diversas áreas del derecho. Encuentra al profesional adecuado para tus necesidades legales fácil y rápido.",
  keywords: ["Burofy", "buro-fy", "buro", "derecho", "abogado", "abogancia", "intermediario"],
  authors: [
    {
      name: "Burofy organization",
      url: "https://github.com/No-Country/C11-18-FT-JavaReact-BuroFy.git",
    },
  ],
  creator: "Burofy organization",
  publisher: "Burofy organization",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
};

AxiosInterceptor();

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='es'>
     
      <body className={roboto.className}>
        <Providers>
          <main className='col-start-2 col-end-2 row-start-2 row-end-2 '>{children}</main>
        </Providers>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
    
      </body>
      
    </html>
  );
}
