const FooterTop = ({ data }) => {
  return (
    <div className="w-full flex gap-2 flex-col p-3">
      <div className="w-full">
        <h1 className="text-sm my-1 text-black-col font-bold">From our site</h1>
        <p className="text-xs text-black-col">
          When your Meal Bites Back Tips for avoiding Food Positioning
        </p>

        <p className="text-xs text-black-col">
          Three Ways to Get travel Discounts
        </p>
      </div>

      <div className="w-full">
        <h1 className="text-sm my-1 text-black-col font-bold">Menu</h1>
        <ul>
          {data.navigations.map((menu, index) => {
            return (
              <li key={index}>
                <a href={menu.path} className="text-xs text-black-col">
                  {menu.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterTop;
