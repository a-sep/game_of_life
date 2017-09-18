import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer style={{
                textAlign: 'center',
                fontSize: '0.7em',
                marginTop: 10,
            }}>
                coded by <a href="https://codepen.io/artur_sep/"
                    style={{
                        textAlign: 'center',
                        textDecoration: 'none',
                        color: '#00BCD4',

                    }}>
                    <strong>@a-sep</strong>
                </a>
            </footer>
        )
    }
}

export default Footer