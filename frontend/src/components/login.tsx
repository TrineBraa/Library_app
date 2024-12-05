
const Login = () => {

  


  return (
    <div className="bg-cyan-900 px-4 py-6 text-white">
      <h3>Login:</h3>
        <form>
            <input 
              type="text"
              className="my-2 px-5 text-black"
              value=""
              
              placeholder="Enter Username"/><br/>
            <input 
              type="password"
              className="my-2 px-5 text-black"
              value=""

              placeholder="Enter password"/>
            <div>
              <button className="bg-teal-600 border px-1 mx-2 hover:bg-teal-950">Login</button>
            </div>
        </form>
        
    </div>
  )
}

export default Login
