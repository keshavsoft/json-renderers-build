import render from "../../docs/dist/v3/min.js";

const start = () => {
  try {
    const createControl = render({
      type: "select",
      data: ["Name", "city"]
    });
    console.log("createControl : ", createControl);

  } catch (err) {
    console.log("error : ", err);
  }
};

start();