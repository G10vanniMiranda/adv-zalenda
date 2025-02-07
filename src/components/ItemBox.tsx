import { Clock2 } from "lucide-react";

interface ItemProps {
    IconName?: string;
    conteudoText: string
}

interface ItemBoxProps {
    icon?: React.ReactNode;
    title: string;
    items: ItemProps[];
    className?: string;
}

export function ItemBox( { icon, title, className, items } : ItemBoxProps) { 
    return(
        <div data-aos="zoom-down" data-aos-deley="300" className={ `
            ${className} flex flex-col mt:2 items-center w-96 hover:scale-105 cursor-pointer duration-200` }>
            {icon}
            <h3 className="lg:text-3xl text-md lg:mt-5 lg:mb-5 font-semibold justify-start flex">{title}</h3>
            <div data-aos="zoom-in" data-aos-deley="900">
                {items.map((item) => (
                    <div key={item.conteudoText} className=" flex gap-2 items-center justify-start m-2 lg:m-5">
                        <Clock2  className="animate-bounce"/>
                        <h3 className=" lg:text-lg">{item.conteudoText}</h3>
                    </div>
                ))}
            </div>
          </div>
    )
}

export function ItemInBox( { conteudoText } : ItemProps) { 
    return(
        <div>
            <Clock2 size={15} className=""/>
            <h3>{conteudoText}</h3>
        </div>
    )
}