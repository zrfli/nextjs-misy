import Link from "next/link";

export default function Header(){
    return (
        <nav className="bg-black fixed w-full z-20 top-0 start-0 border-b border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="space-x-2">
                        <span className="font-semibold text-3xl">Misy</span>
                        <span className="text-purple-400 text-[10px] font-semibold align-top">Scrapper Beta</span>
                    </div>
                </Link>
                <div className="flex md:order-2 space-x-3 md:space-x-5 rtl:space-x-reverse items-center">
                    <Link href="mailto:misy@misy.dev" className="block py-2 px-3 text-[#888888] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#888888]/70 text-sm dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                    <Link href="/login" className="text-sm text-white bg-black hover:bg-gray-900 border border-gray-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center">Log In</Link>
                </div>
            </div>
        </nav>
    );
}