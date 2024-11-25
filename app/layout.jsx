import PageTransitionEffect from "@/components/PageTransitionEffect";
import "./globals.css";

export const metadata = {
  title: "Birds as Data",
  description: "A story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTransitionEffect>{children}</PageTransitionEffect>
      </body>
    </html>
  );
}
