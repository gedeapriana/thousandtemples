import '../css/header.css';

const Header = ({ text, addClass }) => {
  return (
    <h1
      className={`font-bold gradientText mb-2 text-lg md:text-2xl ${addClass}`}
    >
      {text}
    </h1>
  );
};

export default Header;
