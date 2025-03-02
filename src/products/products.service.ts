import { Injectable, Logger } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class ProductsService {
  private readonly logger = new Logger('ProductsService');

  constructor(
    @InjectRepository(Product)
    private readonly productsRepo: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    return this.productsRepo.save(createProductDto);
  }

  findAll() {
    return this.productsRepo.find();
  }

  findOne(id: string) {
    return this.productsRepo.findOne({ where: { id } });
  }

  async validateProducts(ids: string[]) {
    ids = Array.from(new Set(ids));
    const products = await this.productsRepo.find({
      where: { id: In(ids) },
    });

    if (products.length !== ids.length) {
      throw new Error(`Some products not found`);
    }

    return products;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this.productsRepo.preload({
      id: id,
      ...updateProductDto,
    });
    if (!product) {
      throw new Error('Product not found');
    }

    return this.productsRepo.save(product);
  }

  async changeStatus(id: string, status: boolean) {
    const product = await this.productsRepo.preload({
      id: id,
      status: status,
    });
    if (!product) {
      throw new Error('Product not found');
    }

    return this.productsRepo.save(product);
  }
}
