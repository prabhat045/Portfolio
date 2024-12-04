import SidebarLayout from "./sidebarlayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return(
    <html lang="en">
      <body>
      <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
