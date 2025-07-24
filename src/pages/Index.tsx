import { useState, useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CartProvider } from "@/components/CartContext";
import { ProductCard } from "@/components/ProductCard";
import { CartSummary } from "@/components/CartSummary";
import { PriceCalculator } from "@/components/PriceCalculator";
import { useCart } from "@/components/CartContext";
import { products } from "@/data/products";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Heart, User, Star } from "lucide-react";
import SidebarSearch from "@/components/SidebarSearch";
import heroImage from "@/assets/banner-perfumes.jpg";
import femaleImage from "@/assets/perfume-feminine.jpg";
import maleImage from "@/assets/perfume-masculine.jpg";
import unisexImage from "@/assets/perfume-unisex.jpg";

// Crear un contexto para compartir la categoría seleccionada
import { createContext, useContext } from "react";

type CategoryType = "todos" | "femeninos" | "masculinos" | "unisex";

interface CategoryContextType {
  selectedCategory: CategoryType;
  setSelectedCategory: (category: CategoryType) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function useCategory() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
}

function MainContent() {
  const { addItem, getTotalPrice } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("todos");
  
  // Escuchar cambios en el hash de la URL para cambiar la categoría
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === "femeninos" || hash === "masculinos" || hash === "unisex") {
        setSelectedCategory(hash as CategoryType);
      } else if (hash === "") {
        setSelectedCategory("todos");
      }
    };
    
    // Verificar el hash inicial
    handleHashChange();
    
    // Agregar listener para cambios en el hash
    window.addEventListener("hashchange", handleHashChange);
    
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  
  // Filtrar productos por categoría
  const filteredProducts = selectedCategory === "todos" 
    ? products 
    : products.filter(product => product.category === selectedCategory);
  
  // Obtener la imagen de cabecera según la categoría
  const getCategoryImage = () => {
    switch(selectedCategory) {
      case "femeninos":
        return femaleImage;
      case "masculinos":
        return maleImage;
      case "unisex":
        return unisexImage;
      default:
        return heroImage;
    }
  };
  
  // Obtener el título según la categoría
  const getCategoryTitle = () => {
    switch(selectedCategory) {
      case "femeninos":
        return "Perfumes Femeninos";
      case "masculinos":
        return "Perfumes Masculinos";
      case "unisex":
        return "Perfumes Unisex";
      default:
        return "Fraganza";
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar />
      
      <main className="flex-1 p-6 overflow-auto">
        {/* Hero Section */}
        <section className="relative mb-8 rounded-2xl overflow-hidden bg-gradient-elegant shadow-premium h-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
          <img
            src={getCategoryImage()}
            alt={`${getCategoryTitle()} - Perfumes de Aceite`}
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 z-20 flex items-center px-8">
            <div className="text-white max-w-lg">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{getCategoryTitle()}</h1>
              <p className="text-xl md:text-2xl mb-2 text-gold-light">Perfumes de Aceite Premium</p>
              <p className="text-lg opacity-90">Inspirados en las mejores fragancias del mundo</p>
              <Badge className="mt-4 bg-gradient-gold text-white px-4 py-2 text-sm">
                Compra mínima: 2 unidades | Al mayor desde 12 unidades | Desde $2.50 por unidad
              </Badge>
            </div>
          </div>
        </section>
        
        {/* Barra de búsqueda central */}
        <div className="max-w-2xl mx-auto mb-8">
          <SidebarSearch />
        </div>

        {/* Products */}
        <section id="productos" className="mb-12">
          {selectedCategory !== "todos" && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">{getCategoryTitle()}</h2>
              <p className="text-muted-foreground">
                Mostrando {filteredProducts.length} perfumes en la categoría {getCategoryTitle()}
              </p>
            </div>
          )}
          
          {/* Secciones de categorías */}
          {selectedCategory === "todos" && (
            <>
              <section id="femeninos" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Heart className="mr-2 text-gold" /> Perfumes Femeninos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products
                    .filter(product => product.category === "femeninos")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={addItem} />
                    ))}
                </div>
              </section>
              
              <section id="masculinos" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <User className="mr-2 text-gold" /> Perfumes Masculinos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products
                    .filter(product => product.category === "masculinos")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={addItem} />
                    ))}
                </div>
              </section>
              
              <section id="unisex" className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                  <Star className="mr-2 text-gold" /> Perfumes Unisex
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products
                    .filter(product => product.category === "unisex")
                    .map((product) => (
                      <ProductCard key={product.id} product={product} onAddToCart={addItem} />
                    ))}
                </div>
              </section>
            </>
          )}
          
          {/* Vista filtrada por categoría */}
          {selectedCategory !== "todos" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addItem} />
              ))}
            </div>
          )}
        </section>

        {/* Cart */}
        <section id="carrito" className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartSummary />
            </div>
            <div>
              <PriceCalculator totalUSD={getTotalPrice()} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>("todos");
  
  return (
    <CartProvider>
      <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <SidebarTrigger className="fixed top-4 left-4 z-50 bg-gradient-gold text-white" />
            <MainContent />
          </div>
        </SidebarProvider>
      </CategoryContext.Provider>
    </CartProvider>
  );
};

export default Index;
