
const links = document.querySelectorAll('.js-nav a');

/**
 * Code setup to execute immediately including initializing events, and their
 * liseners.
 */

(() => {
  if (links) {
    links.forEach((link) => {
      const section = link.getAttribute('href').replace('#', '');

      link.addEventListener('click', (e) => {
        e.preventDefault();

        scrolls('.' + section);
      });
    });
  }
})();

function downloadResume() {
    var link = document.createElement('a');
    link.href = 'https://github.com/M0nicah/Monica_Resume/archive/refs/heads/main.zip';
    link.download = 'Monica_Masae_Resume';
    link.click();
  }