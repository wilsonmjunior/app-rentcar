import { useMemo } from "react";

export function useCarDetailsController() {
  const price = useMemo(() => Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(580), []);

  return {
    price,
  }
}
