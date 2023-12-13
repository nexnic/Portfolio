// Navigation
    // Import 
    // Logo 
    import LogoImg from '../../../assets/Image/Logo/logo.svg'
    // React Router Dom
    import { Link } from 'react-router-dom'


function Navigation () {
    return (
        <nav className='navbar navbar-expand-lg'>
           <div className='container-fluid justify-content-between'>
                <div className='navbar-brand'>
                    <img src={LogoImg} alt="" />
                </div>
                <ul className='navbar-nav'>
                    <li 
                    className='nav-item'>
                        <a 
                            href=""
                            className='nav-link'>
                            <span>01. </span>
                            <span>About</span>
                        </a>
                    </li>
                    <li
                    className='nav-item'>
                        <a 
                            href=""
                            className='nav-link'>
                            <span>02. </span>
                            <span>experience</span>
                        </a>
                    </li>
                    <li
                    className='nav-item'>
                        <a 
                            href=""
                            className='nav-link'>
                            <span>03. </span>
                            <span>Project</span>
                        </a>
                    </li>
                </ul>
                <ul className='navbar-nav'>
                    <li 
                    className='nav-item'>
                        <Link 
                            to='https://www.linkedin.com/in/kent-erik-hole-330873195/'
                            className='nav-link'>
                                <i style={{color:'red'}}className="fa-brands fa-linkedin"></i>
                        </Link>
                    </li>
                    <li
                    className='nav-item'>
                        <Link 
                            to='https://github.com/nexnic'
                            className='nav-link'>
                            <i className="fa-brands fa-square-github"></i>
                        </Link>
                    </li>
                    <li
                    className='nav-item'>
                        <button className='btn btn-primary'>Resume</button>
                    </li>
                </ul>
           </div>

        </nav>
    )


}

export default Navigation