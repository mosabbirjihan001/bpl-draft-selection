

const Footer = () => {
  return (
    <footer className="bg-[#0D1321] text-white py-10">
    <div className="container mx-auto px-5">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src="../../../assets/logo-footer.png" 
          alt="Cricket Logo"
          className="h-16"
        />
      </div>
  
      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us Section */}
        <div className="mt-28">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-gray-400">
            We are a passionate team dedicated to providing the best services
            to our customers.
          </p>
        </div>
  
        {/* Home Links Section */}
        <div className="flex gap-10 mt-24 ml-40">
          <ul className="space-y-1">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>
  
        {/* Subscribe Section */}
        <div className="mt-28 ">
          <h3 className="text-lg font-semibold mb-2">Subscribe</h3>
          <p className="text-gray-400 mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none border border-gray-400"
            />
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium px-5 py-2 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>
      </div>
  
      <hr className="my-8 border-gray-700" />
  
      {/* Footer Links */}
      <div className="flex flex-col md:flex-row justify-center items-center text-gray-400">
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 Mosabbir Jihan. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;



