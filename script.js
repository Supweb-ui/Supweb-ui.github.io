document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('output').textContent =
    "You clicked the button at " + new Date().toLocaleTimeString();
});