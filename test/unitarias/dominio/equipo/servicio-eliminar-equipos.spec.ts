import { repositorioEquipo } from '../../../util/repositorioEquipos';
import { ServicioEliminarEquipo } from '../../../../src/dominio/equipo/servicio/servicio-elimar-equipo';

describe('testing servicio eliminar equipo', () => {
  let servicio:ServicioEliminarEquipo;
  beforeEach(() => {
    //repositorioEquipo = createStubObj<RepositorioEquipo>(['crearEquipo'])
    servicio = new ServicioEliminarEquipo(repositorioEquipo)
  });

  afterEach(()=>{
    jest.clearAllMocks()
    jest.resetAllMocks()
  })
  it('debe de llamar al repositorio por lo menos 1 vez con el id correspondiente ', async() => {
    
    await servicio.ejecutar(1)
    expect(repositorioEquipo.eliminarEquipo).toHaveBeenCalled()
    expect(repositorioEquipo.eliminarEquipo).toHaveBeenCalledWith(1)
  });
});