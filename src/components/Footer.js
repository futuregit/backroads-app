import React from 'react';
import { footerLinks, pageLinks } from '../data';
import PageLink from './PageLink';
import SocialLink from './SocialLink';

function Footer(props) {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map((link) => {
                    return (
                        <PageLink key={link.id} iconType='footer-link' {...link} />
                    )
                })}
            </ul>
            <ul className="footer-icons">
                {footerLinks.map((link) => {
                    return (
                        <SocialLink key={link.id} iconType='footer-icon' {...link} />
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
}

export default Footer;