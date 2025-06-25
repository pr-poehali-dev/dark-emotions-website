import { useState } from "react";
import ProductCard from "./ProductCard";
import PurchaseModal from "./PurchaseModal";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const ProductGallery = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: "Плащ Забвения",
      price: 15000,
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop",
      description:
        "Черный плащ из натуральной шерсти, воплощающий глубину ночных переживаний",
    },
    {
      id: 2,
      name: "Свитер Меланхолии",
      price: 8000,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4a8fea7c?w=400&h=400&fit=crop",
      description:
        "Темно-серый кашемировый свитер, согревающий в холодные моменты души",
    },
    {
      id: 3,
      name: "Платье Тишины",
      price: 12000,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop",
      description: "Элегантное черное платье для моментов внутреннего диалога",
    },
    {
      id: 4,
      name: "Пальто Рассвета",
      price: 20000,
      image:
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop",
      description: "Темно-фиолетовое пальто, символизирующее надежду в темноте",
    },
  ];

  const handlePurchase = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="collection" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Коллекция Внутренних Переживаний
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Каждая вещь создана как отражение моментов грусти, тоски и красоты
            человеческих эмоций
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      </div>

      {selectedProduct && (
        <PurchaseModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductGallery;
