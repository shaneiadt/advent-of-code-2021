import School from './School.ts';
import input from './input.ts';

const school = new School(input);
const days = 80;

school.processDays(days);

console.log(`[Part 1] No. of fish in school after ${days}: ${school.fish.length}`);