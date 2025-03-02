import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column({ type: 'text', nullable: true })
  description: string;
  @Column('numeric', { default: 0 })
  price: number;
  @Column('text', { unique: true })
  slug: string;
  @Column('int', { default: 0 })
  stock: number;
  @Column({ type: 'text', nullable: true })
  image: string;
  @Column('text', { nullable: true })
  thumbnail: string;
  @Column('text', { default: 'unisex' })
  gender: string;
  @Column({ default: true })
  status: boolean;
}
