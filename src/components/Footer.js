import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer className='footer-copyright cyan darken-2 black-text'>
                <div style={{ textAlign: 'center' }} className='container'>
                    {' '}
                    <p>
                        Made with by
                        <a
                            href='https://github.com/entofmd'
                            className='black-text'
                        >
                            {' '}
                            EntOfMD{' '}
                        </a>
                        <br />
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
