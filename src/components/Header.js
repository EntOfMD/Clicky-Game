import React, { Component } from 'react';
import Score from './Score';

class Header extends Component {
    render() {
        return (
            <div className='navBarTop'>
                <nav
                    className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'
                    style={{ height: '7vw' }}
                >
                    <a
                        className='navbar-brand'
                        href='/'
                        style={{ fontSize: '30px' }}
                    >
                        Clicky Game
                    </a>
                    <span className='ml-auto'>Click the image to begin!</span>
                    <Score />
                </nav>
            </div>
        );
    }
}

export default Header;
