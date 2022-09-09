import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Headeritem from "./Headeritem";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <Headeritem title="HOME" Icon={HomeIcon} />
        <Headeritem title="TRENDING" Icon={LightningBoltIcon} />
        <Headeritem title="VERIFIED" Icon={BadgeCheckIcon} />
        <Headeritem title="COLLECTIONS" Icon={CollectionIcon} />
        <Headeritem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <div className="text-4xl font-style: italic font-bold">YOU-STREAM</div>
    </header>
  );
}

export default Header;
