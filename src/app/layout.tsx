import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/images/favicon.png" />
      <title>Cryptobanx</title>
      <body>{children}</body>
    </html>
  );
}
