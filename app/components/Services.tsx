import Image from "next/image";

const servicesData = [
    {
        title: "Web Developement",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum orci quis sapien aliquet, a porta mi tincidunt. Proin mi tellus, eleifend vel lorem vitae, porta vehicula ex.",
    },
    {
        title: "Google Ads Manage",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum orci quis sapien aliquet, a porta mi tincidunt. Proin mi tellus, eleifend vel lorem vitae, porta vehicula ex.",
    },
    {
        title: "Social Media Content",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum orci quis sapien aliquet, a porta mi tincidunt. Proin mi tellus, eleifend vel lorem vitae, porta vehicula ex.",
    },

]
export default function Services(){
    return(
        <section className="containers">
            <h1 className="text-5xl">Our specialisation.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </section>
    )
}