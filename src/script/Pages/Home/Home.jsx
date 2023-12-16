// Import 
// HeroImg
import { Link } from 'react-router-dom'
//import HeroImg from '../../../assets/Image/Portfolio01.png'

/**
 * @name Home
 * @description This will be the Home page for this site
 * @returns Main 
 */



function Home () {
    return (
        <main className="container">
            <section id="About" className="content container">
                <div className='col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px'>
                    <div className='w-75'>
                        <h1>Kent Erik Hole</h1>
                        <p>
                        a passionate front-end developer. Im constantly honing my skills in both design and code, embracing the dynamic intersection of creativity and technology. Exploring new design ideas is a thrilling journey for me; its akin to the human experience of falling down and rising again. Each attempt is an opportunity to learn and grow, and I relish the challenges that come with it.
                        </p>
                    </div>
                    <div className="d-flex gap-3 justify-center mb-3">
                        <Link 
                            to='https://www.linkedin.com/in/kent-erik-hole-330873195/'
                            >
                                <i style={{color:'red'}}className="fa-brands fa-linkedin"></i>
                        </Link>
                        <Link 
                            to='https://github.com/nexnic'
                            >
                            <i className="fa-brands fa-square-github"></i>
                        </Link>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Resume</button>
                    </div>
                </div>
            </section>
            <section id="Experience">
                <h2>Experience</h2>
            </section>
            <section id="Project">
                <h2>Project</h2>
                <div>
                    <div className='card text-inherit decoration-none inline-flex flex-col border-1px border-solid rounded-15px duration relative'>
                        <div className='card-bg-img flex-1 flex flex-col p-25px rounded-15px'>
                            <div className='m-t-20px row justify-between items-center'>
                                <h3>Test</h3>
                                <div className='row'>
                                    <button>test</button>
                                </div>
                            </div>
                            <div className='bg-[var(--border)] h-1px m-y-10px'></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home