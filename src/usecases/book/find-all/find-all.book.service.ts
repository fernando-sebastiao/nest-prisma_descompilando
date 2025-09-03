import { Injectable } from '@nestjs/common';
import { IBookRepository } from 'src/domain/repository/IBookRepository';

@Injectable()
export class FindAllBookService {
  constructor(private readonly repo: IBookRepository) {}
  async execute() {
    return this.repo.findall();
  }
}
