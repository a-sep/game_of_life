import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer style={{
                textAlign: 'center',
                fontSize: '0.7em',
                marginTop: 10,
                marginBottom: 10,
            }}>
            <p>You can read more about "Conway's Game of Life" <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">here</a></p>
                My account on CodePen: <a href="https://codepen.io/artur_sep/"
                    style={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: '#C51162',
                    }}>
                    <strong>@artur_sep</strong>
                </a> and GitHub: <a href="https://github.com/a-sep"
                    style={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: '#C51162',
                    }}>
                    <strong>@a-sep</strong>
                </a>
            </footer>
        )
    }
}

export default Footer