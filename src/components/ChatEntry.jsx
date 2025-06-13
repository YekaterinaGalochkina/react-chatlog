import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const like = props.liked ? '❤️' : '🤍';

  const chatEntry = props.sender === 'Vladimir' ? 'chat-entry local' : 'chat-entry remote';

  return (
    <div className={chatEntry}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp
            time={props.timeStamp}
          />
        </p>
        <button className="like" onClick={() => props.onLikesChange(props.id)}>
          {like}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  onLikesChange: PropTypes.func.isRequired
};

export default ChatEntry;
