'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input) => {
    const labelText = input.charAt(0).toUpperCase() + input.slice(1);

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);
    label.textContent = labelText;

    input.placeholder = labelText;

    input.parentNode.insertBefore(label, input);
  });
});
