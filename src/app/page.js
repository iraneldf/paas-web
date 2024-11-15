import HeroSectionComponent from "@/components/home/HeroSectionComponent";
import ServiceSectionComponent from "@/components/home/ServiceSectionComponent";
import AboutSectionComponent from "@/components/home/AboutSectionComponent";
import ContactFormComponent from "@/components/home/ContactFormComponent";

export default function AgriTechLanding() {
    return (<>
        <main>
            {/* Hero Section */}
            <HeroSectionComponent/>

            {/* Services Section */}
            <ServiceSectionComponent/>

            {/* About Section */}
            <AboutSectionComponent/>

            {/* Testimonials Section */}
            {/*<TestimonialSectionComponent/>*/}

            {/* Contact Form */}
            <ContactFormComponent/>


        </main>


    </>)
}


