import Link from "next/link";

const Scrollbar = () => {
  return (
    <div className="scrollbar border-b border-t border-gray-200">
      <div className="px-4">
        <div className="flex py-4 overflow-scroll">
          <div className="category active">
            <Link href="/collections/226">
              <button className="text-white bg-[#f15a31] px-4 py-2 text-sm rounded mr-2 w-max">
                Shop All
              </button>
            </Link>
          </div>
          {/* <div className="category">
            <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
              Short Sleeve
            </button>
          </div>
          <div className="category">
            <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
              Long Sleeve
            </button>
          </div>
          <div className="category">
            <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
              Sleeveless
            </button>
          </div>
          <div className="category">
            <button className="border border-[#d3c7c1] px-4 py-2 text-sm rounded mr-2 w-max">
              Tees
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
