import { repositorioEquipo } from '../../../util/repositorioEquipos';
import { ServicioEditarEquipo } from '../../../../src/dominio/equipo/servicio/servicio-editarEquipo';
import { Equipo } from '../../../../src/dominio/equipo/modelo/equipo';
import { NotFoundException } from '@nestjs/common';
describe('testing serve update equipment', () => {
  
  let servicioEditarEquipo:ServicioEditarEquipo

  beforeEach(()=>{
    servicioEditarEquipo = new ServicioEditarEquipo(repositorioEquipo);
  });

  afterEach(()=>{
    jest.resetAllMocks();
    jest.clearAllMocks();
  })
  
  const id = 1;
  const equipo=new Equipo(123,'equipoTest','fabrica','2022-01-21T18:15:13.195Z');
  const msg = `El id "${id}" no fue encontrado`;

  it('should be call the respository.crearEquipo', async() => {
    await servicioEditarEquipo.ejecutar(id,equipo);
    expect(repositorioEquipo.editarEquipo).toHaveBeenCalled();
    expect(repositorioEquipo.editarEquipo).toHaveBeenCalledWith(id,equipo);
  });

  it('should be fail when dont fount id to update', async() => {
    await servicioEditarEquipo.ejecutar(id,equipo);
    jest.spyOn(repositorioEquipo,'editarEquipo').mockRejectedValue(new NotFoundException(msg));  
    expect(repositorioEquipo.editarEquipo).toHaveBeenCalled();
    expect(repositorioEquipo.editarEquipo).rejects.toThrow(msg);
  });  

});