import Hamburger from "hamburger-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const Hamburger1 = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname != "/menu") {
      setOpen(false);
    }
  }, [pathname]);

  const handleClick = () => {
    if (isOpen) {
      router.back();
    } else {
      router.push("/menu");
    }
    setOpen(!isOpen);
  };
  return (
    <div className="inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="fixed top-0 left-0 right-0 z-10 p-1 bg-gray-200 bg-opacity-50">
        <div className="flex justify-end">
          <Hamburger toggled={isOpen} toggle={handleClick}></Hamburger>
        </div>
      </div>
      <div className="p-8"></div>
    </div>
  );
};
export default Hamburger1;
