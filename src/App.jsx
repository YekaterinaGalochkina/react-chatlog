import './App.css';
import ChatLog from './components/ChatLog';
import data from './data/messages.json';
import { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState(data);

  const handleLikesChange = (id) => {
    const updatedMessage = messages.map(message => {
      if (message.id === id) {
        return { ...message, liked: !message.liked};
      }
      return message;
    });
    setMessages(updatedMessage);
  };

  const calculateHearts = () => {
    let countOfHearts = 0;
    for (const message of messages){
      if (message.liked) {
        countOfHearts++;
      }
    }
    return countOfHearts;
  };

  const heartCount = calculateHearts();

  return (
    <div id="App">
      <header>
        <h1>Chatlog between Vladimir and Estragon</h1>
      </header>
      <main>
        <div className="heart-count">
          <span>{heartCount}❤️s</span>
        </div>
        <ChatLog
          entries={messages}
          onLikesChange={handleLikesChange}
        />
      </main>
    </div>
  );
};

export default App;
