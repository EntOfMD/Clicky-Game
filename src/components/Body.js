import React, { Component } from 'react';

export default class Body extends Component {
    render() {
        return (
            <main role='main'>
                <div
                    className='card text-white bg-primary mb-3 mt-5'
                    style={{ height: '30vw' }}
                >
                    <div className='card-header'>Header</div>
                    <div className='card-body'>
                        <h4 className='card-title'>Primary card title</h4>
                        <p className='card-text'>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                    </div>
                </div>
                {/*  <div className='jumbotron'>
                    <h1>Navbar example</h1>
                    <p className='lead'>
                        This example is a quick exercise to illustrate how fixed
                        to top navbar works. As you scroll, it will remain fixed
                        to the top of your browser’s viewport.
                    </p>
                    <a
                        className='btn btn-lg btn-primary'
                        href='/docs/4.3/components/navbar/'
                        role='button'
                    >
                        View navbar docs &raquo;
                    </a>
                </div> */}
            </main>
        );
    }
}
