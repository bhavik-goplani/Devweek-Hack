let inputText = '';
let generatedText = '';

const generateText = async () => {
  const response = await fetch('/api/gpt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputText })
  });

  const data = await response.json();
  generatedText = data.generatedText;
};