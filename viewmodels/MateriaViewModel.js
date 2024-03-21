import MateriaModel from '../models/MateriaModel';

const MateriasViewModel = {
  obtenerMaterias: (carrera) => {
    const listaMaterias = [];
    for (let i = 1; i <= 5; i++) {
      const materia = new MateriaModel(`Materia ${i} Carrera ${carrera}`);
      listaMaterias.push(materia);
    }
    return listaMaterias;
  }
};

export default MateriasViewModel;
    