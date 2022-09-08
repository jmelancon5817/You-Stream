import { SearchIcon } from "@heroicons/react/outline";
import Headeritem from "./Headeritem";

function Search() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Headeritem title="SEARCH" Icon={SearchIcon} />
      </div>
    </header>
  );
}

export default Search;
