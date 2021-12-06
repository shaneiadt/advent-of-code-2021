export const getBinaryReport = async (path: string) => {
    const text = await Deno.readTextFile(path);

    const array = [];
    let line = [];

    for (const char of text) {
        if (char === '1' || char === '0') {
            line.push(char);
        } else {
            if (line.length !== 0) array.push(line);

            line = [];
        }
    }

    array.push(line);

    return array;
}

export const getMostCommonNumber = (array: string[]) => {
    const dict: { [index: string]: number; } = {};

    for (const key of array) {
        dict[key] = dict[key] ? dict[key] + 1 : 1;
    }

    let mostCommonKey = Object.keys(dict)[0];
    let value = 0;

    for(const key in dict){
        if(dict[key] > value){
            value = dict[key];
            mostCommonKey = key;
        }
    }

    return mostCommonKey;
}

export const rowsToColumns = (array: string[][]) => {
    const newArray: string[][] = [];

    for (let x = 0; x < array[0].length; x++) {
        let column: string[] = [];

        for (let y = 0; y < array.length; y++) {
            const char = array[y][x];

            column.push(char);
        }

        newArray.push(column);
    }

    return newArray;
}