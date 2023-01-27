import { ExtendOffert, DeliveryStatus } from "../types/types";

export const users = [];

export const deliveryTypes = [
  { id: 1, name: "in post", price: 10 },
  { id: 2, name: "DPD", price: 14 },
  { id: 3, name: "poczta polska", price: 24 },
];

export const photos = [
  {
    id: 1,
    src: "https://images.freeimages.com/images/large-previews/a3e/wild-horse-1334844.jpg",
  },
  {
    id: 2,
    src: "https://images.freeimages.com/images/large-previews/fcc/bench-1307687.jpg",
  },
];


export const offertsMockUp: ExtendOffert[] = [
  {
    id: 1,
    name: "Nazwa Produktu",
    price: 40.38,
    status: DeliveryStatus.SEND,
    displaysAmount: 30,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    id: 2,
    name: "Nazwa Produktu 2",
    price: 40.38,
    displaysAmount: 12,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    id: 3,
    name: "Nazwa Produktu 3",
    price: 40.38,
    status: DeliveryStatus.SOLD,
    displaysAmount: 40,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    id: 4,
    name: "Nazwa Produktu 4",
    price: 40.38,
    displaysAmount: 132,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
  {
    id: 5,
    name: "Nazwa Produktu 5",
    price: 40.38,
    displaysAmount: 132,
    deliveryTypes: [],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus ligula a est ultricies convallis. Donec est eros, vulputate vestibulum aliquam ac, ornare tincidunt quam. Nullam augue neque, feugiat nec interdum in, condimentum non metus. Quisque in varius tortor. Duis sodales feugiat sapien vel pellentesque. Nulla eu semper diam. Etiam pharetra elit sagittis massa aliquet semper. Mauris convallis diam at quam congue hendrerit. Morbi a orci ultrices, ornare elit et, vestibulum urna. ",
  },
];