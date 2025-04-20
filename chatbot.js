// Chatbot functionality for portfolio website

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create chatbot elements
  createChatbotElements();
  
  // Initialize chatbot
  initializeChatbot();
});

// Create chatbot UI elements
function createChatbotElements() {
  // Create chatbot container
  const chatbotContainer = document.createElement('div');
  chatbotContainer.id = 'chatbot-container';
  chatbotContainer.className = 'chatbot-container';
  
  // Create chatbot toggle button
  const chatbotToggle = document.createElement('button');
  chatbotToggle.id = 'chatbot-toggle';
  chatbotToggle.className = 'chatbot-toggle';
  chatbotToggle.innerHTML = '<i class="fas fa-comment"></i>';
  chatbotToggle.setAttribute('aria-label', 'Toggle chatbot');
  
  // Create chatbot window
  const chatbotWindow = document.createElement('div');
  chatbotWindow.id = 'chatbot-window';
  chatbotWindow.className = 'chatbot-window';
  
  // Create chatbot header
  const chatbotHeader = document.createElement('div');
  chatbotHeader.className = 'chatbot-header';
  chatbotHeader.innerHTML = `
    <div class="chatbot-title">
      <i class="fas fa-robot"></i>
      <span>Vishal's Assistant</span>
    </div>
    <button id="chatbot-close" class="chatbot-close" aria-label="Close chatbot">
      <i class="fas fa-times"></i>
    </button>
  `;
  
  // Create chatbot messages container
  const chatbotMessages = document.createElement('div');
  chatbotMessages.id = 'chatbot-messages';
  chatbotMessages.className = 'chatbot-messages';
  
  // Create chatbot input area
  const chatbotInput = document.createElement('div');
  chatbotInput.className = 'chatbot-input';
  chatbotInput.innerHTML = `
    <input type="text" id="chatbot-message-input" placeholder="Type your message here..." aria-label="Type your message">
    <button id="chatbot-send" aria-label="Send message">
      <i class="fas fa-paper-plane"></i>
    </button>
  `;
  
  // Assemble chatbot elements
  chatbotWindow.appendChild(chatbotHeader);
  chatbotWindow.appendChild(chatbotMessages);
  chatbotWindow.appendChild(chatbotInput);
  
  chatbotContainer.appendChild(chatbotToggle);
  chatbotContainer.appendChild(chatbotWindow);
  
  // Add chatbot to the body
  document.body.appendChild(chatbotContainer);
}

// Initialize chatbot functionality
function initializeChatbot() {
  const chatbotToggle = document.getElementById('chatbot-toggle');
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotClose = document.getElementById('chatbot-close');
  const chatbotInput = document.getElementById('chatbot-message-input');
  const chatbotSend = document.getElementById('chatbot-send');
  const chatbotMessages = document.getElementById('chatbot-messages');
  
  // Toggle chatbot visibility
  chatbotToggle.addEventListener('click', function() {
    chatbotWindow.classList.toggle('active');
    chatbotToggle.classList.toggle('active');
    
    // If opening the chatbot for the first time, show welcome message
    if (chatbotWindow.classList.contains('active') && chatbotMessages.children.length === 0) {
      addBotMessage("👋 Hi there! I'm Vishal's virtual assistant. How can I help you today?");
      
      // Add suggestion buttons
      addSuggestionButtons([
        "Tell me about Vishal's skills",
        "What projects has Vishal worked on?",
        "How can I contact Vishal?",
        "Tell me about Vishal's experience"
      ]);
    }
    
    // Focus on input when chatbot is opened
    if (chatbotWindow.classList.contains('active')) {
      chatbotInput.focus();
    }
  });
  
  // Close chatbot
  chatbotClose.addEventListener('click', function() {
    chatbotWindow.classList.remove('active');
    chatbotToggle.classList.remove('active');
  });
  
  // Send message on button click
  chatbotSend.addEventListener('click', function() {
    sendMessage();
  });
  
  // Send message on Enter key
  chatbotInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Function to send user message and get response
  function sendMessage() {
    const message = chatbotInput.value.trim();
    
    if (message !== '') {
      // Add user message to chat
      addUserMessage(message);
      
      // Clear input
      chatbotInput.value = '';
      
      // Get bot response (with slight delay for natural feel)
      setTimeout(function() {
        const response = getBotResponse(message);
        addBotMessage(response);
      }, 600);
      
      // Scroll to bottom
      scrollToBottom();
    }
  }
  
  // Function to add user message to chat
  function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'chatbot-message user-message';
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbotMessages.appendChild(messageElement);
    scrollToBottom();
  }
  
  // Function to add bot message to chat
  function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'chatbot-message bot-message';
    messageElement.innerHTML = `<p>${message}</p>`;
    chatbotMessages.appendChild(messageElement);
    scrollToBottom();
  }
  
  // Function to add suggestion buttons
  function addSuggestionButtons(suggestions) {
    const suggestionsElement = document.createElement('div');
    suggestionsElement.className = 'chatbot-suggestions';
    
    suggestions.forEach(suggestion => {
      const button = document.createElement('button');
      button.className = 'chatbot-suggestion';
      button.textContent = suggestion;
      button.addEventListener('click', function() {
        addUserMessage(suggestion);
        setTimeout(function() {
          const response = getBotResponse(suggestion);
          addBotMessage(response);
        }, 600);
      });
      suggestionsElement.appendChild(button);
    });
    
    chatbotMessages.appendChild(suggestionsElement);
    scrollToBottom();
  }
  
  // Function to scroll chat to bottom
  function scrollToBottom() {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Function to get bot response based on user message
  function getBotResponse(message) {
    // Convert message to lowercase for easier matching
    const lowerMessage = message.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! How can I help you learn more about Vishal?";
    }
    
    // Check for skills inquiry
    if (lowerMessage.includes('skill') || lowerMessage.includes('expertise') || lowerMessage.includes('technologies')) {
      return "Vishal is skilled in various technologies including:<br><br>• <strong>Programming:</strong> Python, SQL<br>• <strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn<br>• <strong>Deep Learning:</strong> CNNs, RNNs, GANs<br>• <strong>Computer Vision:</strong> OpenCV, Image Processing<br>• <strong>NLP:</strong> NLTK, spaCy, Transformers<br>• <strong>Data Analysis:</strong> Pandas, NumPy, Matplotlib<br><br>Would you like to know more about any specific skill?";
    }
    
    // Check for projects inquiry
    if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('portfolio')) {
      return "Vishal has worked on several exciting projects:<br><br>• <strong>Potato Crop Disease Detection</strong> - Deep learning for plant disease identification<br>• <strong>Q&A System using Gemini-Pro API</strong> - AI-powered question answering<br>• <strong>Stock Price Prediction</strong> - ML for financial forecasting<br>• <strong>Solar Panel Fault Detection</strong> - Computer vision for maintenance<br>• <strong>Chicken Disease Detection</strong> - AI for poultry health monitoring<br><br>You can view these projects in detail on the Projects page.";
    }
    
    // Check for contact inquiry
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return "You can contact Vishal through:<br><br>• <strong>Email:</strong> gorulevishal984@gmail.com<br>• <strong>Phone:</strong> +91 9172838972<br>• <strong>Location:</strong> Pune, Maharashtra, India<br><br>Or use the contact form on the Contact page.";
    }
    
    // Check for experience inquiry
    if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('worked')) {
      return "Vishal specializes in building intelligent systems using machine learning and AI to solve real-world problems. He has expertise in deep learning, data analysis, and full-stack development, with a focus on creating scalable and optimized solutions. His experience spans computer vision applications, natural language processing systems, and data analytics projects.";
    }
    
    // Check for blog inquiry
    if (lowerMessage.includes('blog') || lowerMessage.includes('article') || lowerMessage.includes('write') || lowerMessage.includes('medium')) {
      return "Vishal writes insightful articles on Medium about AI, machine learning, and data science. Some of his popular articles include:<br><br>• Turbocharge Your Neural Networks<br>• Unlocking Neural Networks<br>• Mastering Model Training<br>• Offline vs Online Learning<br><br>You can read these articles on the Blogs page or visit his <a href='https://medium.com/@gorulevishal984' target='_blank'>Medium profile</a>.";
    }
    
    // Check for education inquiry
    if (lowerMessage.includes('education') || lowerMessage.includes('degree') || lowerMessage.includes('university') || lowerMessage.includes('college') || lowerMessage.includes('study')) {
      return "Vishal has a strong educational background in computer science and AI/ML. For specific details about his education, please check his resume which you can download from the website.";
    }
    
    // Check for resume inquiry
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      return "You can download Vishal's resume directly from the website. Look for the 'Download Resume' button on the home page or contact page.";
    }
    
    // Check for thanks
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! Is there anything else you'd like to know about Vishal?";
    }
    
    // Check for goodbye
    if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye') || lowerMessage.includes('see you')) {
      return "Goodbye! Feel free to return if you have more questions. Have a great day!";
    }
    
    // Default response for unrecognized queries
    return "I'm not sure I understand. Would you like to know about Vishal's skills, projects, or how to contact him?";
  }
}
