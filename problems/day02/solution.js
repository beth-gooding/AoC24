import * as f from 'fs';
import * as readline from 'readline/promises';

const inputFile = './problems/day02/input.txt';

const dayTwoSolution = async () => {
    // Processing input
    let inputInterface = readline.createInterface({
        input: f.createReadStream(inputFile)
    });

    // Processing and Part 1
    let safeReportCount = 0;

    for await (let inputLine of inputInterface) {
        let report = inputLine.split(" ");
        // console.log(report);

        let differences = [];

        for (let i = 0; i < report.length - 1; i++) {
            differences.push(Number(report[i]) - Number(report[i + 1]));
        }

        // console.log(differences);
        if (differences.filter(d => Math.abs(d) > 3).length > 0) continue;
        if (differences.filter(d => d === 0).length > 0) continue;
        // console.log("sign: ", Math.sign(differences[0]))
        if (differences.filter(d => Math.sign(d) === Math.sign(differences[0])).length < differences.length) continue;

        // console.log("safeReport: ", report)
        safeReportCount++;
    }

    return [safeReportCount, 0]
}

export default dayTwoSolution;