"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Brand = "anthropic" | "alexa";

interface BrandContextType {
  brand: Brand;
  toggleBrand: () => void;
  mounted: boolean;
}

const BrandContext = createContext<BrandContextType>({
  brand: "anthropic",
  toggleBrand: () => {},
  mounted: false,
});

export function useBrand(): BrandContextType {
  return useContext(BrandContext);
}

export default function BrandProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const [brand, setBrand] = useState<Brand>("anthropic");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedBrand = localStorage.getItem("brand") as Brand | null;
    if (savedBrand && (savedBrand === "anthropic" || savedBrand === "alexa")) {
      setBrand(savedBrand);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (brand === "alexa") {
      root.classList.add("brand-alexa");
    } else {
      root.classList.remove("brand-alexa");
    }
    localStorage.setItem("brand", brand);
  }, [brand, mounted]);

  const toggleBrand = (): void => {
    setBrand(prev => prev === "anthropic" ? "alexa" : "anthropic");
  };

  return (
    <BrandContext.Provider value={{ brand, toggleBrand, mounted }}>
      {children}
    </BrandContext.Provider>
  );
}
