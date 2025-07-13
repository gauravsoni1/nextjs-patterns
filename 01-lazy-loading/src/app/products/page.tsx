import { Suspense } from "react";
import ProductGrid from "./ProductGrid";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductGrid />
      </Suspense>
    </div>
  );
}
