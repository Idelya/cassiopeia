export type User = {
  id: number;
  username: string;
  fullname: string;
  email: string;
  ban: boolean;
};

export type Photo = {
  id: number;
  src: string;
  mainImage: boolean;
};

export type ExtendOffer = {
  id: number;
  name: string;
  description: string;
  price: number;
  displayAmount: number;
  deliveryTypes: DeliveryType[];
  newDeliveryTypes?: number[];
  chosenDelivery?: number;
  status?: DeliveryStatus;
  mainImage?: string;
  photos?: Photo[];
};

export type DeliveryType = {
  id: number;
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
