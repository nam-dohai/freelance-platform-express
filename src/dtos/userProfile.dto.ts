import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserProfileDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public image_url: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public portfolio: string;

  @IsString()
  @IsNotEmpty()
  public user_id: string;
}

export class UpdateUserProfileDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public image_url: string;

  @IsString()
  @IsNotEmpty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  public description: string;

  @IsString()
  @IsNotEmpty()
  public portfolio: string;

  @IsString()
  @IsNotEmpty()
  public user_id: string;
}
