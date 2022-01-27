import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'equipos' })
export class EquipoEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codigo: number;

  @Column()
  descripcion: string;

  @Column()
  ubicacion: string;

  @Column({ name: 'fecha_mantenimiento', type: 'timestamptz', nullable: true })
  fechaMantenimiento: Date;
}
