import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">SHUBH</div>
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Mumbai, 400101, Maharastra, India.
          </p>
          <span className="font-semibold">shubh@gmail.com</span>
          <span className="font-semibold">+91 7790876543</span>
          <div className="flex gap-6">
            <Image
              src="/facebook.png"
              alt="Footer Icon"
              width={16}
              height={16}
            />
            <Image
              src="/instagram.png"
              alt="Footer Icon"
              width={16}
              height={16}
            />
            <Image
              src="/youtube.png"
              alt="Footer Icon"
              width={16}
              height={16}
            />
            <Image
              src="/pinterest.png"
              alt="Footer Icon"
              width={16}
              height={16}
            />
            <Image src="/x.png" alt="Footer Icon" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">About Us</Link>
              <Link href="/">Careers</Link>
              <Link href="/">Affiliates</Link>
              <Link href="/">Blog</Link>
              <Link href="/">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">New Arrivals</Link>
              <Link href="/">Accessories</Link>
              <Link href="/">Men</Link>
              <Link href="/">Women</Link>
              <Link href="/">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="/">Customer Service</Link>
              <Link href="/">My Account</Link>
              <Link href="/">Find a Store</Link>
              <Link href="/">Legal & Privacy</Link>
              <Link href="/">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-xl">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-shubh text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image
              src="/discover.png"
              alt="Payment Logo"
              width={40}
              height={20}
            />
            <Image
              src="/skrill.png"
              alt="Payment Logo"
              width={40}
              height={20}
            />
            <Image
              src="/paypal.png"
              alt="Payment Logo"
              width={40}
              height={20}
            />
            <Image
              src="/mastercard.png"
              alt="Payment Logo"
              width={40}
              height={20}
            />
            <Image src="/visa.png" alt="Payment Logo" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">&copy; 2024 Shubh Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">India | Hindi, English</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">$ USD</span>
          </div>
        </div>
      </div>
    </div>
  );
}