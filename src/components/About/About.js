import "./About.css"
import asmik from "../../images/asmik2.jpg"

function About(){
    return(
        <div className="about">
            <img className="about__image" src={asmik} alt="Я" />
            <div className="about__text__cont">
                <p className="about__text__title">О себе</p>
                <div className="about__text__cont__line"></div>
                <p className="about__text">Pheromone — это дом любви и заботы о женщинах, где каждая сможет раскрывать свою природу и взаимодействовать с женской энергией. Здесь вас ждёт настоящее пробуждение — возможность освобождаться от ненужных мыслей и быть наедине с чувствами, прислушиваться к себе. Видеть, принимать и наслаждаться своей уникальностью.</p>
            </div>
        </div>
    )
}

export default About