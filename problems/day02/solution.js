import * as f from 'fs';
import * as readline from 'readline/promises';

const inputFile = './problems/day02/input.txt';

const isReportSafeChecker = (report) => {

    let isReportSafe = true;
    let directionIndicator = Math.sign(Number(report[0]) - Number(report[1]));
    let problemIndex = -1;

    for (let i = 0; i < report.length - 1; i++) {
        let currentNumber = Number(report[i]);
        let nextNumber = Number(report[i + 1]);
        let difference = currentNumber - nextNumber;

        if (Math.abs(difference) > 3) {
            isReportSafe = false;
            problemIndex = i;
            break;
        }

        if (difference === 0) {
            isReportSafe = false;
            problemIndex = i;
            break;
        }

        if (Math.sign(difference) !== directionIndicator) {
            isReportSafe = false;
            problemIndex = i;
            break;
        }
    }
    return {isReportSafe, problemIndexIndicator: problemIndex};
}

const dayTwoSolution = async () => {
    // Processing input
    let inputInterface = readline.createInterface({
        input: f.createReadStream(inputFile)
    });

    // Processing and Part 1
    let isReportSafeCount = 0;
    let isReportSafeWithDampenerCount = 0;

    for await (let inputLine of inputInterface) {
        let singleReport = inputLine.split(" ");

        let {isReportSafe, problemIndexIndicator} = isReportSafeChecker(singleReport);
        
        if (isReportSafe) isReportSafeCount++;

        if (!isReportSafe) {
            let currentLevelRemovedReport = [];

            for (let j = 0; j < singleReport.length; j++) {
                if (j === problemIndexIndicator) {
                    continue;
                }
                currentLevelRemovedReport.push(singleReport[j]);
            }

            console.log("current: ", currentLevelRemovedReport)
            let {isReportSafe, _} = isReportSafeChecker(currentLevelRemovedReport);

            if (isReportSafe) {
                isReportSafeWithDampenerCount++;
                continue;
            }

            let nextLevelRemovedReport = [];

            for (let j = 0; j < singleReport.length; j++) {
                if (j === problemIndexIndicator + 1) {
                    continue;
                }
                nextLevelRemovedReport.push(singleReport[j]);
            }

            console.log("next: ", nextLevelRemovedReport);
             ({isReportSafe, _} = isReportSafeChecker(nextLevelRemovedReport));
            if (isReportSafe) {
                isReportSafeWithDampenerCount++;
                continue;
            }

        }

    }
    isReportSafeWithDampenerCount += isReportSafeCount;

    return [isReportSafeCount, isReportSafeWithDampenerCount]
}

export default dayTwoSolution;