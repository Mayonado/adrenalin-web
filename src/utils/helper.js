/**
 * Sanitizing String by removing white space and force the string to lower case
 * @param {string} - string to sanitize(removing white space, force to lower)
 */
export const stringSanitize = (string) => {
  if (string) {
    // const sanitezedString = string.replace(/ +?/g, "");
    return string.toLowerCase().trim();
  }

  return string;
};

export const stringSanitizeNoLowerCase = (string) => {
  return string.replace(/\s/g, "").trim();
};

/**
 * Helper to sort an array of object based on the given property
 * @param {dataArray} - array of object to be sorted
 * @param {property} - an object key in an objects
 * @param {type} - asc / desc
 */

export const arraySorter = (dataArray, property, type = "asc") => {
  return type === "asc"
    ? dataArray.sort((a, b) => (a[property] > b[property] ? 1 : -1))
    : dataArray.sort((a, b) => (a[property] > b[property] ? -1 : 1));
};
