import { Link } from "react-router-dom";


function NavBar(){

    

return (
    <header>
        <div className="w-screen pt-9 pb-3 mb-7 text-center bg-cyan-900 text-white">
            <h1 className="font-serif text-7xl">Welcome</h1>
        

            <nav className="pt-7">
                <Link to ='/' className="mx-2 text-lg hover:text-black">Main</Link>
                <Link to ='/books' className="mx-2 text-lg hover:text-black">Find books</Link>
                <Link to='/library' className="mx-2 text-lg hover:text-black">Your library</Link>
            </nav>

        </div>

    </header>
)
}

export default NavBar;