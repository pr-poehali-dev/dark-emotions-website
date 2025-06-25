import { Card } from "@/components/ui/card";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <Card
      className="bg-black border-gray-800 hover:border-gray-600 transition-all duration-500 cursor-pointer group overflow-hidden"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
          <h3 className="text-lg font-light text-white tracking-wide leading-tight">
            {product.name}
          </h3>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
