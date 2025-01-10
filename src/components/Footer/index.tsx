import { SFooter } from "./styles"
import Insta from "../../assets/insta.png"
import Spotify from "../../assets/spotify.png"

export function Footer() {
  return (
    <SFooter>
      <a href="http://instagram.com" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="http://spotify.com" target="_blank">
        <img src={Spotify} alt="Spotify" />
      </a>
    </SFooter>
  )
}