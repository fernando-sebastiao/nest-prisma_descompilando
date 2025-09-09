import { $Enums, Customer } from 'generated/prisma';

export class CustomerEntity implements Customer {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: $Enums.userRole;
  createdAt: Date;
}
