const form = document.querySelector('#demo-form');
const hostnameInput = document.querySelector('#hostname');
const result = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const hostname = hostnameInput.value.trim();
  const hostPattern = /^(?=.{1,253}$)(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;

  if (!hostPattern.test(hostname)) {
    result.classList.add('error');
    result.innerHTML = '<span class="result-icon" aria-hidden="true">!</span><div><strong>Enter a valid example hostname</strong><p>This local demo does not check whether a hostname exists or is vulnerable.</p></div>';
    return;
  }

  result.classList.remove('error');
  result.innerHTML = '<span class="result-icon" aria-hidden="true">✓</span><div><strong>Simulation complete — no issue assessed</strong><p>' + escapeHtml(hostname) + ' was not queried. This interface makes no network requests; verify DNS and provider resources only for domains you are authorized to manage.</p></div>';
});

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}
