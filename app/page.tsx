import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-white rounded-3xl">
      <h1 className="text-3xl font-bold text-center mt-8">Next Pizza</h1>
      <div className="flex justify-center mt-8">
        <Button variant="outline">Order Now</Button>
      </div>
    </main>
  );
}
