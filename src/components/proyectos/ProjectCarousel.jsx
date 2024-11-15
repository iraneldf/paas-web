import React, {useState} from 'react'
import Image from 'next/image'
import {Leaf, Sprout} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

export function ProjectCarousel({images}) {

    return (
        <div className={'flex flex-col justify-center'}>

            <Carousel className="max-w-[100%]">
                <CarouselContent>
                    {images.map((image, index) => (

                        <CarouselItem key={index}>
                            <div className=" w-full h-[600px]">
                                <Image key={index} src={image} alt={`Project Image ${index + 1}`}
                                       width={600}
                                       height={600} className="w-full object-cover"/>
                            </div>
                        </CarouselItem>

                    ))}

                </CarouselContent>

                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <CarouselPrevious
                        className="relative left-0 top-0 h-10 w-10 rounded-full bg-white/70 hover:bg-green-700">
                        <Leaf className="h-4 w-4 text-green-800"/>
                    </CarouselPrevious>

                    <CarouselNext
                        className="relative right-0 top-0 h-10 w-10 rounded-full bg-white/70 hover:bg-green-700">
                        <Sprout className="h-4 w-4 text-green-800"/>
                    </CarouselNext>

                </div>
            </Carousel>
        </div>
    )
}