export interface CreateServiceOrderDTO {
  customerId: string;
  vehicleId: string;
  serviceId: string;
  total: number;
}

export interface UpdateServiceOrderDTO {
  status?:
    | "PENDING"
    | "IN_PROGRESS"
    | "COMPLETED"
    | "CANCELLED";

  total?: number;
}