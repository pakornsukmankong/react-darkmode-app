import { useContext } from "react"
import { ThemeContext } from "../App"

const Footer = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <footer>
      <div className={theme === "dark" ? "dark": "light"}>
        &copy; {new Date().getFullYear()} Copyright : Pakorn Sukmankong
      </div>
    </footer>
  )
}

export default Footer