import { EquipoEntidad } from 'src/infraestructura/equipos/entidad/equipo.entidad';
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Role } from '../roles/role.enum';

@Entity({ name: 'usuario' })
export class UsuarioEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({unique:true})
  correo: string;

  @Column()
  clave: string;
  
  @OneToMany(()=>EquipoEntidad, (equipo)=>equipo.usuario)
  equipos:EquipoEntidad[];

  @Column({type:'enum',enum:Role,default:Role.Admin})
  role:Role

  @CreateDateColumn({ name:'create_at', type:'timestamptz'})
  createAt:Date

  @UpdateDateColumn({name:'update_at',type:'timestamptz'})
  updateAt:Date
}
