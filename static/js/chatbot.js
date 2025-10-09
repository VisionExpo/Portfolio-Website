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
        "Tell me about Vishal's experience",
        "What's Vishal's GitHub?",
        "Show me Vishal's contact info"
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

    // Helper function for regex matching
    function match(pattern) {
      return new RegExp(pattern, 'i').test(message);
    }

    // Check for greetings
    if (match('hello|hi|hey|greetings|howdy|yo')) {
      return "Hello! I'm Vishal's virtual assistant. I can tell you about his skills, projects, experience, or how to contact him. What would you like to know?";
    }

    // Check for skills inquiry
    if (match('skill|expertise|technolog(y|ies)|tech( |-)stack')) {
      return "Vishal is skilled in various technologies including:<br><br>• <strong>Programming Languages:</strong> Python, SQL, JavaScript, HTML/CSS<br>• <strong>Machine Learning:</strong> TensorFlow, PyTorch, Scikit-learn, Keras<br>• <strong>Deep Learning:</strong> CNNs, RNNs, GANs, Transformers<br>• <strong>Computer Vision:</strong> OpenCV, Image Processing, Object Detection<br>• <strong>NLP:</strong> NLTK, spaCy, Hugging Face Transformers, LangChain<br>• <strong>Data Analysis:</strong> Pandas, NumPy, Matplotlib, Seaborn<br>• <strong>MLOps:</strong> Docker, Git, DVC, MLflow<br>• <strong>Cloud:</strong> AWS, Azure, Google Cloud<br>• <strong>Databases:</strong> MySQL, MongoDB, PostgreSQL<br><br>Would you like to know more about any specific skill area?";
    }

    // Check for specific skill inquiries
    if (match('python|programming language')) {
      return "Vishal is proficient in Python with over 4 years of experience. He uses Python for:<br><br>• Data analysis and visualization<br>• Machine learning model development<br>• Deep learning implementations<br>• Web application backends<br>• Automation and scripting<br><br>He's familiar with advanced Python concepts including decorators, generators, context managers, and OOP principles.";
    }

    if (match('machine learning|ml')) {
      return "Vishal has extensive experience in Machine Learning, including:<br><br>• <strong>Supervised Learning:</strong> Regression, Classification, Ensemble methods<br>• <strong>Unsupervised Learning:</strong> Clustering, Dimensionality Reduction, Anomaly Detection<br>• <strong>Frameworks:</strong> Scikit-learn, TensorFlow, PyTorch, Keras<br>• <strong>Model Deployment:</strong> Flask, FastAPI, TensorFlow Serving<br>• <strong>MLOps:</strong> Model versioning, monitoring, and maintenance<br><br>He has applied these skills in various domains including healthcare, agriculture, and finance.";
    }

    if (match('deep learning|neural network')) {
      return "Vishal specializes in Deep Learning with expertise in:<br><br>• <strong>Architectures:</strong> CNNs, RNNs, LSTMs, GRUs, Transformers<br>• <strong>Applications:</strong> Computer Vision, NLP, Time Series Analysis<br>• <strong>Frameworks:</strong> TensorFlow, PyTorch, Keras<br>• <strong>Techniques:</strong> Transfer Learning, Fine-tuning, Hyperparameter Optimization<br>• <strong>Advanced:</strong> GANs, Autoencoders, Self-supervised Learning<br><br>His projects demonstrate practical applications of these technologies in solving real-world problems.";
    }

    // Check for projects inquiry - general
    if (match('project|work|portfolio')) {
      return "Vishal has worked on several exciting projects:<br><br>• <strong>Potato Crop Disease Detection</strong> - Deep learning for plant disease identification<br>• <strong>Q&A System using Gemini-Pro API</strong> - AI-powered question answering<br>• <strong>Stock Price Prediction</strong> - ML for financial forecasting<br>• <strong>Solar Panel Fault Detection</strong> - Computer vision for maintenance<br>• <strong>Chicken Disease Detection</strong> - AI for poultry health monitoring<br><br>Would you like details about any specific project? You can also view these projects on his <a href='https://github.com/VisionExpo' target='_blank'>GitHub profile</a>.";
    }

    // Check for specific project inquiries
    if (match('potato|crop|plant disease')) {
      return "<strong>Potato Crop Disease Detection</strong><br><br>This project uses deep learning to identify diseases in potato plants from images. Key features:<br><br>• Built with TensorFlow and Keras using CNN architecture<br>• Trained on a dataset of 2,000+ potato plant images<br>• Detects Early Blight, Late Blight, and healthy plants with 97% accuracy<br>• Deployed as a web application with Flask<br>• Includes a mobile-friendly interface for farmers to use in the field<br><br>The project aims to help farmers identify plant diseases early to prevent crop loss. You can view the code on <a href='https://github.com/VisionExpo/potato-disease-classification' target='_blank'>GitHub</a>.";
    }

    if (match('chicken|poultry')) {
      return "<strong>Chicken Disease Detection</strong><br><br>This project uses computer vision to detect diseases in chickens from images. Key features:<br><br>• Implemented using PyTorch with a ResNet50 backbone<br>• Trained on a dataset of chicken images showing various health conditions<br>• Detects common poultry diseases with 94% accuracy<br>• Includes a CI/CD pipeline for model deployment<br>• Features a user-friendly web interface for veterinarians<br><br>The system helps poultry farmers and veterinarians quickly identify health issues in chickens, enabling early treatment. You can explore the project on <a href='https://github.com/VisionExpo/Chicken_Disease_Detection' target='_blank'>GitHub</a>.";
    }

    if (match('solar|panel|fault detection')) {
      return "<strong>Solar Panel Fault Detection</strong><br><br>This project uses computer vision to detect faults in solar panels from aerial imagery. Key features:<br><br>• Built with TensorFlow and OpenCV<br>• Uses a custom object detection model to identify cracks, hotspots, and soiling<br>• Processes drone imagery to create maintenance reports<br>• Includes a dashboard for monitoring solar farm health<br>• Achieves 91% accuracy in fault identification<br><br>The system helps solar farm operators reduce maintenance costs and improve energy output by identifying issues early. You can view the project on <a href='https://github.com/VisionExpo/solar-panel-fault-detection' target='_blank'>GitHub</a>.";
    }

    if (match('q&a|gemini|question answering')) {
      return "<strong>Q&A System using Gemini-Pro API</strong><br><br>This project is an AI-powered question answering system built with Google's Gemini-Pro API. Key features:<br><br>• Integrates with Google's Gemini-Pro large language model<br>• Provides accurate answers to natural language questions<br>• Includes context-aware responses with citation support<br>• Features a clean, user-friendly web interface<br>• Supports document upload for domain-specific questions<br><br>The system demonstrates practical applications of large language models in information retrieval and knowledge management.";
    }

    if (match('stock|price prediction|financial')) {
      return "<strong>Stock Price Prediction</strong><br><br>This project uses machine learning to forecast stock prices. Key features:<br><br>• Implements LSTM and GRU neural networks for time series forecasting<br>• Incorporates technical indicators and sentiment analysis<br>• Processes historical price data and news sentiment<br>• Includes backtesting framework to evaluate model performance<br>• Features an interactive dashboard for visualizing predictions<br><br>The system helps investors make more informed decisions by providing data-driven price forecasts with confidence intervals.";
    }

    // Check for GitHub inquiry
    if (match('github|repository|code')) {
      return "You can explore Vishal's code and projects on his GitHub profile:<br><br>• <strong>GitHub:</strong> <a href='https://github.com/VisionExpo' target='_blank'>github.com/VisionExpo</a><br><br>His repositories showcase his work in machine learning, deep learning, computer vision, and more. Some notable repositories include:<br><br>• <a href='https://github.com/VisionExpo/Chicken_Disease_Detection' target='_blank'>Chicken Disease Detection</a><br>• <a href='https://github.com/VisionExpo/solar-panel-fault-detection' target='_blank'>Solar Panel Fault Detection</a><br>• <a href='https://github.com/VisionExpo/Portfolio-Website' target='_blank'>Portfolio Website</a> (this website)<br><br>Feel free to star or fork any projects that interest you!";
    }

    // Check for contact inquiry
    if (match('contact|reach')) {
      return "You can contact Vishal through:<br><br>• <strong>Email:</strong> <a href='mailto:gorulevishal984@gmail.com'>gorulevishal984@gmail.com</a><br>• <strong>Phone:</strong> <a href='tel:+919172838972'>+91 9172838972</a><br>• <strong>Location:</strong> Pune, Maharashtra, India<br>• <strong>LinkedIn:</strong> <a href='https://www.linkedin.com/in/vishal-gorule/' target='_blank'>linkedin.com/in/vishal-gorule</a><br>• <strong>Instagram:</strong> <a href='https://www.instagram.com/vishu_gorule_0909/' target='_blank'>instagram.com/vishu_gorule_0909</a><br><br>You can also use the contact form on the <a href='contact.html'>Contact page</a> to send him a message directly.";
    }

    // Check for specific contact information requests
    if (match('email|mail')) {
      return "Vishal's email address is <a href='mailto:gorulevishal984@gmail.com'>gorulevishal984@gmail.com</a>. Feel free to reach out for project inquiries, collaboration opportunities, or just to say hello!";
    }

    if (match('phone|call|number')) {
      return "You can reach Vishal by phone at <a href='tel:+919172838972'>+91 9172838972</a>. Please note that he prefers initial contact via email for professional inquiries.";
    }

    if (match('linkedin')) {
      return "You can connect with Vishal on LinkedIn at:<br><br><a href='https://www.linkedin.com/in/vishal-gorule/' target='_blank'>linkedin.com/in/vishal-gorule</a><br><br>Feel free to send a connection request with a brief message introducing yourself.";
    }

    // Check for Instagram inquiry
    if (match('instagram|insta')) {
      return "You can follow Vishal on Instagram at:<br><br><a href='https://www.instagram.com/vishu_gorule_0909/' target='_blank'>instagram.com/vishu_gorule_0909</a>";
    }

    // Check for experience inquiry
    if (match('experience|background|worked')) {
      return "Vishal specializes in building intelligent systems using machine learning and AI to solve real-world problems. His experience includes:<br><br>• <strong>Machine Learning Engineer</strong> - Developing and deploying ML models for various applications<br>• <strong>Data Scientist</strong> - Analyzing complex datasets to extract actionable insights<br>• <strong>Computer Vision Specialist</strong> - Creating image processing and object detection systems<br>• <strong>Full-Stack Developer</strong> - Building end-to-end web applications with ML capabilities<br><br>He has expertise in deep learning, data analysis, and full-stack development, with a focus on creating scalable and optimized solutions. His experience spans computer vision applications, natural language processing systems, and data analytics projects.";
    }

    // Check for blog inquiry
    if (match('blog|article|write|medium')) {
      return "Vishal writes insightful articles on Medium about AI, machine learning, and data science. Some of his popular articles include:<br><br>• <a href='https://medium.com/@gorulevishal984/turbocharge-your-neural-networks-a-comprehensive-guide-to-optimization-techniques-3f4f4e8b2353' target='_blank'>Turbocharge Your Neural Networks</a> - A guide to optimization techniques<br>• <a href='https://medium.com/@gorulevishal984/unlocking-neural-networks-a-beginners-guide-to-understanding-and-implementing-neural-networks-c6b2c5463c2f' target='_blank'>Unlocking Neural Networks</a> - A beginner's guide to neural networks<br>• <a href='https://medium.com/@gorulevishal984/mastering-model-training-essential-techniques-for-effective-machine-learning-7f88c4358568' target='_blank'>Mastering Model Training</a> - Essential techniques for effective ML<br>• <a href='https://medium.com/@gorulevishal984/offline-learning-vs-online-learning-in-machine-learning-whats-the-difference-db5a09ebe6a' target='_blank'>Offline vs Online Learning</a> - Understanding different learning approaches<br><br>You can read these articles on the <a href='blogs.html'>Blogs page</a> or visit his <a href='https://medium.com/@gorulevishal984' target='_blank'>Medium profile</a>.";
    }

    // Check for education inquiry
    if (match('education|degree|university|college|study')) {
      return "Vishal's educational background includes:<br><br>• <strong>Bachelor of Engineering in Computer Science</strong><br>• <strong>Specialization in Artificial Intelligence and Machine Learning</strong><br>• <strong>Certifications:</strong> TensorFlow Developer, AWS Machine Learning Specialist, Deep Learning Specialization<br><br>He continuously enhances his skills through online courses, research papers, and hands-on projects. For more details about his education and certifications, please check his <a href='https://www.linkedin.com/in/vishal-gorule/' target='_blank'>LinkedIn profile</a> or download his resume from the website.";
    }

    // Check for resume inquiry
    if (match('resume|cv')) {
      return "You can download Vishal's resume by clicking the 'Download Resume' button on the home page. His resume includes detailed information about his:<br><br>• Professional experience<br>• Technical skills<br>• Educational background<br>• Projects and achievements<br>• Certifications<br><br>If you're interested in collaborating or have job opportunities, feel free to reach out via email after reviewing his qualifications.";
    }

    // Check for location inquiry
    if (match('location|based|live|from')) {
      return "Vishal is based in Pune, Maharashtra, India. He is open to:<br><br>• Remote work opportunities<br>• Relocation for the right position<br>• Freelance and contract projects<br>• International collaborations<br><br>Feel free to reach out regardless of your location, as he has experience working with distributed teams across different time zones.";
    }

    // Check for thanks
    if (match('thank|thanks|thank you|thx')) {
      return "You're welcome! I'm happy to help. Is there anything else you'd like to know about Vishal's skills, projects, or how to contact him?";
    }

    // Check for goodbye
    if (match('bye|goodbye|see you|cya|later')) {
      return "Goodbye! Feel free to return if you have more questions. Have a great day!";
    }

    // Default response for unrecognized queries
    return "I'm not sure I understand. I can tell you about Vishal's skills, projects, experience, education, or how to contact him. What would you like to know?";
  }
}
