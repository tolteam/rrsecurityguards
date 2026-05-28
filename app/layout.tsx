import type { Metadata } from "next";
import { Poppins, Roboto_Slab } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  display: "optional",
  preload: false,
});

const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "Security Guard Services in Orange, CA | Rapid Response Security Guards",
    template: "%s | Rapid Response Security Guards",
  },
  description:
    "Licensed & insured security guard services in Orange and Orange County. Armed and unarmed guards, mobile patrol, fire watch, event security, and construction site security. Get a free quote today.",
  keywords: [
    "security guard services Orange",
    "security company Orange County",
    "armed security guards California",
    "mobile patrol security",
    "fire watch services",
    "construction site security",
    "event security Orange County",
    "PPO 121228",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rrsecurityguards.com",
    siteName: "Rapid Response Security Guards",
    title: "Security Guard Services in Orange, CA | Rapid Response Security Guards",
    description:
      "Licensed & insured security guard services in Orange and Orange County. Armed and unarmed guards, mobile patrol, fire watch, event security, and construction site security.",
  },
  metadataBase: new URL("https://www.rrsecurityguards.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${robotoSlab.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          fetchPriority="high"
          imageSrcSet={[
            "/_next/image?url=%2Fimages%2Fhero.webp&w=640&q=50 640w",
            "/_next/image?url=%2Fimages%2Fhero.webp&w=750&q=50 750w",
            "/_next/image?url=%2Fimages%2Fhero.webp&w=828&q=50 828w",
            "/_next/image?url=%2Fimages%2Fhero.webp&w=1080&q=50 1080w",
            "/_next/image?url=%2Fimages%2Fhero.webp&w=1200&q=50 1200w",
            "/_next/image?url=%2Fimages%2Fhero.webp&w=1920&q=50 1920w",
          ].join(", ")}
          imageSizes="100vw"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-20 md:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
