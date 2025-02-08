import {water} from './utils.js'; //aggrgating exports

water();

import { default as bottle } from './utils.js'; //import default components

//or

import bottle from './utils.js';  

bottle();

// import * as utils from './utils.js'; //import all components

// console.log(utils.double(5));
// console.log(utils.name);

//import {double as utilsDouble, name} from './utils.js'; //this is used to import a function from a particular file

// console.log(double(5)); You can rename the variable

//console.log(utilsDouble(5)); //renamed variable

//console.log(name);


