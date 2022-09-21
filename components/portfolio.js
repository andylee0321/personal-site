import React, { useEffect, useState, useRef } from "react"
import { Modal } from "react-bootstrap"

import imgCoProperty from "../assets/img/portfolio/coproperty.png";
import imgCoinDebit from "../assets/img/portfolio/coin-debit.png";
import imgCyOp from "../assets/img/portfolio/cyopterminal.png";
import imgPerceptiLabs from "../assets/img/portfolio/percepti-labs.png";
import imgRicciwawa from "../assets/img/portfolio/ricciwawa.png";
import imgCrosswise from "../assets/img/portfolio/crosswise.png";
import imgSmaugs from "../assets/img/portfolio/smaugs.png";
import imgNaonow from "../assets/img/portfolio/naonow.png";
import img01 from "../assets/img/portfolio/01.png";
import img02 from "../assets/img/portfolio/02.png";
import img03 from "../assets/img/portfolio/03.png";
import img04 from "../assets/img/portfolio/04.png";
import img05 from "../assets/img/portfolio/05.png";
import img06 from "../assets/img/portfolio/06.png";


const defFilters = [
    { label: 'All', key: ''},
    { label: 'React', key: 'react'},
    { label: 'Vue', key: 'vue'},
    { label: 'Solidity', key: 'solidity'},
    { label: 'Laravel', key: 'laravel'},
    { label: 'Node.js', key: 'node.js'},
    { label: 'Java', key: 'java'},
    { label: 'Web3', key: 'web3'},
    { label: 'D3', key: 'd3'},
]

const data = [
    {
        image: imgCoProperty,
        category: "CoProperty",
        class: "react",
        filter: ["react", "node.js"]
    },
    {
        image: imgCoinDebit,
        link: "https://www.coindebit.io/",
        category: "CoinDebit",
        class: "react",
        filter: ["react"]
    },
    {
        image: imgPerceptiLabs,
        link: "https://www.perceptilabs.com/",
        category: "PerceptiLabs",
        class: "vue",
        filter: ["vue"]
    },
    {
        image: imgCrosswise,
        link: "https://crosswise.finance",
        category: "Crosswise.Finance",
        class: "react",
        filter: ["react", "node.js"]
    },
    {
        image: imgSmaugs,
        link: "https://www.smaugs.com/",
        category: "Smaugs",
        class: "react",
        filter: ["react", "web3", "Solidity"]
    },
    {
        image: imgNaonow,
        link: "https://www.naonow.com/",
        category: "NaoNow",
        class: "react",
        filter: ["react", "node.js"]
    },
    {
        image: imgRicciwawa,
        link: "https://www.ricciwawa.com/",
        category: "Ricciwawa",
        class: "react",
        filter: ["react"]
    },
    {
        image: imgCyOp,
        link: "https://www.cyop.io/",
        category: "CyOpTerminal",
        class: "react",
        filter: ["react", "node.js", "solidity"]
    },
    {
        image: img01,
        link: "https://vervoe.com",
        category: "Vervoe.com",
        class: "web",
        filter: ["react"]
    },
    {
        image: img02,
        link: "https://wedo.lu",
        category: "Wedo.lu",
        class: "web",
        filter: ["vue", "laravel"]
    },
    {
        image: img03,
        link: "#",
        category: "LOGO MAKER",
        class: "brand",
        filter: ["vue", "laravel"]
    },
    {
        image: img04,
        link: "https://chainbeing.com",
        category: "ChainBeing.com",
        class: "photo",
        filter: ["node", "react", "web3", "solidity"]
    },
    {
        image: img05,
        link: "#",
        category: "Afroshipper",
        class: "web",
        filter: ["react"]
    },
    {
        image: img06,
        link: "http://antiblackactivitydatabase.org",
        category: "AntiBlackActivity",
        class: "photo",
        filter: ["vue", "laravel", "d3"]
    },
]

const Portfolio = () => {
    const [currentFilter, setCurrentFilter] = useState('')
    const [modalShow, setModalShow] = useState(false)
    const [currentItem, setCurrentItem] = useState()

    const checkCategory = (filters) => {
        let ret = false;
        filters.map((item) => {
            if( item === currentFilter ) 
                ret = true;
        })

        return ret;
    }

    return (
        <section className="portfolio section-padding">
			<div className="container">
				<div className="section-head text-center mb-50">
					<h5 className="tit tit-center">SOME OF WORK</h5>
				</div>

				<div className="row">

					<div className="filtering text-center mb-50 w-100">
                        {defFilters.map((item,idx) => (
                            <span key={idx} className={item.key === currentFilter ? "active" : ""}
                                    onClick={() => setCurrentFilter(item.key)}>{item.label}</span>  
                        ))}
					</div>

					<div className="gallery text-center">
                        {data.map((item) => ((currentFilter === '' || checkCategory(item.filter)) &&
                            <div className={"col-md-4 item-img " + item.class} key={item.category} >
                                <div className="img-container">
                                    <img src={item.image} alt="image" />
                                </div>
                                <div className="item-img-overlay">
                                    <div className="v-middle">
                                        <span className="icon" onClick={() => {
                                            setCurrentItem(item)
                                            setModalShow(true)}
                                        }></span>
                                    </div>
                                    <div className="overlay-info text-center">
                                        <p>{item.category}</p>
                                        <p>{item.link ?? item.link}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
					</div>

                    <Modal
                        size="lg"
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        dialogClassName="centered-modal-dialog"
                    >
                        <Modal.Body className="portfolio-modal-body">
                            <a href={currentItem?.link} target="_blank">
                                <img src={currentItem?.image} alt="image" />
                            </a>
                            <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setModalShow(false)}>×</button>                            
                        </Modal.Body>
                    </Modal>
				</div>
			</div>
		</section>
    )
}

export default Portfolio;