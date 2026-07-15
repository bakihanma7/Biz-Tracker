export interface CreateCustomerDTO {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
}

export interface UpdateCustomerDTO {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
}