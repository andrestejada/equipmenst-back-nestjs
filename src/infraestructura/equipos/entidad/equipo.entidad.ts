import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UsuarioEntidad } from '../../usuario/entidad/usuario.entidad';

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

  @ManyToOne(()=>UsuarioEntidad,(usuario)=>usuario.equipos,{cascade:true})
  @JoinColumn({name:'user_id'})
  usuario:UsuarioEntidad

  @Column({ name: 'fecha_mantenimiento', type: 'timestamptz', nullable: true })
  fechaMantenimiento: Date;
}
