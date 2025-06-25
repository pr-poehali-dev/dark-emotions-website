import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import OrderForm from "./OrderForm";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface PurchaseModalProps {
  product: Product;
  onClose: () => void;
}

const PurchaseModal = ({ product, onClose }: PurchaseModalProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [showOrderForm, setShowOrderForm] = useState(false);

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleContinue = () => {
    if (selectedSize) {
      setShowOrderForm(true);
    }
  };

  if (showOrderForm) {
    return (
      <OrderForm
        product={product}
        size={selectedSize}
        onClose={onClose}
        onBack={() => setShowOrderForm(false)}
      />
    );
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-black border-gray-800 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="aspect-square overflow-hidden rounded-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">{product.description}</p>
            <p className="text-2xl font-light text-gray-300">
              ₽{product.price.toLocaleString()}
            </p>
          </div>

          <div className="space-y-4">
            <Label className="text-lg font-medium">Выберите размер:</Label>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <div key={size} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={size}
                      id={size}
                      className="border-gray-600 text-gray-300"
                    />
                    <Label
                      htmlFor={size}
                      className="text-white cursor-pointer hover:text-gray-300 transition-colors"
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </div>

          <Button
            className="w-full bg-white text-black hover:bg-gray-200"
            onClick={handleContinue}
            disabled={!selectedSize}
          >
            Продолжить оформление
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
