export class Book implements Book {
  id: string;
  title: string;
  description: string;
  bar_code: string;
  price: number;
  stock: number;
  createdAt: Date | null;
  updatedAt: Date | null;
}
