import React from "react";
import Papa from "papaparse";
import MUIDataTable from "mui-datatables";
const columns = [
  {
    name: "name",
    label: "name",
    options: {
      filter: false,
    },
  },
  "age",
  {
    name: "number",
    label: "number",
    options: {
      filter: false,
    },
  },
  "nationality",
  "club",
  {
    name: "date born",
    label: "date born",
    options: {
      filter: false,
      display: false,
    },
  },
  "height",
  "weight",
  "pos",
  {
    name: "feet",
    label: "feet",
    options: {
      display: false,
    },
  },
  "nat team",
];
export default function () {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    try {
      const request = await fetch(
        "https://raw.githubusercontent.com/gersontorrezm/bolivian-soccer/main/soccer-players.csv"
      );
      const text = await request.text();
      const _data = Papa.parse(text).data;
      _data.shift();
      // _data.pop();
      setData(_data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const options = {
    filterType: "checkbox",
    responsive: "standard",
    selectableRows: "none",
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
