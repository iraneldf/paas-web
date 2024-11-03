import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Leaf, Sprout, Sun, Droplets, Thermometer, Tag, BadgeDollarSign, CookingPot} from "lucide-react"
import Image from "next/image";
import HeroSectionComponent from "@/components/home/HeroSectionComponent";
import ServiceSectionComponent from "@/components/home/ServiceSectionComponent";
import AboutSectionComponent from "@/components/home/AboutSectionComponent";
import TestimonialSectionComponent from "@/components/home/TestimonialSectionComponent";
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
            <TestimonialSectionComponent/>

            {/* Contact Form */}
            <ContactFormComponent/>


        </main>


    </>)
}


