const columns = [
  {
    name: 'name',
    label: 'Nombre',
    options: {
      filter: false
    }
  },
  {
    name: 'age',
    label: 'Edad',
    options: {
      filterType: 'multiselect'
    }
  },
  {
    name: 'number',
    label: 'Número',
    options: {
      filter: false
    }
  },
  {
    name: 'nationality',
    label: 'Nacionalidad',
    options: {
      filterType: 'multiselect'
    }
  },
  {
    name: 'club',
    label: 'Club'
  },
  {
    name: 'date born',
    label: 'Fecha de nacimiento',
    options: {
      filter: false,
      display: false
    }
  },
  {
    name: 'height',
    label: 'Estatura',
    options: {
      filterType: 'multiselect'
    }
  },
  {
    name: 'weight',
    label: 'Peso',
    options: {
      filterType: 'dropdown'
    }
  },
  {
    name: 'pos',
    label: 'Posición'
  },
  {
    name: 'feet',
    label: 'Pie',
    options: {
      display: false
    }
  },
  {
    name: 'nat team',
    label: 'Equipo Nacional'
  }
]
export default columns
