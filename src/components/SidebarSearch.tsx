import React, { useState, useEffect } from "react";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/components/CartContext";
import { useCategory } from "@/pages/Index";

const SidebarSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(12);
  const [filterByCategory, setFilterByCategory] = useState(true);
  const { toast } = useToast();
  const { addItem } = useCart();
  const { selectedCategory } = useCategory();
  
  const filtered = products.filter((p) => {
    const searchTerm = query.toLowerCase();
    const matchesSearch = (
      p.name.toLowerCase().includes(searchTerm) ||
      (p.description?.toLowerCase().includes(searchTerm) || false) ||
      (p.marca?.toLowerCase().includes(searchTerm) || false)
    );
    
    // Si está activado el filtro por categoría, filtrar por la categoría seleccionada
    const matchesCategory = !filterByCategory || selectedCategory === "todos" || p.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  // Resetear el producto seleccionado cuando cambia la categoría
  useEffect(() => {
    setSelectedProduct(null);
  }, [selectedCategory]);
  
  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    toast({
      title: "Perfume seleccionado",
      description: `${product.marca} - ${product.name}`,
    });
  };
  
  const handleAddToCart = () => {
    if (selectedProduct) {
      addItem(selectedProduct, quantity);
      toast({
        title: "Agregado al carrito",
        description: `${quantity} unidades de ${selectedProduct.name}`,
      });
    }
  };
  
  const handleWhatsAppOrder = () => {
    if (selectedProduct) {
      const message = `¡Hola Natacha! Me interesa el perfume: ${selectedProduct.name} - Cantidad: ${quantity} unidades`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/14424474116?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Buscar por marca, fragancia o descripción..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-2 rounded border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold"
        />
      </div>
      
      <div className="flex items-center mb-2 text-xs">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={filterByCategory}
            onChange={() => setFilterByCategory(!filterByCategory)}
            className="mr-1"
          />
          <Filter className="w-3 h-3 mr-1 text-gold" />
          Filtrar por categoría: {selectedCategory === "todos" ? "Todos" : 
                                selectedCategory === "femeninos" ? "Femeninos" : 
                                selectedCategory === "masculinos" ? "Masculinos" : "Unisex"}
        </label>
      </div>
      <ul className="max-h-60 overflow-y-auto text-xs">
        {filtered.length === 0 && <li className="p-2 text-center">No se encontraron fragancias.</li>}
        {filtered.length > 0 && (
          <li className="text-xs text-muted-foreground p-1">
            Mostrando {filtered.length > 20 ? "20" : filtered.length} de {filtered.length} resultados
          </li>
        )}
        {filtered.slice(0, 20).map((p) => (
          <li 
            key={p.id} 
            className={`mb-2 border-b pb-1 hover:bg-gold/5 p-2 rounded cursor-pointer ${selectedProduct?.id === p.id ? 'bg-gold/10 border-gold' : ''}`}
            onClick={() => handleProductSelect(p)}
          >
            <div className="font-semibold">{p.name}</div>
            <div className="text-gold font-medium">{p.marca}</div>
            <div className="text-gray-500">
              {p.category === 'femeninos' ? 'Dama' : 
               p.category === 'masculinos' ? 'Caballero' : 'Unisex'}
            </div>
            <div className="text-gray-400 text-xs">{p.description}</div>
            <div className="text-right text-gold font-bold">${p.price}</div>
          </li>
        ))}
      </ul>
      
      {selectedProduct && (
        <div className="mt-4 border-t border-gold/20 pt-3">
          <h4 className="font-medium text-sm mb-2">Perfume seleccionado:</h4>
          <div className="bg-gold/5 p-2 rounded mb-3">
            <div className="font-semibold">{selectedProduct.marca} - {selectedProduct.name}</div>
            <div className="text-right text-gold font-bold">${selectedProduct.price}</div>
          </div>
          
          <div className="mb-3">
            <label className="text-xs font-medium block mb-1">Cantidad (mín. 12):</label>
            <input
              type="number"
              min="12"
              max="500"
              value={quantity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val) && val >= 12 && val <= 500) {
                  setQuantity(val);
                }
              }}
              className="w-full px-2 py-1 text-xs rounded border border-gold/30 focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <div className="text-right text-xs mt-1">
              <span className="font-bold text-gold">
                Total: ${(selectedProduct.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>
          
          <div className="flex gap-2 mt-2">
            <Button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-gold hover:bg-gradient-premium text-white shadow-elegant text-xs py-1"
              size="sm"
            >
              <ShoppingCart className="w-3 h-3 mr-1" />
              Agregar
            </Button>
            
            <Button
              onClick={handleWhatsAppOrder}
              variant="outline"
              className="flex-1 border-gold text-gold hover:bg-gold hover:text-white text-xs py-1"
              size="sm"
            >
              <MessageCircle className="w-3 h-3 mr-1" />
              WhatsApp
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SidebarSearch;