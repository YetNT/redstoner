const output = document.getElementById("output");

document.getElementById("enter").onclick = function () {
    const input = document.getElementById("input").value;
    input.replace(/\n/g, "");
};

import { myFunction } from "./function.js";

myFunction(); // Call the imported function
