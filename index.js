import dayOneSolution from "./problems/day01/solution.js";
import dayTwoSolution from "./problems/day02/solution.js";
import dayThreeSolution from "./problems/day03/solution.js";

await dayOneSolution().then((answer) => {
    console.log();
    console.log("Day one puzzle solutions");
    console.log("The difference between the two lists of historical locations is:", answer[0]);
    console.log("The similarity score of the two lists of historical locations is:", answer[1]);
});

await dayTwoSolution().then((answer) => {
    console.log();
    console.log("Day two puzzle solutions");
    console.log("The number of safe reports is:", answer[0]);
    console.log("The number of safe reports when the problem dampener is used is:", answer[1]);
});

await dayThreeSolution().then((answer) => {
    console.log();
    console.log("Day three puzzle solutions");
    console.log("The total sum of multiply instructions is:", answer[0]);
    console.log("The total sum of conditional multiply instructions is:", answer[1]);
});