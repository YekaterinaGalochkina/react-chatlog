import './App.css';
import ChatEntry from './components/ChatEntry';
import data from './data/messages.json';

const App = () => {
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {data.map((entry) => {
          return (
            <ChatEntry
              key={entry.id}
              sender={entry.sender}
              body={entry.body}
              timeStamp={entry.timeStamp}
            />
          );
        })}
        {/*
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
