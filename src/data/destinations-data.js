import { getData } from '../apiCalls';

const source = 'destinations';
let destinationsData;

destinationsData = getData(source);

export default destinationsData;