import render from "../../docs/dist/v24/min.js";
import "https://keshavsoft.github.io/json-to-tag/dist/v9/min.js";

const data = [
  { itemName: "Keyboard", category: "Accessories" },
  { itemName: "Krishna Mouse", category: "Accessories" },
  { itemName: "Monitor", category: "Displays" },
  { itemName: "KeshavSoft Laptop", category: "Computers" },
  { itemName: "USB Cable", category: "Accessories" }
];

const columns = [
  { columnName: "itemName", width: "60%" },
  { columnName: "category", width: "40%" }
];

const start = () => {
  const container = document.getElementById("dom-render-container");
  const status = document.getElementById("status");

  try {
    // Build the table specification using the table renderer.
    const tableSpec = render({ type: "table", columns, data });
    const table = window.ks.jsonToTag.buildSpecElement(tableSpec);
    container.replaceChildren(table);

    // The current table builder's simple layout has an empty footer row.
    // Connect each footer input to a data list by using the same columnName as its ID.
    let tfoot = table.querySelector("tfoot");
    if (!tfoot) {
      tfoot = document.createElement("tfoot");
      table.appendChild(tfoot);
    }

    let footerRow = tfoot.querySelector("tr");
    if (!footerRow) {
      footerRow = document.createElement("tr");
      tfoot.appendChild(footerRow);
    }

    for (const column of columns) {
      const cell = document.createElement("td");
      const input = document.createElement("input");
      input.type = "text";
      input.className = "form-control";
      input.name = column.columnName;
      input.placeholder = `Enter ${column.columnName}`;
      input.setAttribute("list", column.columnName);
      input.setAttribute("aria-label", `Autocomplete for ${column.columnName}`);
      cell.appendChild(input);
      footerRow.appendChild(cell);
    }

    // Build the data-list specifications using the dataList renderer and same data.
    const dataListSpecs = render({
      type: "dataList",
      columns: columns.map(({ columnName }) => ({ columnName })),
      data
    });

    const dataLists = window.ks.jsonToTag.buildSpecElement(dataListSpecs);
    container.append(...dataLists);

    const expectedIds = columns.map(({ columnName }) => columnName);
    const missing = expectedIds.filter((id) =>
      !table.querySelector(`input[list="${id}"]`) ||
      !container.querySelector(`datalist#${CSS.escape(id)}`)
    );

    if (missing.length) {
      throw new Error(`Autocomplete wiring is incomplete for: ${missing.join(", ")}`);
    }

    status.className = "alert alert-success py-2";
    status.textContent =
      "Autocomplete wiring passed: each footer input's list attribute matches a data list ID.";
    console.log("Table + data-list autocomplete wiring passed:", expectedIds);
  } catch (error) {
    console.error(error);
    status.className = "alert alert-danger py-2";
    status.textContent = `Example failed: ${error.message}`;
  }
};

start();
