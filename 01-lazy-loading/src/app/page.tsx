import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-xl w-full text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-4">Welcome to Shopper ME</h1>
        <p className="text-lg mb-6">Your one-stop shop for <span className="font-semibold">Clothes</span>, <span className="font-semibold">Electronics</span>, and <span className="font-semibold">Shoes</span>.</p>
        <ul className="flex justify-center gap-6 mb-8">
          <li className="bg-blue-100 px-4 py-2 rounded-full text-blue-700 font-medium">Clothes</li>
          <li className="bg-green-100 px-4 py-2 rounded-full text-green-700 font-medium">Electronics</li>
          <li className="bg-yellow-100 px-4 py-2 rounded-full text-yellow-700 font-medium">Shoes</li>
        </ul>
        <Link href="/products">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Explore</button>
        </Link>
      </div>
    </div>
  );
}
