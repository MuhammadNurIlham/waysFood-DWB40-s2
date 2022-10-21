import { useState } from "react";
import { Card } from "react-bootstrap";
import BurgerKing from './assets/BurgerKing.png';
import starbucks from './assets/starbucks.png';
import kfc from './assets/kfc.png';
import jco from './assets/jco.png';

function Partners() {
    const [partners, setPartners] = useState([
        { image: BurgerKing, name: "Burger King" },
        { image: starbucks, name: "Starbucks" },
        { image: kfc, name: "KFC" },
        { image: jco, name: "Jco" },
    ]);
    return (
        <div className="container">
            <div className="row py-2 mt-3">
                <h3 className="title">Popular Restaurant</h3>
            </div>
            <div className="row">
                <div className="d-lg-flex justify-content-between">
                    {partners.map((partner) => (
                        <Card className="px-2 py-1 mx-2 my-2 pointer" style={{ width: '15rem' }}>
                            <div className="d-flex justify-content-arround">
                                <img src={partner.image}></img>
                                <div>
                                    <h6 className="title ps-3 py-3">{partner.name}</h6>
                                </div>
                            </div>
                        </Card>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Partners;