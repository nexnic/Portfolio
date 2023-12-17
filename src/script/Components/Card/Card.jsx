import Holidays from '../../../assets/Image/Holidaze.png'

function Card () {
    return (
        <div>
        <div className='card text-inherit decoration-none inline-flex flex-col duration relative p-3' style={{backgroundColor:'black', maxWidth: '250px'}}> 
            <div className='card-bg-img flex-1 flex flex-col pb-3 mb-3' style={{backgroundImage: `url(${Holidays})`, backgroundSize: 'cover', minWidth: '100%', minHeight:'200px'}}>
            </div>
            <div className='row justify-between text-center'>
                <h3 style={{color: 'white'}}>name of project</h3>
            </div>
            <div 
                className='d-flex gap-2 mb-2 justify-content-center'
            >
                <a 
                    href=""
                    aria-label="Github Link"
                    className='badge link' 
                    style={{color: 'black', backgroundColor: 'white'}}
                >
                    <i className="fa-brands fa-square-github"></i>
                    &nbsp;Github
                </a>
                <a 
                    href=""
                    aria-label="Websit Link"
                    className='badge link'
                    
                    style={{color: 'black', backgroundColor: 'white'}}
                    >
                    <i className="fa-solid fa-link"></i>
                    &nbsp;Live Demo
                </a>
            </div>
            <p 
                style={{color: 'white'}}
                className='text-center'    
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!
            </p>
            
            <div 
                className='d-flex justify-content-center gap-2'
            >
                <p 
                    className='badge' 
                    style={{color: 'white', backgroundColor: '#E96228'}}
                >
                    HTML
                </p>
                <p 
                    className='badge' 
                    style={{color: 'white', backgroundColor: '#1C88C8'}}
                >
                    CSS
                </p>
                <p 
                    className='badge' 
                    style={{color: 'white', backgroundColor: '#C76395'}}
                >
                    SASS
                </p>
                <p 
                    className='badge' 
                    style={{color: 'white', backgroundColor: '#08D9FF'}}
                >
                    REACT
                </p>
            </div>
        </div>
    </div>
    )
}

export default Card