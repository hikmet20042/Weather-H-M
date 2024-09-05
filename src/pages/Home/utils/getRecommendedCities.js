export async function getRecommendedCities(searchWord) {
  let response = await fetch(
    `https://api.thecompaniesapi.com/v1/locations/cities?search=${searchWord}`
  );
  let cities = await response.json();
  return cities.cities.slice(0, 4);
}
