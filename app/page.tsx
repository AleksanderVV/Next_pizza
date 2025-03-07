import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-white rounded-3xl p-8">
      <h1 className="text-3xl font-bold text-center">Next Pizza</h1>
      <div className="flex justify-center mt-8">
        <Button variant="outline">Order Now</Button>
      </div>
    </div>
  );
}
