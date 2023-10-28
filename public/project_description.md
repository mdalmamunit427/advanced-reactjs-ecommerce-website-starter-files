# Project Description

This project is designed to [provide a brief description of your project].

## 1. Connect CSS & JS file to main.jsx file

import 'swiper/css';

**/_ bootstrap css _/**

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

**/_ fonts and icons _/**

import '././assets/css/icofont.min.css';
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

**/_ Add this css to App.css _/**

.nav-profile{
width: 40px;
height: 40px;
border-radius: 50%;
background: indigo;
cursor: pointer;
}

.page-item{
width: 46px;
height: 46px;
text-align: center;
border-radius: 50%;
box-shadow: 0px 2px 4px 0px rgba(0,0,0,.06);
background: #fff;
color: #101115;
display: flex;
justify-content: center;
align-items: center;
margin: 7px;
}

.github{
height: 36px;
width: 36px;
line-height: 36px;
transition: all .3s ease;
border-radius: 50%;
display: inline-flex;
justify-content: center;
align-items: center;
background: #0F9D58;
color: #fff;
}

## 2. Texts for Home Page

**/_ bannerList _/**

const bannerList = [
{
iconName: "icofont-users-alt-4",
text: "1.5 Million Customers",
},
{
iconName: "icofont-notification",
text: "More then 2000 Marchent",
},
{
iconName: "icofont-globe",
text: "Buy Anything Online",
},
];

**/_ About text _/**

const subTitle = "Why Choose Us";
const title = "Become a Marchant";
const desc = "Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn";
const btnText = "Apply Now";

const countList = [
{
iconName: 'icofont-users-alt-4',
count: '12600',
text: 'Marchant Enrolled',
},
{
iconName: 'icofont-graduate-alt',
count: '30',
text: 'Certified Courses',
},
{
iconName: 'icofont-notification',
count: '100',
text: 'Rewards and GitCards',
},
]

**/_ App Section _/**

const btnText = "Sign up for Free";
const title = "Learn Anytime, Anywhere";
const desc = "Take courses on your any device with our app & learn all time what you want. Just download & install & start to learn";

**/_ Category Tab_/**

const title = "Our Products";

const ProductData = [
{
imgUrl: 'src/assets/images/categoryTab/01.jpg',
cate: 'Shoes',
title: 'Nike Premier X',
author: 'assets/images/course/author/01.jpg',
brand: 'Nike',
price: '$199.00',
id: 1,
},
{
imgUrl: 'src/assets/images/categoryTab/02.jpg',
cate: 'Bags',
title: 'Asthetic Bags',
author: 'assets/images/course/author/02.jpg',
brand: 'D&J Bags',
price: '$199.00',
id: 2,
},
{
imgUrl: 'src/assets/images/categoryTab/03.jpg',
cate: 'Phones',
title: 'iPhone 12',
author: 'src/assets/images/categoryTab/brand/apple.png',
brand: 'Apple',
price: '$199.00',
id: 3,
},
{
imgUrl: 'src/assets/images/categoryTab/04.jpg',
cate: 'Bags',
title: 'Hiking Bag 15 Nh100',
author: 'assets/images/course/author/04.jpg',
brand: 'Gucci',
price: '$199.00',
id: 4,
},
{
imgUrl: 'src/assets/images/categoryTab/05.jpg',
cate: 'Shoes',
title: 'Outdoor Sports Shoes',
author: 'assets/images/course/author/05.jpg',
brand: 'Nike',
price: '$199.00',
id: 5,
},
{
imgUrl: 'src/assets/images/categoryTab/06.jpg',
cate: 'Beauty',
title: 'COSRX Snail Mucin',
author: 'assets/images/course/author/06.jpg',
brand: 'Zaara',
price: '$199.00',
id: 6,
},
{
imgUrl: 'src/assets/images/categoryTab/07.jpg',
cate: 'Bags',
title: 'Look Less Chanel Bag ',
author: 'assets/images/course/author/01.jpg',
brand: 'Gucci',
price: '$199.00',
id: 7,
},
{
imgUrl: 'src/assets/images/categoryTab/08.jpg',
cate: 'Shoes',
title: 'Casual Sneakers',
author: 'assets/images/course/author/02.jpg',
brand: 'Bata',
price: '$199.00',
id: 8,
},
]

**/_ Home Category _/**

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now";

const categoryList = [
{
imgUrl: 'src/assets/images/category/01.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'DSLR Camera',
},
{
imgUrl: 'src/assets/images/category/02.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Shoes',
},
{
imgUrl: 'src/assets/images/category/03.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Photography',
},
{
imgUrl: 'src/assets/images/category/04.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Formal Dress',
},
{
imgUrl: 'src/assets/images/category/05.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Colorful Bags',
},
{
imgUrl: 'src/assets/images/category/06.jpg',
imgAlt: 'category rajibraj91 rajibraj',
iconName: 'icofont-brand-windows',
title: 'Home Decor',
},
]

**/_ Selectet Category _/**

<option value="all">All Categories</option>
<option value="electronics">Electronics</option>
<option value="computer">Computer</option>
<option value="smart-home">Smart Home</option>
<option value="automotive">Automotive</option>
<option value="baby">Baby</option>
<option value="beauty">Beauty</option>
<option value="personal-care">Personal Care</option>
<option value="butcher-shop">Butcher Shop</option>
<option value="cafe">Cafe</option>
<option value="charity-2">Charity</option>
<option value="church">Church</option>
<option value="clinic">clinic</option>
<option value="college">College</option>
<option value="conference">Conference</option>
<option value="construction">Construction</option>
<option value="corona-virus">Corona Virus</option>
<option value="corporate">Corporate</option>
<option value="covid19">Covid19</option>
<option value="digital-products">Digital Products</option>
<option value="doctors">doctors</option>
<option value="ecological">Ecological</option>
<option value="education">Education</option>
<option value="entertainment">Entertainment</option>
<option value="environment">Environment</option>
<option value="environmental">Environmental</option>
<option value="events">Events</option>
<option value="fitness">Fitness</option>
<option value="food-shop">Food Shop</option>
<option value="free">Free</option>
<option value="gym">Gym</option>
<option value="halloween">Halloween</option>
<option value="health">health</option>
<option value="healthcare">healthcare</option>
<option value="learnpress">learnpress</option>
<option value="meat-shop">Meat Shop</option>
<option value="medical">medical</option>
<option value="medical-prevention">Medical Prevention</option>
<option value="meetup">Meetup</option>
<option value="mobile-apps">Mobile Apps</option>
<option value="music">Music</option>
<option value="news">News</option>
<option value="nonprofit">Nonprofit</option>
<option value="onepage">Onepage</option>
<option value="online-course">Online Course</option>
<option value="personal-blog">Personal Blog</option>
<option value="portfolio">Portfolio</option>
<option value="pregnancy">pregnancy</option>
<option value="premium">premium</option>
<option value="psd">psd</option>
<option value="religion">Religion</option>
<option value="restaurants">Restaurants</option>
<option value="school">School</option>
<option value="seo">SEO</option>
<option value="software">Software</option>
<option value="startups">Startups</option>
<option value="university">University</option>
<option value="vcard">Vcard</option>
<option value="woocommerce">WooCommerce</option>
<option value="yoga">Yoga</option>
<option value="magazine">Magazine</option>
<option value="event-wordpress">Event</option>

-------------Category done------------

**/_ LocationSprade _/**

const title = More Then 60,000 Customers;

const desc = "Buy products on your any device with our app & enjoy your time what you want. Just download & install & start to shopping";

const clientsList = [
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
{
imgUrl: '/src/assets/images/clients/avater.jpg',
imgAlt: 'education thumb rajibraj91 rajibraj',
text: 'Join with Us',
},
]

**/_ Home Sponsor _/**

const sponsorList = [
{
imgUrl: "/src/assets/images/sponsor/01.png",
},
{
imgUrl: "/src/assets/images/sponsor/02.png",
},
{
imgUrl: "/src/assets/images/sponsor/03.png",
},
{
imgUrl: "/src/assets/images/sponsor/04.png",
},
{
imgUrl: "/src/assets/images/sponsor/05.png",
},
{
imgUrl: "/src/assets/images/sponsor/06.png",
},
];


**/__ Footer __/**


const title = "About ShopCart";
const desc = "Eduaid theme number one world class university in the world There are student are studing always in this university for all time.";
const ItemTitle = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";

const addressList = [
    {
        iconName: 'icofont-google-map',
        text: 'New York, USA.',
    },
    {
        iconName: 'icofont-phone',
        text: '+880 123 456 789',
    },
    {
        iconName: 'icofont-envelope',
        text: 'info@shopcart.com',
    },
]

const socialList = [
    {
        iconName: 'icofont-facebook',
        siteLink: '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
        className: 'twitter',
    },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
        className: 'linkedin',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    },
    {
        iconName: 'icofont-pinterest',
        siteLink: '#',
        className: 'pinterest',
    },
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'Summer Sessions',
        link: '#',
    },
    {
        text: 'Events',
        link: '#',
    },
    {
        text: 'Gallery',
        link: '#',
    },
    {
        text: 'Forums',
        link: '#',
    },
    {
        text: 'Privacy Policy',
        link: '#',
    },
    {
        text: 'Terms of Use',
        link: '#',
    },
]

const tweetList = [
    {
        iconName: 'icofont-twitter',
        desc: <p>Aminur islam <a href="#">@ShopCart Greetings!  #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
    {
        iconName: 'icofont-twitter',
        desc: <p>Somrat islam <a href="#">@ShopCart Hey! #HTML_Template</a> Grab your item, 50% Big Sale Offer !!</p>,
    },
]

const footerbottomList = [
    {
        text: 'Faculty',
        link: '#',
    },
    {
        text: 'Staff',
        link: '#',
    },
    {
        text: 'Students',
        link: '#',
    },
    {
        text: 'Alumni',
        link: '#',
    },
]

## 3. All Texts for Shop Page

**/_ Popular Post _/**

const postList = [
{
id:1,
imgUrl: '/src/assets/images/blog/10.jpg',
imgAlt: 'rajibraj91',
title: 'Poor People Campaign Our Resources',
date: 'Jun 05,2022',
},
{
id:2,
imgUrl: '/src/assets/images/blog/11.jpg',
imgAlt: 'rajibraj91',
title: 'Poor Peoples Campaign Our Resources',
date: 'Jun 05,2022',
},
{
id:3,
imgUrl: '/src/assets/images/blog/12.jpg',
imgAlt: 'rajibraj91',
title: 'Poor Peoples Campaign Our Resources',
date: 'Jun 05,2022',
},
{
id:4,
imgUrl: '/src/assets/images/blog/09.jpg',
imgAlt: 'rajibraj91',
title: 'Poor Peoples Campaign Our Resources',
date: 'Jun 05,2022',
},
]

**/_ Product Display _/**

const desc ="Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging psd template.";

**/_ Tag pages_/**
const title = "Our Popular Tags";

const tagsList = [
{
link: "#",
text: "envato",
},
{
link: "#",
text: "themeforest",
},
{
link: "#",
text: "codecanyon",
},
{
link: "#",
text: "videohive",
},
{
link: "#",
text: "audiojungle",
},
{
link: "#",
text: "3docean",
},
{
link: "#",
text: "envato",
},
{
link: "#",
text: "themeforest",
},
{
link: "#",
text: "codecanyon",
},
];

**/__ Review List __/**
const reviwtitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/src/assets/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/src/assets/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];

  ## Modal CSS
  
  .modalCard {
    /* height: 100vh; */
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #fff;
}

.launch {
    height: 50px
}

.close {
    font-size: 21px;
    cursor: pointer
}

.modal-body {
    height: 450px
}

.nav-tabs {
    border: none !important
}

.nav-tabs .nav-link.active {
    color: #495057;
    background-color: #fff;
    border-color: #ffffff #ffffff #fff;
    border-top: 3px solid blue !important
}

.nav-tabs .nav-link {
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-top-left-radius: 0rem;
    border-top-right-radius: 0rem;
    border-top: 3px solid #eee;
    font-size: 20px
}

.nav-tabs .nav-link:hover {
    border-color: #e9ecef #ffffff #ffffff
}

.nav-tabs {
    display: table !important;
    width: 100%
}

.nav-item {
    display: table-cell
}

.form-control {
    border-bottom: 1px solid #eee !important;
    border: none;
    font-weight: 600
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #8bbafe;
    outline: 0;
    box-shadow: none
}

.inputbox {
    position: relative;
    margin-bottom: 20px;
    width: 100%
}

.inputbox span {
    position: absolute;
    top: 7px;
    left: 11px;
    transition: 0.5s
}

.inputbox i {
    position: absolute;
    top: 13px;
    right: 8px;
    transition: 0.5s;
    color: #3F51B5
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0
}

.inputbox input:focus~span {
    transform: translateX(-0px) translateY(-15px);
    font-size: 12px
}

.inputbox input:valid~span {
    transform: translateX(-0px) translateY(-15px);
    font-size: 12px
}

.pay button {
    height: 47px;
    border-radius: 37px
}

.p-Disclaimer{
    font-size: 14px;
}

  -----modal css end -----------
  **/__ Image URL for Credit Card and Paypal __/**
  
  paypal: https://i.imgur.com/yK7EDD1.png
  creditCard: https://i.imgur.com/sB4jftM.png

## 4. All Texts for Blog Page

**/_ Single Blog Page_/**

const socialList = [
{
link: "#",
iconName: "icofont-facebook",
className: "facebook",
},
{
link: "#",
iconName: "icofont-twitter",
className: "twitter",
},
{
link: "#",
iconName: "icofont-linkedin",
className: "linkedin",
},
{
link: "#",
iconName: "icofont-instagram",
className: "instagram",
},
{
link: "#",
iconName: "icofont-pinterest",
className: "pinterest",
},
];

## 5. All Texts for Contact Page

**/_ Contact.jsx _/**

const subTitle = "Get in touch with us";
const title = "We're Always Eager To Hear From You!";
const conSubTitle = "Get in touch with Contact us";
const conTitle =
"Fill The Form Below So We Can Get To Know You And Your Needs Better.";
const btnText = "Send our Message";

const contactList = [
{
imgUrl: "/src/assets/images/icon/01.png",
imgAlt: "contact icon",
title: "Office Address",
desc: "1201 park street, Fifth Avenue",
},
{
imgUrl: "/src/assets/images/icon/02.png",
imgAlt: "contact icon",
title: "Phone number",
desc: "+22698 745 632,02 982 745",
},
{
imgUrl: "/src/assets/images/icon/03.png",
imgAlt: "contact icon",
title: "Send email",
desc: "admin@shopcart.com",
},
{
imgUrl: "/src/assets/images/icon/04.png",
imgAlt: "contact icon",
title: "Our website",
desc: "www.shopcart.com",
},
];

## 6. All Texts for About Page

**/_ About.jsx _/**

const subTitle = "About Our Brand";
const title = "Good Qualification Services And Better Expriences";
const desc = "Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.";

const year = "30+";
const expareance = "Years Of Experiences";

const aboutList = [
{
imgUrl: '/src/assets/images/about/icon/01.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Skilled Instructors',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
{
imgUrl: '/src/assets/images/about/icon/02.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Get Certificate',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
{
imgUrl: '/src/assets/images/about/icon/03.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Online Classes',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
]


## 7. anonymous

__/ *.env.local */__

VITE_APIKEY=
VITE_AUTHDOMAIN=
VITE_PROJECTID=
VITE_STORAGEBUCKET=
VITE_MESSAGINGSENDERID=
VITE_APPID=

_>>> Use it on Firebase this way_

import.meta.env.VITE_APIKEY
