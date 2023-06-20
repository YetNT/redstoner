const output = document.getElementById("output");
import { myFunction, LEVER, TORCH, COMP } from "./function.js";

document.getElementById("enter").onclick = function () {
    const input = document.getElementById("input").value;
    input.replace(/\n/g, "");

    console.log(COMP(LEVER(), TORCH(), true));
};
