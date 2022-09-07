import "./Shop.css"

function Shop(){
    return(
        <div className="shop">
            <div className="shop__text__cont">
                <p className="shop__text__title">Что я предлагаю</p>
                <div className="shop__text__cont__line"></div>
                <p className="shop__text">Мы тщательно отбираем особенные предметы для дома и заботы о себе, чтобы дарить вам радость и вдохновение от покупки.
Для нас очень важен натуральный состав продуктов и этичность производства. Поэтому каждая марка, представленная в магазине, была тщательно нами отобрана и протестирована. Мы выбрали именно те детали, которые формируют ежедневные женские ритуалы.

Здесь вы найдёте ароматические свечи и благовония, эфирные масла и парфюм, одежду и аксессуары для практик и медитаций, декор для интерьера, украшения и средства по уходу за собой.</p>
            </div>
            <div className="shop__cont__button">
                <p className="shop__cont__button__text">Присоединяйся к нашему дому для женщин!</p>
                <a href="https://t.me/AsmikForWomenBot">
                <button className="shop__cont__button__button">Присоединиться</button>
                </a>
            </div>
        </div>
        
    )
}

export default Shop;