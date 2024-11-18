import {Calendar, Leaf, Sprout} from 'lucide-react'
export function Inicio({startDate}) {

    return (
        <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-600"/>
            <span>Inicio: {startDate}</span>
        </div>
    )
}