import portraitImg from '../assets/img/portrait.webp'

interface HeaderProps {
    onContactClick: () => void
    isDark: boolean
    onThemeToggle: () => void
}

export default function Header({ onContactClick, isDark, onThemeToggle }: HeaderProps) {
    return (
            <header>
                <div className="flex h-32 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block group" href="/">
                            <span className="sr-only">Home</span>
                            <img src={portraitImg} className="rounded-full w-16 h-16 transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_var(--theme-iris-glow)]"></img>
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <nav>
                            <ul className="flex items-center gap-4 md:gap-6 text-base md:text-lg mr-3">
                                <li>
                                    <a className="text-theme-text transition hover:text-theme-icon-hover hover:underline" href="/"> home </a>
                                </li>
                                <li>
                                    <a className="text-theme-text transition hover:text-theme-icon-hover hover:underline cursor-pointer" onClick={onContactClick}> contact </a>
                                </li>
                            </ul>
                        </nav>
                        <button
                            onClick={onThemeToggle}
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer hover:scale-110 ${isDark ? 'bg-theme-iris text-theme-base hover:shadow-[0_0_14px_var(--theme-iris-glow)]' : 'bg-theme-gold text-white hover:shadow-[0_0_14px_rgba(234,157,52,0.5)]'}`}
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M12 21V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M22 12L21 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M3 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M19.0708 4.92969L18.678 5.32252" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M5.32178 18.6777L4.92894 19.0706" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M19.0708 19.0703L18.678 18.6775" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M5.32178 5.32227L4.92894 4.92943" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M6.34141 10C6.12031 10.6256 6 11.2987 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C11.2987 6 10.6256 6.12031 10 6.34141" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>
    )
}
