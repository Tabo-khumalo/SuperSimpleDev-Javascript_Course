function toggleElement (selector) {
  const button = document.querySelector(selector)

  switchOff()

  if (button.classList.contains('is-toggled') === false) {
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  };
};

function switchOff () {
  const offButton = document.querySelector('.is-toggled');

  if (offButton) {
    offButton.classList.remove('is-toggled');
  }
}