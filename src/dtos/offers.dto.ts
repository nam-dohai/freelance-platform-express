import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOfferDto {
  @IsString()
  @IsNotEmpty()
  public project_id: string;

  @IsString()
  @IsNotEmpty()
  public proponent_id: string;

  @IsString()
  public message: string;

  @IsString()
  @IsNotEmpty()
  public price: string;
}

export class UpdateOfferDto {
  @IsString()
  @IsNotEmpty()
  public project_id: string;

  @IsString()
  @IsNotEmpty()
  public proponent_id: string;

  @IsString()
  public message: string;

  @IsString()
  @IsNotEmpty()
  public price: string;
}
