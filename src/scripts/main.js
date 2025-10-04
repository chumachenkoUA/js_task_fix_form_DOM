'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

inputs.forEach((input) => {
  const lable = document.createElement('label');

  lable.classList.add('field-label');
  lable.classList.add('for');
  lable.textContent = input.name;
  lable.setAttribute('for', input.id);
  input.before(lable);

  const inputName = input.name;

  input.setAttribute(
    'placeholder',
    inputName[0].toUpperCase() + inputName.slice(1),
  );
});
