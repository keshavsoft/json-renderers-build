import render from "../../../src/index.js";
import data from "../../table/batches.json" with { type: "json" };

const start = () => {
  try {
    const createControl = render({
      type: "tableFromSpec",
      columns: ["itemName", "baseUnit"],
      data: data.slice(0, 5),
      options: {
        showSerial: true
      }
    });

    // console.log("createControl : ", JSON.stringify(createControl, null, 2));

    console.log("head : ", createControl.children[0].children[0].children);

    console.log("body : ", createControl.children[1].children[0]);


  } catch (err) {
    console.log("error : ", err);
  }
};

start();