import getData from '../apiCalls';

const source = 'trips';
let tripsData;

tripsData = getData(source);

export default tripsData;