import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Paas",
    description: "Web del programa Paas",
};

export default function RootLayout({children}) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}
        >

        <NavBar/>
        <div className="min-h-screen">
            {children}
        </div>
        <Footer/>
        </body>
        </html>
    );
}
