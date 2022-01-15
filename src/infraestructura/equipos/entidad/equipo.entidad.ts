import { IsString } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'equipo' })
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  codigo: number;

  @IsString()
  descripcion: string;

  @IsString()
  ubicacion: string;
}
