/*using  default export way 1 */

const product = (a,b) => a*b;

export default product;



/* using named export way 2 */

export const sum = (a,b) => a+b;
export const pow = (a,b) => a**b;
export const greet = (user) => `hello ${user}`;
