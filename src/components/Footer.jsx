import React from "react";
import tmdb from './tmdb.svg';

import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <p>
               Bu Projeyi Türkçeleştiren ve Düzenleyen
                <a
                    href="https://github.com/CyberWorldTr"
                    target="_blank"
                    rel="noopener noreferrer"
                > CyberWorldTr</a>,
                <br/>
                Api Desteği İçin Teşekkürler: <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"><img height="14"src={tmdb} alt="The Movie DB (TMDB)"></img></a>

            </p>
        </footer>
    );
};

export default Footer;
