import React from "react"
function Footer(){
    var date=new Date();
    return(
        <footer>
            <p>copyright ⓒ {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer;