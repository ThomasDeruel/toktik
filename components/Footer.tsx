import React from "react";
import { footerList1, footerList2, footerList3 } from "../utils/constants";

const List = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-3 mt-5">
    {items.map((item) => (
      <p
        className="text-gray-500 text-sm hover:underline cursor-pointer"
        key={item}
      >
        {item}
      </p>
    ))}
  </div>
);
const Footer = () => {
  return (
    <div className="mt-6 hidden xl:block">
      <List items={footerList1} />
    </div>
  );
};

export default Footer;
