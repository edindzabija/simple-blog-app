import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Simple Blog</title>
      </head>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 px-3 py-2 bg-white border rounded"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1" aria-label="Main content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
