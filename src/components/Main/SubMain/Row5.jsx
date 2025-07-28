import { useState } from "react";
import { row5 } from "../../helpers/dataForCards";


function Row5() {

    const [displayContent, setDisplayContent] = useState(Array(3).fill(null));
    const [displayCard, setDisplayCard] = useState(Array(3).fill(true));

    
    function showContent(index) {
        const newContent = [...displayContent];
        const newCard = [...displayCard];
        newCard[index] = false;
        newContent[index] = row5[index].text;
        setDisplayContent(newContent);
        setDisplayCard(newCard);
    }

    function showCard(index) {
        const newCard = [...displayCard];
        const newContent = [...displayContent];
        newCard[index] = true;
        newContent[index] = null;
        setDisplayCard(newCard);
        setDisplayContent(newContent);
    }

    return (
        <>
                                            
                                        
                    {row5.map((desc, index) => (
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

export default Row5;