"use strict";

function solveEquation(a, b, c) {
  
  const D = Math.pow(b, 2) - 4 * a * c;

  if (D < 0) return [];

  if (D === 0) {
    const x = - b / (2 * a);
    return [x];
  }

  const x1 = (- b + Math.sqrt(D)) / (2 * a);
  const x2 = (- b - Math.sqrt(D)) / (2 * a);
  return [x1, x2];
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(parseInt(percent))) return showError('"Процентная ставка"', percent);
  if (isNaN(parseInt(contribution))) return showError('"Начальный взнос"', contribution);
  if (isNaN(parseInt(amount))) return showError('"Общая стоимость"', amount);
  
  const bodyCredit = amount - contribution;
  const allMonths = (date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth());
  const p = (percent / 100) / 12;
  const monthlyPayment = bodyCredit * (p + p /(((1 + p) ** allMonths) - 1));

  return  Number((monthlyPayment * allMonths).toFixed(2));
}

function showError(param, value) {
  return `Параметр ${param} содержит неправильное значение ${value}`
}
