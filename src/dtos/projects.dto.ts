import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public price: string;

  @IsString()
  @IsNotEmpty()
  public author_id: string;

  @IsString()
  @IsNotEmpty()
  public status: string;
}

export class UpdateProjectDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public price: string;

  @IsString()
  @IsNotEmpty()
  public author_id: string;

  @IsString()
  @IsNotEmpty()
  public status: string;
}
