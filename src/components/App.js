import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScore: 0, topScore: 0 };
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Header />
                    <Body />
                    <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
