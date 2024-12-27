export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog1</h1>
      {children}
    </div>
  );
}
