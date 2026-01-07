export default function cleanSet(set, startString) {
  let result = '';
  if (startString === undefined || startString.length === 0) {
    return result;
  }
  for (const item of set) {
    if (item.startsWith(startString)) {
      const ending = (item.slice(startString.length));
      if (result.length !== 0) {
        result += `-${ending}`;
      } else {
        result += ending;
      }
    }
  }
  return result;
}
