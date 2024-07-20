
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});













const projects = document.querySelectorAll('.project');
const projectContainer = document.getElementById('project-container');

let currentProject = 0;

projects[currentProject].classList.add('active');

document.getElementById('right-btn').addEventListener('click', () => {
  projects[currentProject].classList.remove('active');
  currentProject++;
  if (currentProject >= projects.length) {
    currentProject = 0;
  }
  projects[currentProject].classList.add('active');
  projectContainer.style.transform = `translateX(${currentProject * -100}%)`;
  projectContainer.style.transition = 'transform 0.5s ease-in-out';
});

document.getElementById('left-btn').addEventListener('click', () => {
  projects[currentProject].classList.remove('active');
  currentProject--;
  if (currentProject < 0) {
    currentProject = projects.length - 1;
  }
  projects[currentProject].classList.add('active');
  projectContainer.style.transform = `translateX(${currentProject * -100}%)`;
  projectContainer.style.transition = 'transform 0.5s ease-in-out';
});









const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validate form fields
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Validate email format
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Save credentials (contacts)
  const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
  contacts.push({ name, email, message });
  localStorage.setItem('contacts', JSON.stringify(contacts));

  // Reset form
  form.reset();
});







var ion = 0;





