import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";

export default function ContactFormComponent() {
    return (
        <section id="contact" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <Input type="text" placeholder="Nombre"/>
                    </div>
                    <div className="mb-4">
                        <Input type="email" placeholder="Correo electrónico"/>
                    </div>
                    <div className="mb-4">
                        <Textarea placeholder="Mensaje"/>
                    </div>
                    <Button type="submit" className="w-full">Enviar Mensaje</Button>
                </form>
            </div>
        </section>
    )
}