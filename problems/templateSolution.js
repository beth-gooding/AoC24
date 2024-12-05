import * as f from 'fs';
import * as readline from 'readline/promises';

const inputFile = './problems/dayXX/input.txt';

const dayXSolution = async () => {
    // Processing input
    let inputInterface = readline.createInterface({
        input: f.createReadStream(inputFile)
    });

    for await (let inputLine of inputInterface) {
        // processing here
    }

    return [1, 2];
}

export default dayXSolution;