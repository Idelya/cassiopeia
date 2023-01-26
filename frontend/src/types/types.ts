export type User = {
  username: string;
  fullname: string;
  email: string;
  ban: boolean;
};

export type Photo = {
  id: number;
  src: string;
};

export type ExtendOffert = {
  name: string;
  description: string;
  price: number;
  displaysAmount: number;
  deliveryTypes: number[];
  status?: DeliveryStatus;
  mainImage?: string;
  photos?: Photo[];
};

export type DeliveryType = {
  price: number;
  name: string;
};

export type ReportDefinition = {
  id: number;
  name: string;
  description: string;
};

export enum DeliveryStatus {
  SOLD = "Zamówiony",
  SEND = "Nadany",
  DELIVERED = "Dostarczony",
  SEDNBACK = "OddanyDoZwrotu",
  DELIVEREDBACK = "Zwrócony",
}
