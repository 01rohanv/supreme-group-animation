import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-blue-300 px-6 py-22 mx-auto font-manrope">
      <div className="ml-23 mb-15">
        {" "}
        <Image
          src={
            "https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
          }
          height={16}
          width={116}
          alt={"Logo"}
        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">APPLICATIONS</h4>
          <ul className="space-y-5">
            <li>Apparel</li>
            <li>Automotive</li>
            <li>Filtration</li>
            <li>Customised Solutions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">COMPANY</h4>
          <ul className="space-y-5">
            <li>Innovation</li>
            <li>Global Competency</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">MORE</h4>
          <ul className="space-y-5">
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">FOLLOW US</h4>
          <ul className="space-y-5">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Instagram</li>
            <li>Medium</li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
        <p>©2023. All Rights Reserved.</p>
        <p>Supreme house: 110, 16th Road, Chembur, Mumbai - 400071.</p>
      </div>
    </footer>
  );
};

export default Footer;
