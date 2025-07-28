import { useState } from "react";
import { row1 } from "./../../helpers/dataForCards";


function SubMain() {

    const [content, setContent] = useState(Array(3).fill(null));
    const [card, setShow] = useState(Array(3).fill(true));
    
    function showContent(index) {
        const newContent = [...content];
        const newShow = [...card];
        newShow[index] = false;
        newContent[index] = row1[index].text; // устанавливаем контент на основе описания
        setContent(newContent);
        setShow(newShow);
    }
    
    function showCard(index) {
        const newContent = [...content];
        const newShow = [...card];
        newShow[index] = true;
        newContent[index] = null; // убираем контент
        setContent(newContent);
        setShow(newShow);
    }

return (
    <>
                    
                
    {row1.map((desc, index) => (
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

export default SubMain;