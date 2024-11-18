import {Progress} from "@/components/ui/progress";

export function Progreso({progress}) {

    return (
        <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Progreso del Proyecto</h3>
            <Progress value={progress} className="mb-2"/>
            <p className="text-sm text-gray-500">Progreso: {progress}%</p>
        </div>
    )}