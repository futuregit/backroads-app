import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'


export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
    {id: 1, href: 'https://twitter.com', icon: 'fab fa-twitter'},
    {id: 2, href: 'https://twitter.com', icon: 'fab fa-squarespace'},
    {id: 3, href: 'https://twitter.com', icon: 'fab fa-squarespace'},
];

const serviceText = "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
"Asperiores, officia.";

export const services = [
    {id: 1, title: 'endless hiking', icon: 'fas fa-tree fa-fw', text: serviceText},
    {id: 2, title: 'saving money', icon: 'fas fa-wallet fa-fw', text: serviceText},
    {id: 3, title: 'amazing comfort', icon: 'fas fa-socks fa-fw', text: serviceText},
];

export const tourlist = [
    {
        id: 1, 
        imageHref: tour1, 
        date: 'august 26th, 2020', 
        title: 'Tibet Adventure',
        country: 'china',
        days: 6 ,
        cost: 2100,

    },
    {
        id: 2, 
        imageHref: tour2, 
        date: 'october 1th, 2020', 
        title: 'best of java',
        country: 'indonesia',
        days: 11,
        cost: 1400,

    },
    {
        id: 3, 
        imageHref: tour3, 
        date: 'september 15th, 2020', 
        title: 'explore hong kong',
        country: 'hong kong',
        days: 8,
        cost: 5000,

    },
    {
        id: 4, 
        imageHref: tour4, 
        date: 'december 5th, 2019', 
        title: 'kenya highlights',
        country: 'kenya',
        days: 20,
        cost: 3300,

    },
];

export const footerLinks = [
    {id: 1, href: 'https://twitter.com', icon: 'fab fa-twitter'},
    {id: 2, href: 'https://twitter.com', icon: 'fab fa-squarespace'},
    {id: 3, href: 'https://twitter.com', icon: 'fab fa-squarespace'},
];