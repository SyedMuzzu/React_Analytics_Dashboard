import React, { useState } from 'react'
import { Link } from '@reach/router'

function ResponsiveNavigation ({ navLinks, background, hoverBackground, linkColor, logo, children }) {
    const [ hoverIndex, setHoverIndex ] = useState(-1)
    // eslint-disable-next-line no-unused-vars
    const [ navOpen, setNavOpen ] = useState(undefined)

    return (
        <nav
            className="responsive-toolbar"
            style={{ background }}>
            <ul
                style={{ background }}
                className={ navOpen ? 'active' : '' }>
                
                {navLinks.map((link, index) => 
                    <li
                        key={index}
                        onMouseEnter={ () => setHoverIndex(index) }
                        onMouseLeave={ () => setHoverIndex(-1) }
                        style={{ background: hoverIndex === index ? (hoverBackground || '#999') : '' }}
                    >
                        <Link
                            to={link.path}
                            style={{ color: linkColor }}
                        >
                            { link.text }
                            <i className={link.icon} />
                        </Link>
                    </li>    
                )}
                { children }
            </ul>
        </nav>
    )
}

export default ResponsiveNavigation