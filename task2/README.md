# Gemini Chat Playground

A friendly, chat-style React UI that lets you send prompts to Google Gemini (`gemini-1.5-flash`) through the Generative Language API. The interface mimics modern AI assistants with conversation bubbles, quick prompt suggestions, typing indicators, and Bootstrap-based styling.

## Features

- Conversational layout with distinct user/assistant bubbles
- Quick-start prompt chips for inspiration
- Loading / typing indicator while Gemini thinks
- Inline error handling and reset button
- Built with Vite + React and styled with Bootstrap 5

## Getting Started

```bash
npm install
npm run dev
```

Open the printed URL (usually `http://localhost:5173`) in your browser.

## Configure the Gemini API Key

1. Create a `.env` file in the project root.
2. Add your Gemini key (never commit real keys to version control):

```
VITE_GEMINI_API_KEY=your_gemini_key_here
```

3. Restart the dev server after changing environment variables.

## How It Works

- `src/App.jsx` manages the conversation state, renders the chat UI, and calls the Gemini API (via `@google/genai`) with the latest transcript plus a helpful system prompt.
- `src/App.css` and `src/index.css` contain the bespoke styling layered on top of Bootstrap.
- `src/main.jsx` bootstraps the React app and wires in Bootstrap’s stylesheet.

Feel free to customize the suggestions, prompt, model parameters, or visual design to fit your needs. Have fun experimenting with Gemini!
