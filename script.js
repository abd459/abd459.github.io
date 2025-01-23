// Get references to elements
const modal = document.getElementById('form-modal');
const openButton = document.getElementById('get-started');
const closeButton = document.querySelector('.close-button');

// Open the modal when the button is clicked
openButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
