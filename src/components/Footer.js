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
                coded by <a href="https://codepen.io/artur_sep/"
                    style={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: '#C51162',
                    }}>
                    <strong>@sep_artur</strong>
                </a>
            </footer>
        )
    }
}

export default Footer