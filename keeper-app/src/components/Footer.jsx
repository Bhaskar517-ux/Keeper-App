import React from 'react';

function Footer(){

    const cureentYear = new Date().getFullYear()
    return<footer>
    <p>
       Copyright © {cureentYear}
    </p>
    </footer>
}

export default Footer;