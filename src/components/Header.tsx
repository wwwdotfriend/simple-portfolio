export default function Header() {
    return (
            <header>
                <div className="flex h-32 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block" href="#">
                            <span className="sr-only">Home</span>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' className="rounded-full w-16 h-16"></img>
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav className="hidden md:block">
                            <ul className="flex items-center gap-6 text-lg">
                                <li>
                                    <a className="text-[#c4a7e7] transition hover:text-[#8b75a7]" href="#"> home </a>
                                </li>
                                <li>
                                    <a className="text-[#c4a7e7] transition hover:text-[#8b75a7]" href="#"> contact </a>
                                </li>                                
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}