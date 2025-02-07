export function Logo() {
    return(
        <div className="flex gap-2 items-center justify-center lg:ml-2">
            <img 
                src="./image/logo.png" 
                width={40} height={32} alt="não carregou"
            />
            
            <div className="flex flex-col h-12 text-white tracking-widest">
                <h1 className="font-bold">Zalenda</h1>
                <h2 className="font-bold">Advogados</h2>
            </div>

        </div>
    )
}