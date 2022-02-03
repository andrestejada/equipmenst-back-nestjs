import { Expose } from "class-transformer"
import { Role } from "src/infraestructura/usuario/roles/role.enum"

export class LoginExitosoDto {
  @Expose()
  id:number

  @Expose()
  nombre:string

  @Expose()
  apellido:string

  @Expose()
  correo:string

  @Expose()
  role:Role
}