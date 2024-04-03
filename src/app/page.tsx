import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-mono">SARTech Solutions</h1>
    </main>
    <Footer />
    </>
  );
}
