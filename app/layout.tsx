export const metadata = {
  title: "Your Move Chess Academy",
  description: "Focus, decision-making, and composure under pressure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
