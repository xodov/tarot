import { useState } from "react";
import { magicRow6 } from "../dataMagic";

function MagicRow6() {

    const [displayContent, setDisplayContent] = useState(Array(3).fill(null));
    const [displayCard, setDisplayCard] = useState(Array(3).fill(true));


    function showContent(index) {
        const newContent = [...displayContent];
        const newCard = [...displayCard];
        newCard[index] = false;
        newContent[index] = magicRow6[index].text;
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
                                                                                    
                                                                                
                                                            {magicRow6.map((desc, index) => (
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

export default MagicRow6;