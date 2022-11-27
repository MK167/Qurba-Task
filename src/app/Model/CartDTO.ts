export interface Cart{
  items?: CartItem[];
}

export interface CartItem {
  productId?: any;
  quantity: number;
}

export interface CartItemDetailed {
  product: any;
  quantity: number;
}
