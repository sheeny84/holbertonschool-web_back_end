export default function hasValuesFromArray(set, array) {
  let bool = true;
  for (const value of array) {
    bool = set.has(value);
    if (bool === false) {
      return false;
    }
  }
  return true;
}
