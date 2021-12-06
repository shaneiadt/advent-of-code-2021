import { getBinaryReport, rowsToColumns, getMostCommonNumber } from './inputs.ts';

const binary = await getBinaryReport('./input.txt');

const columns = rowsToColumns(binary);

const gammaRate = [];

for (const col of columns) {
    gammaRate.push(getMostCommonNumber(col));
}

const episolonRate = gammaRate.map(n => n === '1' ? '0' : '1');

const a = parseInt(gammaRate.join(''), 2);
const b = parseInt(episolonRate.join(''), 2);

console.log(a * b);