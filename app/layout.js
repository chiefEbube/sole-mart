import NavBar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Sole Mart",
  description: "Your one stop shop for every kind of footwear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bodyBg">
        <NavBar/>
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
