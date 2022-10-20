import { useState } from "react";
import BagContext from "./Context";
import b1 from "../assets/img/b1.png";
import b3 from "../assets/img/b3.png";

function Provider({ children }) {
    const bags = [
        { id: 1, name: "Ad-Lib Shoulder Bag.", type: 'Classic', price: '$905', image: b1 },
        { id: 2, name: "Ad-Lib Hand Bag.", type: 'Classic', price: '$1295', image: b3 },
    ];

    const [bagCart, setBagCart] = useState([]);

    return (
        <BagContext.Provider value={{ bags, bagCart, setBagCart }}>
            {children}
        </BagContext.Provider>
    );
}

export default Provider;
