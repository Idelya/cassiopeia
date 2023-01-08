export type User = {
  username: string;
  fullname: string;
  email: string;
  ban: boolean;
};

export type ExtendOffert = {
  name: string;
  description: string;
  price: number;
  displaysAmount: number;
  deliveryTypes: DeliveryType[];
  status?: DeliveryStatus;
  mainImage?: string;
};

export type DeliveryType = {
  price: number;
  name: string;
};

export enum DeliveryStatus {
  SOLD = "Zamówiony",
  SEND = "Nadany",
  DELIVERED = "Dostarczony",
  SEDNBACK = "OddanyDoZwrotu",
  DELIVEREDBACK = "Zwrócony",
}
