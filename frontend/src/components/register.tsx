import { useState } from "react"


const Register = () => {
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // const user = {
        //     userName,
        //     password,
        // };
 
        const url = "http://127.0.0.1:5000/register_user"
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username:userName, password:password})
        };

        if (!userName || !password) {
            setMessage("Username and password required.")
            return;
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
    }

    return (
       <div className="bg-cyan-900 px-4 py-6 text-white">
            <h3>Register a new user:</h3>
            <form onSubmit = {onSubmit}>
                        <input
                            type="text"
                            className="my-2 px-5 text-black"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Enter username"/><br/>
                        <input
                        type="password"
                        className="my-2 px-5 text-black"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"/>
                    <div>
                        <button className="bg-teal-600 border px-1 mx-2 hover:bg-teal-950" type="submit">Create User</button>
                    </div>
            </form>
            {message && <p>{message}</p>}
        </div> 
    )
    
};

export default Register
