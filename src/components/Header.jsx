import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
  const participants = [];

  for (let i = 0; i <= props.data.length-1; i++) {
    const sender = props.data[i].sender;

    if (!participants.includes(sender)) {
      participants.push(sender);
    }
  }

  const header = `Chatlog between ${participants[0]} and ${participants[1]}`;

  return (
    <div className='header'>
      <h1>{header}</h1>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.array.isRequired
};

export default Header;