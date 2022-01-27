import { Equipo } from "src/dominio/equipo/modelo/equipo";
import { ErrorDeNegocio } from '../../../../src/dominio/errores/error-de-negocio';

describe('testing in the dominio equipo', () => {
  it('should be match when the types ', () => {
    const equipo = new Equipo(123,'testEquipment','fabrica','2022-01-27T18:15:13.195Z')
    expect(equipo.codigo).toBe(123)
    expect(equipo.descripcion).toBe('testEquipment')
    expect(equipo.ubicacion).toBe('fabrica')
    expect(equipo.fechaMantenimiento).toStrictEqual(new Date('2022-01-27T18:15:13.195Z'))
  });

  it('should be return a error with the date will be ia weekend', () => {
    const date = '2022-01-29T18:15:13.195Z';
    expect(async ()=> new Equipo(123,'testEquipment','fabrica',date)).rejects.toThrow(new ErrorDeNegocio(`La fecha ${date} no es un dia habil mantenimiento(L-V)`))
  });
});