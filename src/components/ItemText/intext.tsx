import { Clock2 } from "lucide-react"

interface ItemTextProps {
    className?: string
    conteudo: string
    iconColor?: string
}

export function ItemText( { className, conteudo, iconColor } : ItemTextProps){
    return(

        <div className="flex flex-col text-white m-10 text-3xl/tight mt-20">
            <div className="flex gap-2 justify-between">
                
                <div className="w-2 pr-10">
                    <Clock2 color={iconColor} size={30} className="" />
                </div>

                <p data-aos="zoom-in" data-aos-deley="900" className={`lg:text-3xl flex-1 text-lg ${className} `} > {conteudo} </p>

            </div>
        </div>

    )
}