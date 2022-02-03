import { Role } from "src/infraestructura/usuario/roles/role.enum"

export interface PayloadToken{
  sub:number,
  nombre:string
  role:Role
}