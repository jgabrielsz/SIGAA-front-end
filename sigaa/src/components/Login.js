import './Login.component.css'

function Login() {
    return (
        <form action="" className="login">
            <span className="login_title">Login</span>
            <span className="label_input" >Nome de Usuário</span>
            <input className="input" type="text" name="username"/>
            <span className="label_input" >Senha</span>
            <input className="input" type="password" name="password"/>
            <button className="button" type="submit">Entrar</button>
        </form>
    )
}

export default Login