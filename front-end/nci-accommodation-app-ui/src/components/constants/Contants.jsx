import About from "../about/About";
import ContactUs from "../contact_us/ContactUs";
import Home from "../home/Home";
import Profile from "../profile/Profile";

export const tabs={
    "Home":{
        name:"Home",
        url:"/home",
        file:Home
    },
    "Profile":{
        name:"Profile",
        url:"/profile",
        file:Profile
    },
    "About":{
        name:"About",
        url:"/about",
        file:About
    },
    "Contact_us":{
        name:"Contact_us",
        url:"/contact-us",
        file:ContactUs
    }
}