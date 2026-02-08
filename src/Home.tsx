import { useState } from 'react'
import './Home.css'
import Header from "./components/Header"
import ContactCard from "./components/ContactCard"
import externalLink from "./assets/img/external_link.svg"
import tomenetImg from "./assets/img/tomenet.webp"
import gameFacesImg from "./assets/img/game-faces.webp"
import potionsellerImg from "./assets/img/potionseller.webp"
import monkeymanImg from "./assets/img/monkeyman.webp"
import jggImg from "./assets/img/jgg.webp"

function Home() {
    const [contactOpen, setContactOpen] = useState(false)

    return (
        <div className='px-4 py-10'>
            <Header onContactClick={() => setContactOpen(true)} />
            <ContactCard isOpen={contactOpen} onClose={() => setContactOpen(false)} />
            <div className='flex items-center'>
            <h1 className='text-left mb-3 mr-3'>hi, i'm <span className='text-[#eb6f92] font-bold'>lukas</span></h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium my-6">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for work!
            </div>
            </div>
            <p className='text-lg md:text-2xl'>a multidisciplinary developer with an interest in many subjects. right now, i'm focusing on <span className='font-medium text-[#f6c177]'>web development</span>, and specializing in full-stack <span className='font-medium text-[#9ccfd8]'>TypeScript</span>. i want to make cool things before i die. check out my projects below!</p>
            <div className='flex gap-6 md:gap-8 mt-6 md:mt-8'>
                <a href='mailto:lukasethanparedes@gmail.com' className='text-[#908caa] hover:text-[#c4a7e7] transition-colors duration-200'>
                    <svg className='w-12 h-12' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 18L9 12M20 18L15 12M3 8L10.225 12.8166C10.8665 13.2443 11.1872 13.4582 11.5339 13.5412C11.8403 13.6147 12.1597 13.6147 12.4661 13.5412C12.8128 13.4582 13.1335 13.2443 13.775 12.8166L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
                <a href='https://github.com/wwwdotfriend' target='_blank' className='text-[#908caa] hover:text-[#c4a7e7] transition-colors duration-200'>
                    <svg className='w-12 h-12' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.29183 21V18.4407L9.3255 16.6219C9.36595 16.0561 9.58639 15.5228 9.94907 15.11C9.95438 15.1039 9.95972 15.0979 9.9651 15.0919C9.9791 15.0763 9.96988 15.0511 9.94907 15.0485C7.52554 14.746 5.0005 13.7227 5.0005 9.26749C4.9847 8.17021 5.3427 7.10648 6.00437 6.27215C6.02752 6.24297 6.05103 6.21406 6.07492 6.18545C6.10601 6.1482 6.11618 6.09772 6.10194 6.05134C6.10107 6.04853 6.10021 6.04571 6.09935 6.04289C6.0832 5.9899 6.06804 5.93666 6.05388 5.88321C5.81065 4.96474 5.86295 3.98363 6.20527 3.09818C6.20779 3.09164 6.21034 3.08511 6.2129 3.07858C6.22568 3.04599 6.25251 3.02108 6.28698 3.01493C6.50189 2.97661 7.37036 2.92534 9.03298 4.07346C9.08473 4.10919 9.13724 4.14609 9.19053 4.18418C9.22901 4.21168 9.27794 4.22011 9.32344 4.20716C9.32487 4.20675 9.32631 4.20634 9.32774 4.20593C9.41699 4.18056 9.50648 4.15649 9.59617 4.1337C11.1766 3.73226 12.8234 3.73226 14.4038 4.1337C14.4889 4.1553 14.5737 4.17807 14.6584 4.20199C14.6602 4.20252 14.6621 4.20304 14.6639 4.20356C14.7174 4.21872 14.7749 4.20882 14.8202 4.17653C14.8698 4.14114 14.9187 4.10679 14.967 4.07346C16.6257 2.92776 17.4894 2.9764 17.7053 3.01469C17.7404 3.02092 17.7678 3.04628 17.781 3.07946C17.7827 3.08373 17.7843 3.08799 17.786 3.09226C18.1341 3.97811 18.1894 4.96214 17.946 5.88321C17.9315 5.93811 17.9159 5.9928 17.8993 6.04723C17.8843 6.09618 17.8951 6.14942 17.9278 6.18875C17.9289 6.18998 17.9299 6.19121 17.9309 6.19245C17.9528 6.21877 17.9744 6.24534 17.9956 6.27215C18.6573 7.10648 19.0153 8.17021 18.9995 9.26749C18.9995 13.747 16.4565 14.7435 14.0214 15.015C14.0073 15.0165 14.001 15.0334 14.0105 15.0439C14.0141 15.0479 14.0178 15.0519 14.0214 15.0559C14.2671 15.3296 14.4577 15.6544 14.5811 16.0103C14.7101 16.3824 14.7626 16.7797 14.7351 17.1754V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 17C4.36915 17.0523 4.72159 17.1883 5.03065 17.3975C5.3397 17.6068 5.59726 17.8838 5.7838 18.2078C5.94231 18.4962 6.15601 18.7504 6.41264 18.9557C6.66927 19.161 6.96379 19.3135 7.27929 19.4043C7.59478 19.4952 7.92504 19.5226 8.25112 19.485C8.5772 19.4475 8.89268 19.3457 9.17946 19.1855" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>
            </div>
            <div className='mt-12'>
                <div className='flex justify-between items-end'>
                    <h1 className='text-[#c4a7e7]'>my projects</h1>
                    <a href='https://github.com/wwwdotfriend' target='_blank' className='flex items-center gap-1 text-[#ebbcba] hover:underline'>
                        more on github
                        <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16488 17.6505C8.92513 17.8743 8.73958 18.0241 8.54996 18.1336C7.62175 18.6695 6.47816 18.6695 5.54996 18.1336C5.20791 17.9361 4.87912 17.6073 4.22153 16.9498C3.56394 16.2922 3.23514 15.9634 3.03767 15.6213C2.50177 14.6931 2.50177 13.5495 3.03767 12.6213C3.23514 12.2793 3.56394 11.9505 4.22153 11.2929L7.04996 8.46448C7.70755 7.80689 8.03634 7.47809 8.37838 7.28062C9.30659 6.74472 10.4502 6.74472 11.3784 7.28061C11.7204 7.47809 12.0492 7.80689 12.7068 8.46448C13.3644 9.12207 13.6932 9.45086 13.8907 9.7929C14.4266 10.7211 14.4266 11.8647 13.8907 12.7929C13.7812 12.9825 13.6314 13.1681 13.4075 13.4078M10.5919 10.5922C10.368 10.8319 10.2182 11.0175 10.1087 11.2071C9.57284 12.1353 9.57284 13.2789 10.1087 14.2071C10.3062 14.5492 10.635 14.878 11.2926 15.5355C11.9502 16.1931 12.279 16.5219 12.621 16.7194C13.5492 17.2553 14.6928 17.2553 15.621 16.7194C15.9631 16.5219 16.2919 16.1931 16.9495 15.5355L19.7779 12.7071C20.4355 12.0495 20.7643 11.7207 20.9617 11.3787C21.4976 10.4505 21.4976 9.30689 20.9617 8.37869C20.7643 8.03665 20.4355 7.70785 19.7779 7.05026C19.1203 6.39267 18.7915 6.06388 18.4495 5.8664C17.5212 5.3305 16.3777 5.3305 15.4495 5.8664C15.2598 5.97588 15.0743 6.12571 14.8345 6.34955" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                    </a>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
                    <div>
                        <a href='https://github.com/wwwdotfriend/tomenet' target='_blank'>
                            <div className='overflow-hidden rounded-lg relative group mb-3'>
                                <img src={tomenetImg} className='transition duration-300 group-hover:scale-120'></img>
                                <div className='absolute inset-0 bg-[#191724]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <img src={externalLink} className='w-10 h-10' />
                                </div>
                            </div>
                        </a>
                        <h2 className='mt-2'>TomeNet</h2>
                        <p className='text-[#908caa]'>A React/Tailwind dashboard and social media to supplement my homebrew D&D campaign.</p>
                    </div>
                    <div>
                        <a href='https://github.com/wwwdotfriend/game-faces' target='_blank'>
                            <div className='overflow-hidden rounded-lg relative group mb-3'>
                                <img src={gameFacesImg} className='transition duration-300 group-hover:scale-120'></img>
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
                                <img src={potionsellerImg} className='transition duration-300 group-hover:scale-120'></img>
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
                                <img src={monkeymanImg} className='transition duration-300 group-hover:scale-120'></img>
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
                                <img src={jggImg} className='transition duration-300 group-hover:scale-120'></img>
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
            <div className='mt-12'>
                <h3 className='text-center mb-6'>let's work together!</h3>
                <div className='flex gap-6 justify-center'>
                    <a href='mailto:lukasethanparedes@gmail.com' className='flex items-center gap-2 text-[#908caa] hover:text-[#eb6f92] transition-colors duration-200'>
                        <svg className='w-6 h-6' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22,5V9L12,13,2,9V5A1,1,0,0,1,3,4H21A1,1,0,0,1,22,5ZM2,11.154V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V11.154l-10,4Z"></path></svg>
                        email me
                    </a>
                    <a href='https://cal.com/lukasp' target='_blank' className='flex items-center gap-2 text-[#908caa] hover:text-[#eb6f92] transition-colors duration-200'>
                        <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z" fill="currentColor" /><path d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419L14.2069 5.53534C14.4129 4.81419 14.4129 4.81419 14.4129 4.81419L14.4144 4.81461L14.4159 4.81505L14.4192 4.81602L14.427 4.81834L14.4468 4.8245C14.4618 4.82932 14.4807 4.8356 14.5031 4.84357C14.548 4.85951 14.6074 4.88217 14.6802 4.91337C14.8259 4.97581 15.0249 5.07223 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C18.9126 8.95991 19.009 9.15897 19.0715 9.30466C19.1027 9.37746 19.1254 9.43682 19.1413 9.48173C19.1493 9.50418 19.1555 9.52301 19.1604 9.53809L19.1665 9.55788L19.1688 9.56563L19.1698 9.56896L19.1702 9.5705C19.1702 9.5705 19.1707 9.57194 18.4495 9.77798L19.1707 9.57194C19.2845 9.97021 19.0538 10.3853 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413L17.7276 9.98335C17.7223 9.96832 17.7113 9.93874 17.6928 9.89554C17.6558 9.8092 17.5887 9.66797 17.4771 9.47938C17.2541 9.10264 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.3169 6.39619 14.1757 6.32909 14.0893 6.29209C14.0461 6.27358 14.0165 6.26254 14.0015 6.25721L13.9907 6.25352C13.5987 6.13564 13.3729 5.72419 13.4857 5.3293Z" fill="currentColor" /></svg>
                        book a call
                    </a>
                </div>
            </div>
            <footer className='mt-6 text-center'>
                © 2026 Lukas Paredes / Internet Friend Studios
            </footer>
        </div>
    )
}

export default Home