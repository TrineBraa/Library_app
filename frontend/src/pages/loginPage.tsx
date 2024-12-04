import NavBar from "../components/navbar"
import Register from "../components/register"

function LoginPage() {
  return (
    <div>
        <NavBar/>
        <div className="flex justify-center">
        <Register/>
        </div>
    </div>
  )
}

export default LoginPage
