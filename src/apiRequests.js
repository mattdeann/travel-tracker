export function getAllData() {
  let urls = [
    'http://localhost:3001/api/v1/travelers',
    'http://localhost:3001/api/v1/trips',
    'http://localhost:3001/api/v1/destinations'
  ];
  let allData = urls.map(url => fetch(url));
  return Promise.all(allData)
}
