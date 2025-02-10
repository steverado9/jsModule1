//Accessing utils.js using the import keyword
//import { name as myName, double } from './utils.js';

//console.log(double(8));
//console.log(double(90));

//console.log(myName);

//or

import * as utils from './utils.js';

console.log(utils.name);

console.log(utils.double(9));

utils.water();


//import { default as bottle } from './defult.js'

//or

import bottle from './defult.js';

bottle();







