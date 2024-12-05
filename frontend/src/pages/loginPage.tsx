import Login from "../components/login"
import NavBar from "../components/navbar"
import Register from "../components/register"

function LoginPage() {
  return (
    <div>
        <NavBar/>
        <div className="flex justify-center">
          <div className="px-10">
            <Register/>
          </div>
          <div className="px-10">
            <Login/>
          </div>
        </div>
    </div>
  )
}

export default LoginPage
