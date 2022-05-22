/**
 * DARK MODE TOGGLE
 */

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    return;
  }
};

// Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  return;
};

// call theme switch on clicking button
const toggleTheme = (event) => {
  event.preventDefault();
  themeSwitch();
};

// invoke theme check on initial load
themeCheck();

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
