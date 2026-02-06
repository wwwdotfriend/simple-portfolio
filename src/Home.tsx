import './Home.css'
import Header from "./components/Header"
import externalLink from "./assets/img/external_link.svg"

function Home() {
    return (
        <div className='px-4 py-10'>
            <Header />
            <h1 className='text-left mb-3'>hi, i'm <span className='text-[#eb6f92] font-bold'>lukas</span></h1>
            <p className='text-2xl'>a multidisciplinary developer with an interest in many subjects. right now, i'm focusing on <span className='font-medium text-[#f6c177]'>web development</span>, and specializing in full-stack <span className='font-medium text-[#9ccfd8]'>TypeScript</span>. i want to make cool things before i die. check out my projects below!</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium my-6">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for work!
            </div>
            <div className='mt-6'>
                <h1 className='text-[#c4a7e7]'>my projects</h1>
                <div className='grid grid-cols-2 gap-6 mt-6'>
                    <div>
                        <a href='https://github.com/wwwdotfriend/tomenet' target='_blank'>
                            <div className='overflow-hidden rounded-lg relative group mb-3'>
                                <img src='src/assets/img/tomenet.jpg' className='transition duration-300 group-hover:scale-120'></img>
                                <div className='absolute inset-0 bg-[#191724]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <img src={externalLink} className='w-10 h-10' />
                                </div>
                            </div>
                        </a>
                        <h2 className='mt-2'>TomeNet</h2>
                        <p className='text-[#908caa]'>A React + Tailwind website to supplement my homebrew D&D campaign. Includes a Twitter clone.</p>
                    </div>
                    <div>
                        <a href='https://github.com/wwwdotfriend/game-faces' target='_blank'>
                            <div className='overflow-hidden rounded-lg relative group mb-3'>
                                <img src='src/assets/img/game-faces.jpg' className='transition duration-300 group-hover:scale-120'></img>
                                <div className='absolute inset-0 bg-[#191724]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <img src={externalLink} className='w-10 h-10' />
                                </div>
                            </div>
                        </a>
                        <h2 className='mt-2'>Game Faces</h2>
                        <p className='text-[#908caa]'>A lightweight portrait switcher for Foundry Virtual Tabletop to enhance table RP.</p>
                    </div>
                    <div>
                        <a href='https://internetfriendstudios.itch.io/potion-seller' target='_blank'>
                            <div className='overflow-hidden rounded-lg relative group mb-3'>
                                <img src='src/assets/img/potionseller.jpg' className='transition duration-300 group-hover:scale-120'></img>
                                <div className='absolute inset-0 bg-[#191724]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <img src={externalLink} className='w-10 h-10' />
                                </div>
                            </div>
                        </a>
                        <h2 className='mt-2'>Potion Seller</h2>
                        <p className='text-[#908caa]'>A physics-based alchemy game created in 7-days for Pirate Jam 2025.</p>
                    </div>
                    <div>
                        <a href="https://internetfriendstudios.itch.io/cyclethon-america" target='_blank'>
                            <div className='overflow-hidden rounded-lg relative group mb-3'>
                                <img src='src/assets/img/monkeyman.jpg' className='transition duration-300 group-hover:scale-120'></img>
                                <div className='absolute inset-0 bg-[#191724]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <img src={externalLink} className='w-10 h-10' />
                                </div>
                            </div>
                        </a>
                        <h2 className='mt-2'>Cyclethon America</h2>
                        <p className='text-[#908caa]'>An infinite runner created in 3-days for Monkey Game Jam 2024.</p>
                    </div>
                    <div>
                        <a href="https://internetfriendstudios.itch.io/just-get-gambling" target='_blank'>
                            <div className='overflow-hidden rounded-lg relative group mb-3'>
                                <img src='src/assets/img/jgg.jpg' className='transition duration-300 group-hover:scale-120'></img>
                                <div className='absolute inset-0 bg-[#191724]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <img src={externalLink} className='w-10 h-10' />
                                </div>
                            </div>
                        </a>
                        <h2 className='mt-2'>Just Get Gambling!</h2>
                        <p className='text-[#908caa]'>A game about gambling on the clock. Created in 7-days for Shovel Jam 2025.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home