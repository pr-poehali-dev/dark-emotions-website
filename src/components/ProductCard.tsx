import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  onPurchase: (product: Product) => void;
}

const ProductCard = ({ product, onPurchase }: ProductCardProps) => {
  return (
    <Card className="bg-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-300 group">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-serif text-white mb-2 group-hover:text-purple-300 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {product.description}
        </p>
        <p className="text-2xl font-light text-purple-300 mb-4">
          ₽{product.price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          onClick={() => onPurchase(product)}
        >
          Приобрести
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
