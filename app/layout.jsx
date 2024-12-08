import RootClientLayout from "./ClientLayout";
import "./globals.css";

export const metadata = {
  title: "Birds as Data",
  description: "A story",
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
