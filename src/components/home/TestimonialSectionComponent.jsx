import {Card, CardContent} from "@/components/ui/card";


export default function TestimonialSectionComponent() {
    return (
        <section className="py-16 bg-green-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[{
                        name: "María García",
                        role: "Agricultora",
                        quote: "AgriTech ha transformado mi forma de trabajar el campo."
                    }, {
                        name: "Juan Pérez",
                        role: "Ganadero",
                        quote: "Sus soluciones han aumentado significativamente nuestra productividad."
                    }, {
                        name: "Ana Martínez",
                        role: "Ingeniera Agrónoma",
                        quote: "La innovación de AgriTech es el futuro de la agricultura."
                    },].map((testimonial, index) => (<Card key={index}>
                        <CardContent className="pt-6">
                            <p className="italic mb-4">{testimonial.quote}</p>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </CardContent>
                    </Card>))}
                </div>
            </div>
        </section>
    )
}
