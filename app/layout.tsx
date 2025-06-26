import Header from "@/components/Header";
import "./globals.css";
import ThemeProvider from "@/contexts/ThemeContext";
import Footer from "@/components/footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem("theme");
                const system = window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (theme === "dark" || (!theme && system)) {
                  document.documentElement.classList.add("dark");
                } else {
                  document.documentElement.classList.remove("dark");
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body
        className="bg-main-bg "
      >
        <ThemeProvider>
          <Header />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
