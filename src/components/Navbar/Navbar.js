import Button from "./Button"

const Navbar = () =>{
    return(
        <div className="fixed bottom-4 left-0  py-3 w-full h-20 bg-dark-surface3 grid grid-cols-4 gap-1">
            <Button>Home</Button>
            <Button>Matérias</Button>
            <Button>Calendário</Button>
            <Button>Notas</Button>
        </div>
    )
}

export default Navbar