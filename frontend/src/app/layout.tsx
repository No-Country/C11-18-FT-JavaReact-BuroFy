import "./globals.css";
import { Header, Providers } from "@/components";
import { User } from "@/interfaces/user";
import { Roboto } from "next/font/google";
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"], style: "normal" });

export const metadata = {
  title: "Burofy | Inicio",
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
      url: "./favicon.png",
      type: "image/png",
    },
    shortcut: { url: "./favicon.png", type: "image/png" },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const stubUser: User = {
    id: "kakakakaka2323",
    id_token: "tokenid23232",
    email: "jesus_12423@gmail.com",
    rol: "client",
    firstName: "Jesús",
    avatar: "/jesus.jpeg",
  };

  return (
    <html lang='en'>
      <body className={roboto.className}>
        <Providers>
          <Header user={stubUser} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
