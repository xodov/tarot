import { useState } from "react";
import { row2 } from "../../helpers/dataForCards";


function Row2() {

    const [content, setContent] = useState(Array(3).fill(null));
    const [card, setShow] = useState(Array(3).fill(true));

    function showContents(index) {
        const newContent = [...content];
        const newShow = [...card];
        newShow[index] = false;
        newContent[index] = row2[index].text; // устанавливаем контент на основе описания
        setContent(newContent);
        setShow(newShow);
    }

    function showCards(index) {
        const newContent = [...content];
        const newShow = [...card];
        newShow[index] = true; // Убираем контент
        newContent[index] = null;
        setContent(newContent);
        setShow(newShow);
    }


    return (
         <>
                            
                        
            {row2.map((desc, index) => (
                                <>
                                    {card[index] ? (
                                        <div key={index} className={desc.className}>
                                            <a href={null}><img src={desc.imgSrc} title="Нажми, чтобы увидеть описание карты" alt={desc.altText} onClick={() => showContents(index)} />{desc.name}</a>
                                        </div>
                                    ) : (
                                        <p onClick={() => showCards(index)} key={index}>{content[index]}</p>
                                    )}
                                </>
                            ))}
            
            </>
    )
}

export default Row2;