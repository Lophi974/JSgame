import "./start.css"

export function Start() {
    return(
        <>
        <div className="start-container">
            <div className="start-menu-container">
                <div>
                    <button>Start</button>
                </div>
                <div>
                    <button>Option</button>
                </div>
                <div className="login-container">
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        </div>
        </>
    )
}