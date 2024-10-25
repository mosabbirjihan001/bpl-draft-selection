

const NewsTeller = () => {
    return (
      <div className="bg-gradient-to-r from-purple-300 via-blue-200 to-pink-200 p-10 rounded-lg shadow-lg mb-10">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-5">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="flex justify-center items-center gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gradient-to-r from-pink-500 to-orange-400 text-white font-medium px-5 py-2 rounded-lg hover:shadow-lg transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default NewsTeller ;