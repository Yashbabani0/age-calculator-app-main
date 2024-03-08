"use strict";

// Output Elements
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDay = document.querySelector(".output-day");
const btn = document.querySelector("button");

// Input Elements
let isValid = false;
const inputYear = document.querySelector("#year-input");
const inputMonth = document.querySelector("#month-input");
const inputDay = document.querySelector("#date-input input");
const currentYear = new Date().getFullYear();

// Error Elements
let error = document.querySelectorAll(".error-msg");

inputDay.addEventListener("input", (e) => {
  if (+inputDay.value > 31) {
    error[0].textContent = "Enter a valid day";
    error[0].style.display = "block"; // Show the error message
  } else if (+inputDay.value === 0) {
    error[0].textContent = "This filed is required";
    error[0].style.display = "block"; // Show the error message
  } else {
    error[0].textContent = "";
    error[0].style.display = "none"; // Hide the error message
  }
});
inputMonth.addEventListener("input", (e) => {
  if (+inputMonth.value > 12) {
    error[1].textContent = "Enter a valid month";
    error[1].style.display = "block"; // Show the error message
  } else if (+inputMonth.value === 0) {
    error[1].textContent = "This filed is required";
    error[1].style.display = "block"; // Show the error message
  } else {
    error[1].textContent = "";
    error[1].style.display = "none"; // Hide the error message
  }
});

inputYear.addEventListener("input", (e) => {
  if (+inputYear.value > currentYear) {
    error[2].textContent = "Enter a valid year";
    error[2].style.display = "block"; // Show the error message
  } else if (+inputYear.value === 0) {
    error[2].textContent = "This filed is required";
    error[2].style.display = "block"; // Show the error message
  } else {
    error[2].textContent = "";
    error[2].style.display = "none"; // Hide the error message
  }
});
