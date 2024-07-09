import { CartProvider } from '@/app/context/CartContext';
import NavBar from "@/app/components/NavBar";
import "./globals.css";
import Footer from "@/app/components/Footer";


export const metadata = {
  title: "Sole Mart",
  description: "Your one stop shop for every kind of footwear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bodyBg">
        <CartProvider>
          <NavBar />
          <main>
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
