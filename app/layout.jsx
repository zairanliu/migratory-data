import RootClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata = {
  title: "Migratory Data",
  description: "bird tracking and user tracking in digital spaces",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootClientLayout>{children}</RootClientLayout>
      </body>
    </html>
  );
}
