import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tracas",
  description: "3 amigos trying to make cool software.",
};

type Props = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en-US"
      className="font-sans bg-background selection:bg-primary selection:text-background"
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
