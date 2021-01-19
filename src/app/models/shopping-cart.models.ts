export interface ProductModel {
  category?: string;
  imageUrl?: string;
  productDescription?: string;
  productId?: string;
  productName?: string;
  productPrice?: number;
}

export interface ProductAddModel {
  cartId?: number;
  cartProductName?: string;
  cartProductPrice?: number;
  cartProductQuantity?: number;
  cartfinalProductPrice?: number;
  cartuserId?: number;
  message?: string;
  updatedAt?: string;
}

export interface ClearCartModel {
  count?: number;
}

export interface OrderPlaceModel {
  productName?: string;
  price?: number;
  quantity?: number;
}

export interface CartItemModel {
  cartId: number;
  cartProductName: string;
  cartProductPrice: number;
  cartProductQuantity: number;
  cartfinalProductPrice: number;
  cartuserId: number;
  cartProductimageUrl: string | null;
  updatedAt?: string;
}

export interface RootObjectModel {
  cartItems?: CartItemModel[];
  totalCartValue?: number;
}

export interface LoginModel {
  accessToken?: string;
  messsage?: string;
  username?: string;
  password?: string;
}

export interface OrderSummaryModel {
  createdAt?: string;
  orderId?: number;
  orderProductName?: string;
  orderProductPrice?: number;
  orderProductQuantity?: number;
  orderimageUrl?: string;
  userID?: number;
  length?: number;
}
