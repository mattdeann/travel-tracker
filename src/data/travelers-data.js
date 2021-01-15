import { getData } from '../apiCalls';

const source = 'travelers';
let travelersData;

travelersData = getData(source);
console.log(travelersData);

export default travelersData;