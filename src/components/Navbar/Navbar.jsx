/* eslint-disable react/prop-types */

const Navbar = ({ amount }) => {
  return (
    <div>
      {/* NavBar part */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="../assets/logo.png"
                  />
                </div>
              </div>
            </div>
          </a>
          <div className="flex  ml-[480px]">
            <button className="ml-16">Home</button>
            <button className="ml-16">Fixture</button>
            <button className="ml-16">Teams</button>
            <button className="ml-16">Schedules</button>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <button className="flex items-center text-xl font-bold">
              {amount.toLocaleString()} Coins
              <img
                className="h-8"
                src="../assets/icons8-coin-48.png"
                alt="coin image"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
