import './Home.css'
import Header from "./components/Header"

function Home() {
    return (
        <div className='px-4 pt-10'>
            <Header />
            <h1 className='text-left mb-3'>hi, i'm <span className='text-[#eb6f92] font-bold'>lukas</span></h1>
            <p className='text-2xl'>a multidisciplinary developer with an interest in many subjects. right now, i'm focusing on <span className='font-medium text-[#f6c177]'>web development</span>, and specializing in full-stack <span className='font-medium text-[#9ccfd8]'>TypeScript</span>. i want to make cool things before i die. check out my projects below!</p>
        </div>
    )
}

export default Home