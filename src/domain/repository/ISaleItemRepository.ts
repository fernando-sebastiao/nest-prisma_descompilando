import { saleItemDTO } from 'src/usecases/dtos/saleItemInputs';
import { saleItemEntity } from '../entities/sale-entity';

export abstract class IsaleItemRepositoy {
  abstract create(data: saleItemDTO): Promise<saleItemEntity>;
  abstract findOne(saleId: string): Promise<saleItemEntity | null>;
  abstract findall(): Promise<saleItemEntity[] | null>;
  abstract delete(saleId: string): Promise<saleItemEntity>;
}
