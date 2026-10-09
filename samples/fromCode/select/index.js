import render from "../../../src/index.js";

const start = () => {
  try {
    const createControl = render({
      type: "select",
      data: ["Executive Suite", "Deluxe Room", "Standard Cabin"]
    });
    console.log("createControl : ", createControl);

  } catch (err) {
    console.log("error : ", err);
  }
};

start();