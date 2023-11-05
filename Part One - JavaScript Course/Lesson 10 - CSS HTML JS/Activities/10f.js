function toggleElement (selector) {
  const button = document.querySelector(selector)

  if (button.classList.contains('is-toggled') === false) {
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
};