import React from "react";
import Papa from "papaparse";

export default function () {
  const fnt1 = async ({ target }) => {
    try {
      const request = await fetch(
        "https://raw.githubusercontent.com/gersontorrezm/bolivian-soccer/main/soccer-players.csv"
      );
      const binary = await request.text();
      const cvs = Papa.parse(binary);
      const { data } = cvs;
      alert(`${data.length} registros obtenidos`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h2>Soccer Info</h2>
      <div></div>
      <button onClick={fnt1}>Click me</button>
      <footer>
        Made with 💪 by{" "}
        <a href="https://jhordyess.com" target="_blank" rel="noreferrer">
          Jhordyess
        </a>
      </footer>
    </div>
  );
}
