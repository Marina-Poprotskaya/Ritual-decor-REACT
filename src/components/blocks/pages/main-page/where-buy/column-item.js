import React from 'react'

function ColumnItem(props) {
    return (
        <div className="where-buy__insert">
            <p className="where-buy__font">{props.content}</p>
            <div className="where-buy__insert-column">
                <p>ИП Кулаго А.С. <br /> г.Молодечно, ул. Ф. Скорины 17, <br /> 8 029 273-60-39 </p>
                <p>ИП Кулаго А.С. <br /> г.Молодечно, ул. Ф. Скорины 17, <br /> 8 029 273-60-39 </p>
            </div>
        </div>
    )
}

export default ColumnItem;