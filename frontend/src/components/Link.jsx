// eslint-disable-next-line react/prop-types
const Link = ({ path, text, className, style }) => {
  return (
    <a href={path} className={className} style={style}>
      {text}
    </a>
  );
};

export default Link;
