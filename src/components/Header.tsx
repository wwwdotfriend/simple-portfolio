import dogImg from "../assets/img/dog.jpg"

interface HeaderProps {
    onContactClick: () => void
}

export default function Header({ onContactClick }: HeaderProps) {
    return (
            <header>
                <div className="flex h-32 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block group" href="/">
                            <span className="sr-only">Home</span>
                            <img src={dogImg} className="rounded-full w-16 h-16 transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(196,167,231,0.6)]"></img>
                        </a>
                    </div>

                    <div className="flex items-center">
                        <nav>
                            <ul className="flex items-center gap-4 md:gap-6 text-base md:text-lg">
                                <li>
                                    <a className="text-[#e0def4] transition hover:text-[#c4a7e7] hover:underline" href="/"> home </a>
                                </li>
                                <li>
                                    <a className="text-[#e0def4] transition hover:text-[#c4a7e7] hover:underline cursor-pointer" onClick={onContactClick}> contact </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}
