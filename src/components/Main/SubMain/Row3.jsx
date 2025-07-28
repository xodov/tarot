import { useState } from "react";
import { row3 } from "../../helpers/dataForCards";


function Row3() {

    const [content, setContent] = useState(Array(3).fill(null));
    const [card, setCard] = useState(Array(3).fill(true));


    function showContent(index) {
        const newContent = [...content];
        const newCard = [...card];
        newCard[index] = false;
        newContent[index] = row3[index].text;
        setContent(newContent);
        setCard(newCard);
    }

    function showCard(index) {
        const newContent = [...content];
        const newCard = [...card];
        newCard[index] = true;
        newContent[index] = null;
        setContent(newContent);
        setCard(newCard);
    }

    return (
        <>
                         
            {row3.map((desc, index) => (
                <>
                    {card[index] ? (
                        <div key={index} className={desc.className}>
                            <a href={null}><img src={desc.imgSrc} title="Нажми, чтобы увидеть описание карты" alt={desc.altText} onClick={() => showContent(index)} />{desc.name}</a>
                        </div>
                    ) : (
                        <p onClick={() => showCard(index)} key={index}>{content[index]}</p>
                    )}
                </>
            ))}
                    
        </>
    )
}

export default Row3;