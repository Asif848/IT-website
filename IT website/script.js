//  // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//         behavior: 'smooth'
//       });
//     });
//   });

// // Chatbot Logic
// const chatbotContainer = document.getElementById('chatbot-container');
// const chatbotToggle = document.getElementById('chatbot-toggle');
// const chatbotClose = document.getElementById('chatbot-close');
// const chatbotMessages = document.getElementById('chatbot-messages');
// const chatbotInput = document.getElementById('chatbot-input');
// const chatbotSend = document.getElementById('chatbot-send');

// // Toggle Chatbot
// chatbotToggle.addEventListener('click', () => {
//   chatbotContainer.classList.toggle('active');
// });

// // Close Chatbot
// chatbotClose.addEventListener('click', () => {
//   chatbotContainer.classList.remove('active');
// });

// // Send Message
// chatbotSend.addEventListener('click', async () => {
//   const userMessage = chatbotInput.value.trim();
//   if (userMessage) {
//     addMessage(userMessage, 'user');
//     chatbotInput.value = '';

//     // Get AI Response
//     const botMessage = await getAIResponse(userMessage);
//     addMessage(botMessage, 'bot');
//   }
// });

// // Add Message to Chat
// function addMessage(message, sender) {
//   const messageElement = document.createElement('div');
//   messageElement.classList.add('message', sender);
//   messageElement.textContent = message;
//   chatbotMessages.appendChild(messageElement);
//   chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
// }

// // Get AI Response from Gemini API
// async function getAIResponse(userMessage) {
//   const apiKey = 'Your-Api-Key'; // Replace with your Gemini API key
//   const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}";

//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         contents: [
//           {
//             parts: [
//               {
//                 text: userMessage, // User's message
//               },
//             ],
//           },
//         ],
//       }),
//     });

//     const data = await response.json();

//     // Extract the AI's response from the Gemini API response
//     if (data.candidates && data.candidates.length > 0) {
//       return data.candidates[0].content.parts[0].text;
//     } else {
//       throw new Error('No response from Gemini API');
//     }
//   } catch (error) {
//     console.error('Error fetching AI response:', error);
//     return 'Sorry, I am unable to process your request at the moment.';
//   }
// }

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Chatbot Logic
const chatbotContainer = document.getElementById('chatbot-container');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Toggle Chatbot
chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('active');
});

// Close Chatbot

    chatbotClose.addEventListener('click', () => {
        chatbotContainer.classList.remove('active');
    });


// Send Message
chatbotSend.addEventListener('click', async () => {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user');
        chatbotInput.value = '';

        // Get AI Response
        const botMessage = await getAIResponse(userMessage);
        addMessage(botMessage, 'bot');
    }
});

// Add Message to Chat
function addMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Get AI Response from Gemini API
async function getAIResponse(userMessage) {
    const apiKey = 'Your-Api-Key'; // Replace with your valid Gemini API key
    const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyDKLqlVceIv5keriZXirgV1hZ3k7n5DmLY";

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: userMessage, // User's message
                            },
                        ],
                    },
                ],
            }),
        });

        const data = await response.json();

        // Debugging - Log API response
        console.log('API Response:', data);

        // Extract the AI's response from the Gemini API response
        if (data && data.candidates && data.candidates.length > 0) {
            return data.candidates[0].content.parts[0].text;
        } else {
            return 'Sorry, I am unable to process your request at the moment.';
        }
    } catch (error) {
        console.error('Error fetching AI response:', error);
        return 'Error connecting to AI service. Please try again later.';
    }
}
