const template = document.querySelector("#bar");
const graph = document.querySelector(".graph");
let graphData;
async function fetchdata() {
  graphData = await (await fetch("./data.json")).json();
  graphData.forEach((el) => {
    const item = template.content.cloneNode(true);
    item.querySelector(".bar").dataset.day = el.day;
    item.querySelector(".bar").dataset.amount = "$" + el.amount;
    item.querySelector(".bar").style.height = 3 * el.amount + "px";
    graph.append(item);
  });
}

fetchdata();
