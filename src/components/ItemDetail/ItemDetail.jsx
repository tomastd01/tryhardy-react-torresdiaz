import React from "react";
import "./ItemDetail.css"

function ItemDetail({item}) {
    return (
            <div className="detail">
                <h2 className="detailTitle">{item?.title}</h2>
                <div className="detailImage">
                    <img src={item?.pictureUrl} alt="" />
                </div>
                <div>
                    <p className="detailPrice">$ {item?.price}</p>
                </div>
            </div>
    )
}

export default ItemDetail;