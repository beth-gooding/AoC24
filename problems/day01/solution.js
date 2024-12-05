import * as f from 'fs';
import * as readline from 'readline/promises';

const inputFile = './problems/day01/input.txt';

const dayOneSolution = async () => {
    // Processing input
    let historicalLocationsInterface = readline.createInterface({
        input: f.createReadStream(inputFile)
    });

    let firstHistoricalLocationList = [];
    let secondHistoricalLocationList = [];

    for await (let historicalLocationLine of historicalLocationsInterface) {
        let splitLine = historicalLocationLine.split("   ");

        firstHistoricalLocationList.push(Number(splitLine[0]));
        secondHistoricalLocationList.push(Number(splitLine[1]));
    }

    // Part 1 Setup
    firstHistoricalLocationList.sort((a, b) => a - b);
    secondHistoricalLocationList.sort((a, b) => a - b);

    let differenceCounter = 0;

    // Part 2 Setup
    let similarityScore = 0;

    // For loop to get answer for both parts
    for (let i = 0; i < firstHistoricalLocationList.length; i++) {
        let currentHistoricalLocation = firstHistoricalLocationList[i];
        differenceCounter += Math.abs(currentHistoricalLocation - secondHistoricalLocationList[i]);
        similarityScore += (currentHistoricalLocation * secondHistoricalLocationList.filter((location) => location === currentHistoricalLocation).length);
    }

    return [differenceCounter, similarityScore];
}

export default dayOneSolution;