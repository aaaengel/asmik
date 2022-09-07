import "./Header.css"
import asmik from "../../images/asmik.jpg"

function Header(){
    return( 
        <div className="header">
            <img className="header__image" src={asmik} alt="Я"/>
            <div className="header__text__cont">
                <p className="header__text__cont__name">Асмик</p>
                <div className="header__text__cont__line"></div>
                <p className="header__text">Женщина — это состояние. Глубокое, чувственное, гармоничное, с полным принятием себя.</p>
                <p className="header__text">А что, если всегда смотреть на себя любящими глазами...</p>
            </div>
        </div>
    )
}

export default Header;