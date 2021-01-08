//files where data is being exported/imported have to end in .mjs for node to recognize the function
import { add } from './export.mjs';

let result = add(5,50);

console.log(result);