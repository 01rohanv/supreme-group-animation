import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex justify-between top-0 items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold ">
        <Image
          src={
            "https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
          }
          height={16}
          width={116}
          alt={"Logo"}
        />
      </div>
      <button className="bg-[#5cd6ff] text-black px-4 py-2 rounded-full">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
