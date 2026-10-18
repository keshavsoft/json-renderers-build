import render from "../../../src/index.js";

import data from "./data.json" with { type: "json" };
import columns from "./columns.json" with { type: "json" };

const start = () => {
  try {
    const createControl = render({
      type: "selectOptionsOnly",
      data,
      columns
    });

    console.log("createControl:", createControl[0][0]);
  } catch (err) {
    console.log("error:", err);
  }
};

start();
