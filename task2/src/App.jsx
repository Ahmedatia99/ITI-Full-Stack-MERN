import { useEffect, useMemo, useRef, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import "./App.css";


const MODEL = "gemini-2.5-flash";
const SYSTEM_PROMPT =
  "You are a friendly AI copilot. Keep responses conversational, actionable, and concise.";

const STARTER_MESSAGE = {
  id: "assistant-welcome",
  role: "assistant",
  content:
    "Hey there! I can help you brainstorm ideas, summarize docs, or craft plans. What would you like to talk about today?",
  timestamp: new Date().toISOString(),
};

const generateId = (prefix) => {
  const uuid = globalThis.crypto?.randomUUID?.();
  return uuid ?? `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
};


function App() {
  const [messages, setMessages] = useState([STARTER_MESSAGE]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const bottomRef = useRef(null);


  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);


  const formatForGemini = (history) =>
    history.map(({ role, content }) => ({
      role: role === "assistant" ? "model" : "user",
      parts: [{ text: content }],
    }));


  const handleSend = async (event) => {
    event.preventDefault();
    if (!prompt.trim() || loading) return;

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      setError("Missing API Key. Add VITE_GEMINI_API_KEY to your .env file.");
      return;
    }

    const userMessage = {
      id: generateId("user"),
      role: "user",
      content: prompt.trim(),
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setLoading(true);
    setError("");

    try {
      const ai = new GoogleGenAI({ apiKey });

      const response = await ai.models.generateContent({
        model: MODEL,
        contents: formatForGemini([...messages, userMessage]),
        config: {
          systemInstruction: {
            role: "system",
            parts: [{ text: SYSTEM_PROMPT }],
          },
          temperature: 0.2,
          topK: 40,
          topP: 0.95,
        },
      });

      const text =
        response.text ??
        response.candidates
          ?.flatMap((c) =>
            c.content?.parts?.map((p) => p.text || "").filter(Boolean) ?? []
          )
          ?.join("\n");

      if (!text) throw new Error("Empty response from Gemini.");

      const assistantMessage = {
        id: generateId("assistant"),
        role: "assistant",
        content: text.trim(),
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  const resetChat = () => {
    setMessages([STARTER_MESSAGE]);
    setPrompt("");
    setError("");
  };

  const formattedMessages = useMemo(
    () =>
      messages.map((msg) => ({
        ...msg,
        badge: msg.role === "assistant" ? "Gemini" : "You",
        bubbleClass: msg.role === "assistant" ? "assistant" : "user",
      })),
    [messages]
  );

  return (
    <div className="chat-shell">
      <div className="chat-window card shadow-lg border-0">

        {/* Header */}
        <header className="chat-header border-bottom">
          <h1 className="h4 fw-bold">YOU ASK , WE ANSWER</h1>
        </header>

        {/* Chat Body */}
        <section className="chat-body">
          {formattedMessages.map((m) => (
            <div key={m.id} className={`message-bubble ${m.bubbleClass}`}>
              <div className="d-flex justify-content-between mb-1">
                <span className={`badge ${m.role === "assistant" ? "bg-primary" : "bg-secondary"}`}>
                  {m.badge}
                </span>
                <span className="text-muted small">
                  {new Date(m.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </span>
              </div>
              {m.content.split("\n").map((p, i) => (
                <p key={i} className="mb-0">{p}</p>
              ))}
            </div>
          ))}

          {loading && (
            <div className="message-bubble assistant typing">
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </div>
          )}

          <span ref={bottomRef} />
        </section>

        {/* Footer */}
        <footer className="chat-footer border-top">
          {error && <div className="alert alert-danger py-2 mb-2">{error}</div>}

          <form onSubmit={handleSend} className="chat-form">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Write something..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
            />

            <div className="chat-actions">
              <button type="button" className="btn btn-outline-secondary" onClick={resetChat} disabled={loading}>
                Reset
              </button>
              <button type="submit" className="btn btn-primary" disabled={!prompt.trim() || loading}>
                {loading ? "Thinking…" : "Send"}
              </button>
            </div>
          </form>
        </footer>
      </div>
    </div>
  );
}

export default App;
