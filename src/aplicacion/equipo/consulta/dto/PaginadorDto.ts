import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class PaginadorDto {

  @ApiProperty({example:'limit=3'})
  @IsOptional()
  @IsPositive()
  @IsNumber()
  limit:number;

  @ApiProperty({example:'page=1'})
  @IsOptional()
  @IsPositive()
  @IsNumber()
  page:number
}