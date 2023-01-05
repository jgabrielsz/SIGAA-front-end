import './auth.css'
import WideButton from '../../components/button/WideButton'
import Input from '../../components/input/Input'


function Auth() {

    return (
        <form action="" className="login">
            <span className="login_title">Login</span>
            <span className="label_input" >Nome de Usuário</span>
            <Input name='username'/>
            <span className="label_input" >Senha</span>
            <Input name='password'/>
            <WideButton >Entrar</WideButton>
        </form>
    )
}

export default Auth