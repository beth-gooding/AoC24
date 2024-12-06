import * as f from 'fs';
import * as readline from 'readline/promises';

const inputFile = './problems/day03/input.txt';

const dayThreeSolution = async () => {
    // Processing input
    let inputInterface = readline.createInterface({
        input: f.createReadStream(inputFile)
    });

    let multiplicationSum = 0;
    let conditionalMultiplicationSum = 0;
    let enableInstruction = true;

    for await (let inputLine of inputInterface) {
        // processing here
        let regex = /(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g;

        let allMulInstructions = inputLine.matchAll(regex);
        let nextMulInstruction = allMulInstructions.next();

        while (!nextMulInstruction.done) {
            let actualMulInstruction = nextMulInstruction.value[0];

            if (actualMulInstruction.startsWith("m")) {
                let numbersToMultiply = actualMulInstruction.match(/\d+,\d+/);
                let extractedNumbers = numbersToMultiply[0].split(",");
                let multipleToAdd = extractedNumbers.reduce((acc, cur) => acc * Number(cur), 1);
                
                multiplicationSum += multipleToAdd;

                if (enableInstruction) {
                    conditionalMultiplicationSum += multipleToAdd;
                }
                
            } else if (actualMulInstruction.startsWith("don")){
                enableInstruction = false;
            } else {
                enableInstruction = true;
            }

            nextMulInstruction = allMulInstructions.next();
        }
    }

    return [multiplicationSum, conditionalMultiplicationSum];
}

export default dayThreeSolution;