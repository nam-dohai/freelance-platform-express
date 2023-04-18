import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePropositionDto {
  @IsString()
  @IsNotEmpty()
  public project_id: string;

  @IsString()
  @IsNotEmpty()
  public proponent_id: string;

  @IsString()
  public message: string;
}

export class UpdatePropositionDto {
  @IsString()
  @IsNotEmpty()
  public project_id: string;

  @IsString()
  @IsNotEmpty()
  public proponent_id: string;

  @IsString()
  public message: string;
}
