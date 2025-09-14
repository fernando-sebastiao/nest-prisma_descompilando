import { SaleItem } from 'generated/prisma';

export class saleItemEntity implements SaleItem {
  id: string;
  bookId: string;
  customerId: string;
  quantity: number;
  price: number;
  createdAt: Date;
  updateAt: Date;
}
