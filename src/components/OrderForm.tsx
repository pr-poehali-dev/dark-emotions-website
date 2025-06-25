import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface OrderFormProps {
  product: Product;
  size: string;
  onClose: () => void;
  onBack: () => void;
}

const OrderForm = ({ product, size, onClose, onBack }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет переход на внешний платежный сервис
    alert("Переход на платежный сервис...");
  };

  const isFormValid = formData.name && formData.phone && formData.address;

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="text-purple-300 hover:text-white"
            >
              <Icon name="ArrowLeft" size={20} />
            </Button>
            <DialogTitle className="text-xl font-serif">
              Оформление заказа
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Информация о товаре */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <div className="flex space-x-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-400 text-sm">Размер: {size}</p>
                <p className="text-purple-300 font-medium">
                  ₽{product.price.toLocaleString()}
                </p>
              </div>
            </div>
          </div>

          {/* Форма заказа */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="Ваше имя"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="+7 (999) 999-99-99"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="email@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Адрес доставки *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="Полный адрес доставки"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="comment">Комментарий к заказу</Label>
              <Textarea
                id="comment"
                value={formData.comment}
                onChange={(e) => handleInputChange("comment", e.target.value)}
                className="bg-gray-800 border-gray-600 text-white"
                placeholder="Дополнительные пожелания"
                rows={2}
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white text-lg py-3"
                disabled={!isFormValid}
              >
                Оплатить ₽{product.price.toLocaleString()}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
