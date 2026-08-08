export default function MainGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="px-4 pt-32 pb-24 sm:px-6 sm:pt-48">{children}</div>
    </div>
  );
}
