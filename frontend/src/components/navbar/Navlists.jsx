import Link from '../Link.jsx';

// eslint-disable-next-line react/prop-types
const Navlists = ({ data }) => {
  return (
    <div className="hidden lg:flex">
      <ul className="flex gap-5">
        {data.navigations.map((navigation, index) => {
          return (
            <li key={index}>
              <Link
                text={navigation.title}
                path={navigation.path}
                className={
                  'text-black-col dark:text-white-darkmode text-base font-semibold hover:font-bold'
                }
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navlists;
