/**
 * EXPERIENCES SECTION
 */
function getMonthDifference(startDate, endDate) {
  let numberMonth =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());
  let yearCount = Math.floor(numberMonth / 12);
  let monthCount = numberMonth % 12;
  if (yearCount > 0 && monthCount > 0) {
    return `${yearCount} Years ${monthCount} Months`;
  } else if (yearCount == 1 && monthCount > 0) {
    return `${yearCount} Year ${monthCount} Months`;
  } else if (yearCount < 1 && monthCount > 0) {
    return `${monthCount} Months`;
  } else if (yearCount == 1 && monthCount == 0) {
    return `a Year`;
  }
  return `${yearCount} Years`;
}

// DK
let dkatalisgap = getMonthDifference(new Date("2021-06-13"), new Date());
var dkatalis = document.getElementById("dkatalis");
dkatalis.insertAdjacentHTML("beforeend", `<span>${dkatalisgap}</span>`);

// RB
let rubixovtgap = getMonthDifference(
  new Date("2019-07-07"),
  new Date("2019-12-24")
);
var rubixovt = document.getElementById("rubixovt");
rubixovt.insertAdjacentHTML("beforeend", `<span>${rubixovtgap}</span>`);
