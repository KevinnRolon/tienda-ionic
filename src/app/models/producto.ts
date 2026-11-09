export interface Producto {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail: string;
}

export interface RespuestaProductos {
  products: Producto[];
}
