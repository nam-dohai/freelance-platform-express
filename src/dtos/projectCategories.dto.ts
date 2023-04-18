import { IsString, IsNotEmpty } from 'class-validator';

export class CreateProjectCategoryDto {
  @IsString()
  @IsNotEmpty()
  public name: string;
}

export class UpdateProjectCategoryDto {
  @IsString()
  @IsNotEmpty()
  public name: string;
}
