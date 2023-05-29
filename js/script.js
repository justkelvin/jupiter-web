// Cookie Agreement
const cookieAgreement = document.querySelector('.cookie-agreement');
const cookieButton = document.querySelector('.cookie-agreement button');

// Check if cookie is already agreed upon
const isCookieAgreed = localStorage.getItem('cookieAgreed');

if (isCookieAgreed) {
  cookieAgreement.style.display = 'none';
} else {
  cookieButton.addEventListener('click', () => {
    localStorage.setItem('cookieAgreed', true);
    cookieAgreement.style.display = 'none';
  });
}

// Chatbot
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotMessage = document.querySelector('.chatbot-message');
const chatbotInput = document.querySelector('.chatbot-input');
const chatbotSubmit = document.querySelector('.chatbot-submit');

chatbotSubmit.addEventListener('click', handleChatbotResponse);

// Respond to chatbot input
function handleChatbotResponse() {
  const userInput = chatbotInput.value;
  
  if (userInput.toLowerCase() === 'hi' || userInput.toLowerCase() === 'hello') {
    displayChatbotMessage('Hi there! How can I assist you today?');
  } else if (userInput.toLowerCase() === 'bye' || userInput.toLowerCase() === 'goodbye') {
    displayChatbotMessage('Goodbye! Have a great day!');
  } else {
    displayChatbotMessage('I\'m sorry, I can\'t understand your request.');
  }
  
  chatbotInput.value = '';
}

// Display chatbot message
function displayChatbotMessage(message) {
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  chatbotMessage.appendChild(newMessage);
}

// Responsiveness Handling
window.addEventListener('resize', handleResponsiveLayout);

function handleResponsiveLayout() {
  // Add your responsiveness handling logic here
  // Example: Change the layout or modify elements based on screen size
  // You can use CSS media queries in conjunction with JavaScript for responsive design
}
