import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  description: string;
  @IsNumber({
    maxDecimalPlaces: 2,
  })
  @Min(0)
  price: number;
  @IsString()
  slug: string;
  @IsNumber()
  stock: number;
  @IsString()
  @IsOptional()
  image: string;
  @IsString()
  @IsOptional()
  thumbnail: string;
  @IsString()
  gender: string = 'unisex';
  @IsBoolean()
  status: boolean = true;
}
