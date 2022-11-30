import React from "react";
import MUIDataTable from "mui-datatables";
import fetchData from "@utils/fetchData";

const columns = [
  {
    name: "name",
    label: "Nombre",
    options: {
      filter: false,
    },
  },
  {
    name: "age",
    label: "Edad",
  },
  {
    name: "number",
    label: "Número",
    options: {
      filter: false,
    },
  },
  {
    name: "nationality",
    label: "Nacionalidad",
  },
  {
    name: "club",
    label: "Club",
  },
  {
    name: "date born",
    label: "Fecha de nacimiento",
    options: {
      filter: false,
      display: false,
    },
  },
  {
    name: "height",
    label: "Estatura",
  },
  {
    name: "weight",
    label: "Peso",
  },
  {
    name: "pos",
    label: "Posición",
  },
  {
    name: "feet",
    label: "Pie",
    options: {
      display: false,
    },
  },
  {
    name: "nat team",
    label: "Equipo Nacional",
  },
];
export default function () {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetchData(setData);
  }, []);

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    selectableRows: "none",
    sortOrder: {
      name: "name",
      direction: "asc",
    },
  };

  return (
    <div className="container">
      <h2>Futbolistas bolivia</h2>
      <div>
        <MUIDataTable
          title="Lista de jugadores"
          data={data}
          columns={columns}
          options={options}
        />
      </div>
      <footer>
        Made with 💪 by{" "}
        <a href="https://jhordyess.com" target="_blank" rel="noreferrer">
          Jhordyess
        </a>
      </footer>
    </div>
  );
}
