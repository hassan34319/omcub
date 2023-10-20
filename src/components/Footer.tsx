const Footer: any = () => {
  return (
    <footer className="bg-black relative">
      <div className="max-w-6xl mx-auto py-6 text-center flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:flex items-center justify-between space-x-3 md:space-x-6 w-full">
          <div className="info">
            <div className="email text-white">
              <b className="mr-2">Contact info: </b>
              <span>Omcub@protonmail.com</span>
            </div>
          </div>
          <div className="follow flex justify-between mt-6">
            <a href="" className="mx-2">
              <img
                src="/images/facebook.svg"
                alt="tiktok"
                width={22}
                height={22}
              />
            </a>
            <a href="" className="mx-2">
              <img
                src="/images/twitter.svg"
                alt="tiktok"
                width={22}
                height={22}
              />
            </a>
            <a href="" className="mx-2">
              <img
                src="/images/instagram.svg"
                alt="tiktok"
                width={20}
                height={20}
              />
            </a>
            <a href="" className="mx-2">
              <img
                src="/images/tiktok.svg"
                alt="tiktok"
                width={18}
                height={18}
              />
            </a>
          </div>
          {/* <Link href="/about">
            <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
              FAQS
            </a>
          </Link>
          <Link href="/terms-of-sale">
            <a className="text-gray-800 hover:text-blue-600 p-1 transition text-sm">
              Terms of Sale
            </a>
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
