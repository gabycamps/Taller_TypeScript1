import { Serie } from "./Serie.js";
import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;

renderSeriesInTable(series);

function renderSeriesInTable(series: Serie[]): void {

    series.forEach(s => {
        let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                            <td>${s.name}</td>
                            <td>${s.channel}</td>
                            <td>${s.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    });
}

