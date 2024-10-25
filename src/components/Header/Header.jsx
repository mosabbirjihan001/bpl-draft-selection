/* eslint-disable react/prop-types */

const Header = ({ addAmount }) => {
  return (
    <div>
      {/* Header image */}

      <div
        className="hero min-h-[400px] bg-black bg-[url(../../../../../assets/bg-shadow.png)] flex flex-col justify-center items-center rounded-3xl"
        style={{
          backgroundImage: "../../../assets/bg-shadow.png",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <img
              className="ml-20 mb-4"
              src="../assets/banner-main.png"
              alt=""
            />
            <h1 className="mb-5 text-5xl font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="mb-5">Beyond Boundaries Beyond Limits</p>
            <button onClick={() => addAmount()} className="btn bg-yellow-300">
              Claim Free Credit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
