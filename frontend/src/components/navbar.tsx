function NavBar(){
return (
    <>
        <div className="absolute inset-x-0 top-0 display-flex justify-content-center bg-white">
        <h1 className="font-serif text-3xl">Welcome</h1>
        <h3>This is your personal library!</h3>
        <button className="">Find books</button> 
        <button className="">Your library</button> 
        <button className="">Login</button>
        </div>

    </>
)
}

export default NavBar;