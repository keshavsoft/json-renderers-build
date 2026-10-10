import render from "../../../src/index.js";
import data from "../../table/batches.json" with { type: "json" };

const start = () => {
  try {
    const createControl = render({
      type: "tableFromSpec",
      columns: ["itemName", "baseUnit"],
      data: data.slice(0, 5)
    });

    // console.log("createControl : ", JSON.stringify(createControl, null, 2));

    console.log("--- : ", createControl.children[0].children[0].children);



  } catch (err) {
    console.log("error : ", err);
  }
};

start();