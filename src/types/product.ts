export interface Product {
  id: string;
  name: string;
  category: 'femeninos' | 'masculinos' | 'unisex';
  price: number;
  description?: string;
  inStock: boolean;
  marca?: string; // Añadimos marca para facilitar la búsqueda
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}