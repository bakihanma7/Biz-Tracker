export interface CreateServiceDTO {
  name: string;
  description?: string;
  price: number;
}

export interface UpdateServiceDTO {
  name?: string;
  description?: string;
  price?: number;
}