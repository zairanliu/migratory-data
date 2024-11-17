import "./globals.css";
import "@fontsource-variable/work-sans";

export const metadata = {
  title: "Birds as Data",
  description: "A story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
