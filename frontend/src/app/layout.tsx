import "./globals.css";
import {  Header, Providers, Spinner } from "@/components";
import { User } from "@/interfaces/user";

export const metadata = {
  title: "Burofy | Home",
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
    firstName: "jesus",
    avatar: "/jesus.jpeg",
  };

  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header user={stubUser} />
          {children}
        </Providers>
      </body>
    </html>
  );
}
