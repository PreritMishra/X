//We are writing piece of code for which we are going to do testing

import {helper} from './helper-service.js';

export const execute = () => {
    const result = helper();
    if(result) {return "Learning JS";}
    else {return "Learning ReactJS";}
}