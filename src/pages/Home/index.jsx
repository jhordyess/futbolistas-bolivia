import React from "react";
import MUIDataTable from "mui-datatables";
import fetchData from "@utils/fetchData";
import columns from "./columns";

const spanish = {
  body: {
    noMatch: "No se obtuvieron resultados",
    toolTip: "Ordenar",
  },
  pagination: {
    next: "Página siguiente",
    previous: "Página previa",
    rowsPerPage: "Filas por página:",
    displayRows: "de",
  },
  toolbar: {
    search: "Buscar",
    downloadCsv: "Exportar CSV",
    print: "Imprimir",
    viewColumns: "Ver Columnas",
    filterTable: "Filtros",
  },
  filter: {
    title: "Filtros",
    reset: "Restablecer",
  },
  viewColumns: {
    title: "Mostrar Columnas",
    titleAria: "Mostrar/Ocultar Columnas de tabla",
  },
};

export default function () {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData(setData);
  }, []);

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    textLabels: spanish,
    selectableRows: "none",
    sortOrder: {
      name: "name",
      direction: "asc",
    },
  };

  return (
    <div className="container">
      <h2>Futbolistas de bolivia</h2>
      <p>
        Información consultada gracias a&nbsp;
        <a
          href="https://github.com/gersontorrezm"
          rel="noreferrer"
          target="_blank"
        >
          @gersontorrezm
        </a>
        &nbsp; y su repositorio:&nbsp;
        <a
          href="https://github.com/gersontorrezm/bolivian-soccer"
          rel="noreferrer"
          target="_blank"
        >
          bolivian-soccer
        </a>
      </p>
      <div>
        <MUIDataTable
          title="Lista de jugadores"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
      <footer>
        Hecho con 💪 por&nbsp;
        <a href="https://jhordyess.com" target="_blank" rel="noreferrer">
          Jhordyess
        </a>
      </footer>
    </div>
  );
}
