import dayOneSolution from "./problems/day01/solution.js";

await dayOneSolution().then((answer) => {
    console.log();
    console.log("Day one puzzle solutions");
    console.log("The difference between the two lists of historical locations is:", answer[0]);
    console.log("The similarity score of the two lists of historical locations is:", answer[1]);
})