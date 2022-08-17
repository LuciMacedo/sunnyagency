import { useState } from 'react'
import { Logo } from './Logo'
import { Link } from 'react-router-dom'

export function Header() {
    const [isActive, setActive] = useState(false)


    const toggleMenu = () => {
        setActive(!isActive)
    }

    return (
        <div className='sHeader'>

            <nav className="sWrapper">
                <Logo />
                    <div className={ isActive ?  "sTriangle" : "" }></div>
                    <ul className= { !isActive ? 'sNavMenu' :'sMobileMenu' }>
                        <li>
                            <Link to='/'> About </Link>
                        </li>
                        <li>
                            <Link to='/'> Services </Link>
                        </li>
                        <li>
                            <Link to='/'> Projects </Link>
                        </li>
                        <li>
                            <Link to='/'> Contact </Link>
                        </li>
                    </ul>
            

                <div className= 'sHumburguer' onClick={toggleMenu}>
                    <svg  width="24" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z" fill="#FFF" fillRule="evenodd" />
                    </svg>
                </div>

            </nav>

            <section className="sTitle">
                <h3>We are creatives</h3>
            </section>

            <div className="sArrow">
                <svg className='sMenuArrow' width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15" /></g>
                </svg>
            </div>

        </div>
    )
}