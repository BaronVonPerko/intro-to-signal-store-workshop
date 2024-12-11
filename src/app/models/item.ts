export type Item = {
  id: number;
  name: string;
  price: number;
  image: string;
}

export type StoreItem = Item & {inCart?: boolean}
