import {SideBarItems} from "../utils/sidebar-items.ts"
const Sidebar = () => {

  return (
    <div className="bg-black border-r border-gray-700 text-white min-w-[250px] sticky top-20 left-0 h-screen relative">
      <div className="flex flex-col p-4">
        <ul>
          {SideBarItems.map((category) => (
            <li key={category.id} className="mb-4 cursor-pointer underline-animation text-gray-300 hover:text-gray-100">
              <a href={`/${category.route}`}>{category.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-20 p-4">
        <small>
          Created by <a href="https://twitter.com/codingpastor" className="underline-animation" target="_blank">Me</a>
           </small>
      </div>
    </div>
  );
};

export default Sidebar;
