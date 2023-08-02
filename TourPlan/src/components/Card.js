import { useState } from "react";



function Card({ id, image, name, info, price,removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const description = readmore? info : `${info.substring(0, 200)}....`;
   

    function readMoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt="IamImage" />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <button onClick={()=>removeTour(id)} className="not-intrested">Not Intrested</button>
        </div>
    );
}
export default Card;