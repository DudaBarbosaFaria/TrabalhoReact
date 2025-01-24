import { Link } from "react-router-dom"
import { SHeader, NavBar } from "./styles"
import Logo from "../../assets/logo.png"
import { AuthContext } from "../../contexts/authContext"
import { useContext } from "react"
import { GrLogout } from "react-icons/gr"
export function Header() {
  const { user, signOut } = useContext(AuthContext)
  async function logout() {
    await signOut()
  }
  return (
    <SHeader>
      <figure>
        <img src={Logo} alt="Logo do site" />
      </figure>
      <NavBar>
        <div>
          <Link to="/">Início</Link>
          <Link to="/comentario">Comentários</Link>
        </div>
        {
          user ? (
<>
                <Link to="/adm">Administrativa</Link>
                <button onClick={logout}>{user.nome} <GrLogout /></button></>
          ) : (
            <>
                <Link to="/login">Login</Link>
                <Link to="/cadastrar">Cadastrar</Link></>
          )
        }
      </NavBar>
    </SHeader>
  )
}