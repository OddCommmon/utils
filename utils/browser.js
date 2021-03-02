export const getQueryVar = (varName) => {
  // Grab and unescape the query string
  var queryStr = unescape(window.location.search) + "&";

  // Dynamic replacement RegExp
  var regex = new RegExp(".*?[&\\?]" + varName + "=(.*?)&.*");

  // Apply RegExp to the query string
  var val = queryStr.replace(regex, "$1");

  // If the string is the same, we didn't find a match - return false
  return val == queryStr ? false : val;
};
