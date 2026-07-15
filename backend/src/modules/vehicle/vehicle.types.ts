export interface CreateVehicleDTO {
  plateNumber: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  customerId: string;
}

export interface UpdateVehicleDTO {
  plateNumber?: string;
  make?: string;
  model?: string;
  year?: number;
  color?: string;
}