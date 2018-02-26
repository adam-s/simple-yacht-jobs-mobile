export const formatLocationString = location => {
  const { country, locality } = location;
  return locality + ', ' + country;
}
