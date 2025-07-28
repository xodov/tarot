import { useState } from "react";
import { row37 } from "../../helpers/dataForCards";


function Row37() {

    const [displayContent, setDisplayContent] = useState(Array(2).fill(null));
    const [displayCard, setDisplayCard] = useState(Array(2).fill(true));


    function showContent(index) {
        const newContent = [...displayContent];
        const newCard = [...displayCard];
        newCard[index] = false;
        newContent[index] = row37[index].text;
        setDisplayContent(newContent);
        setDisplayCard(newCard);
    }

    function showCard(index) {
        const newCard = [...displayCard];
        const newContent = [...displayContent];
        newContent[index] = null;
        newCard[index] = true;
        setDisplayContent(newContent);
        setDisplayCard(newCard);
    }

    return (
        <>
                                                                            
                                                                        
                                                    {row37.map((desc, index) => (
                                                        <>
                                                            {displayCard[index] ? (
                                                                <div key={index} className={desc.className}>
                                                                    <a href={null}><img src={desc.imgSrc} title="Нажми, чтобы увидеть описание карты" alt={desc.altText} onClick={() => showContent(index)} />{desc.name}</a>
                                                                </div>
                                                            ) : (
                                                                <p onClick={() => showCard(index)} key={index}>{displayContent[index]}</p>
                                                            )}
                                                        </>
                                                    ))}
                                                            
                                                </>
    )


}

export default Row37;