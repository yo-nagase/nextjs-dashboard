
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <main className="flex-grow p-6">
        <hr />
        customer layout
        {children}
        <hr />
      </main>
    </div>
  );
}