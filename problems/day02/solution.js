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

        let directionIndicator = Math.sign(Number(report[0]) - Number(report[1]));
        let safeReport = true;

        for (let i = 0; i < report.length - 1; i++) {
            let currentNumber = Number(report[i]);
            let nextNumber = Number(report[i + 1]);
            let difference = currentNumber - nextNumber;

            if (Math.abs(difference) > 3) {
                safeReport = false;
                break;
            }

            if (difference === 0) {
                safeReport = false;
                break;
            }

            if (Math.sign(difference) !== directionIndicator) {
                safeReport = false;
                break;
            }
        }

        if (safeReport) safeReportCount++;
    }

    return [safeReportCount, 0]
}

export default dayTwoSolution;