import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center px-4">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img className="w-full h-full object-cover" src="./background.jpg" alt="" />
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                </div>

                {/* Glassmorphic Card */}
                <div className="backdrop-blur-lg bg-black rounded-lg w-[400px]">
                    {/* Banner & Avatar */}
                    <div className="relative">
                        <img className="w-full h-[150px] object-cover rounded-t-lg" src="./banner3.jpg" alt="" />
                        <img className="absolute -bottom-1/4 left-4 w-24 h-24 object-cover rounded-lg" src="./avatar.jpg" alt="" />
                    </div>

                    {/* Content */}
                    <div className="p-6 pt-12">
                        <div className="flex items-center gap-4">
                            <h1 className="text-white text-xl font-semibold">@x16u (catching)</h1>
                            <div className="flex border border-white/20 rounded-lg px-2 py-0.5">
                                <img className="w-5" src="https://cdn.discordapp.com/badge-icons/3aa41de486fa12454c3761e8e223442e.png" alt="Badge" />
                                <img className="w-5" src="https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png" alt="Badge" />
                                <img className="w-5" src="https://cdn.discordapp.com/badge-icons/7d9ae358c8c5e118768335dbe68b4fb8.png" alt="Badge" />
                            </div>
                        </div>
                        <p className="text-gray-500 mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="mt-3 border border-neutral-900 rounded-md flex items-center justify-between gap-2 px-4 py-2">
                            <div className="flex items-center gap-2">
                                <Link href={"/"}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-600 hover:fill-gray-500 transition-all duration-500" width="28" height="28" viewBox="0 0 24 24"><path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path></svg>
                                </Link>
                                <Link href={"https://github.com/x16u/"} target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-600 hover:fill-gray-500 transition-all duration-500" width="24" height="24" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                                </Link>
                            </div>
                            <div className="">
                                <img src="https://api.visitorbadge.io/api/visitors?path=x16u&labelColor=%23000000&countColor=%23000000" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
