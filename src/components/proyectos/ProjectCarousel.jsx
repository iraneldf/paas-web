import React, {useState} from 'react'
import Image from 'next/image'
import {Leaf, Sprout} from 'lucide-react'
import {Button} from "@/components/ui/button"
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

export function ProjectCarousel({images}) {

    return (<div className={'flex flex-col justify-center'}>

        <Carousel className="">
            <CarouselContent>
                {images.map((image, index) => (

                    <CarouselItem key={index}>

                        <Image key={index} src={image} alt={`Project Image ${index + 1}`}
                               width={300}
                               height={300} className="w-full h-full"/>

                    </CarouselItem>

                ))}

            </CarouselContent>

            <div className="absolute inset-0 items-center justify-between p-4 flex">
                <CarouselPrevious
                    className="relative left-0 top-0 md:size-10 rounded-full bg-white/70 hover:bg-green-700"/>

                <CarouselNext
                    className="relative right-0 top-0 md:size-10 rounded-full bg-white/70 hover:bg-green-700"/>

            </div>
        </Carousel>
    </div>)
}