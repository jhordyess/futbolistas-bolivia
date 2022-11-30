import Papa from "papaparse";
export default async function (setData) {
  try {
    const request = await fetch(
      "https://raw.githubusercontent.com/gersontorrezm/bolivian-soccer/main/soccer-players.csv"
    );
    const text = await request.text();
    let _data = Papa.parse(text).data;
    _data.shift();
    _data = _data.filter((row) => row[0]);
    _data = _data.map((row) =>
      row.map((element) => (element === "" ? "-" : element))
    );
    setData(_data);
  } catch (error) {
    console.error(error);
  }
}
