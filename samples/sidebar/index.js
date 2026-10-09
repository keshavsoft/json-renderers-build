import render from "../../docs/dist/v5/min.js";

const start = () => {
  try {
    render({
      type: "sidebar",
      data: ["Dashboard", "Orders", "Keshavsoft"],
      targetHtmlId: "sidebarContainer"
    });
  } catch (err) {
    console.log("error : ", err);
  }
};

start();
