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
    title: "Pass",
    description: "Web del proyecto Pass",
};

export default function RootLayout({children}) {
    return (
        <html lang="es" suppressHydrationWarning>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >

        <NavBar/>
        <div className="flex flex-col min-h-screen">
            {children}
        </div>

        <Footer/>
        </body>
        </html>
    );
}
