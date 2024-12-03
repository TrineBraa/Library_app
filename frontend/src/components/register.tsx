import { useState } from "react"


const Register: React.FC = () => {
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!userName || !password) {
            setMessage("Username and password required.")
            return;
        };

        const user = {
            username: userName,
            password,
        };

        const url = "http://127.0.0.1:5000/register_user"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        };

        try{
            const response = await fetch(url, options)
            if (response.ok) {
                setMessage("User created Successfully!");
                setUserName("");
                setPassword("");
                }else{
                    const data = await response.json();
                    setMessage(data.message || "Failed to register user.")
                }
         }catch (error){
            if (error instanceof Error){
             setMessage ("an error occured:" + error.message);
            } else {
                setMessage("An unexpected error occurred.")
            }
        }

    return (
       <div>
        <h3>Register a new user:</h3>
        <form onSubmit = {onSubmit}>
                    <input
                        type="text"
                        className=""
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter username"/>
                    <input
                    type="password"
                    className=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"/>
                <div>
                    <button type="submit">Create User</button>
                </div>
        </form>
        {message && <p>{message}</p>}
        </div> 
    )
    }
}

export default Register
