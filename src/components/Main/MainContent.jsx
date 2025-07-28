import "./../Main/mainContent.css"
import { seniorArcana } from "../helpers/data";
import { minorArcana } from "../helpers/data";

function MainContent() {

    return (
        <div className="main">
            <h2>Таро</h2>
            <div className="arcana">
                <div className="senior-arcana">
                    <h2>Старшие арканы:</h2>
                    <a href="null">{seniorArcana[0].arcana}</a>
                    <a href="null">{seniorArcana[1].arcana}</a>
                    <a href="null">{seniorArcana[2].arcana}</a>
                    <a href="null">{seniorArcana[3].arcana}</a>
                    <a href="null">{seniorArcana[4].arcana}</a>
                    <a href="null">{seniorArcana[5].arcana}</a>
                    <a href="null">{seniorArcana[6].arcana}</a>
                    <a href="null">{seniorArcana[7].arcana}</a>
                    <a href="null">{seniorArcana[8].arcana}</a>
                    <a href="null">{seniorArcana[9].arcana}</a>
                    <a href="null">{seniorArcana[10].arcana}</a>
                    <a href="null">{seniorArcana[11].arcana}</a>
                    <a href="null">{seniorArcana[12].arcana}</a>
                    <a href="null">{seniorArcana[13].arcana}</a>
                    <a href="null">{seniorArcana[14].arcana}</a>
                    <a href="null">{seniorArcana[15].arcana}</a>
                    <a href="null">{seniorArcana[16].arcana}</a>
                    <a href="null">{seniorArcana[17].arcana}</a>
                    <a href="null">{seniorArcana[18].arcana}</a>
                    <a href="null">{seniorArcana[19].arcana}</a>
                    <a href="null">{seniorArcana[20].arcana}</a>
                    <a href="null">{seniorArcana[21].arcana}</a>
                </div>
                <div className="minor-arcana">
                    <h2>Младшие арканы:</h2>
                    <a href="null">{minorArcana[0].arcana}</a>
                    <a href="null">{minorArcana[1].arcana}</a>
                    <a href="null">{minorArcana[2].arcana}</a>
                    <a href="null">{minorArcana[3].arcana}</a>
                </div>
            </div>
		</div>
    )
}

export default MainContent;