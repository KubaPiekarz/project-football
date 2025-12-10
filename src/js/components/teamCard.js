import { createForm } from "./form.js";
import { createFormChart } from "./chart.js";

export function createTeamCard(team) {
  const card = document.createElement("div");
  card.className = "team-card";

  card.innerHTML = `
    <div class="team-card__header">
      <div class="team-card__info">
        <div class="team-card__rank">${team.intRank}</div>
        <img src="${team.strBadge}" alt="${
    team.strTeam
  } logo" class="team-card__badge">
        <h3 class="team-card__name">${team.strTeam}</h3>
      </div>
      <div class="team-card__score-record">
      <div class="team-card__record-chart">
      ${createFormChart(team.intWin, team.intDraw, team.intLoss)}
        <div class="team-card__record">
          <span>W: ${team.intWin}</span>
          <span>D: ${team.intDraw}</span>
          <span>L: ${team.intLoss}</span>
        </div>
      </div>
        <div class="team-card__points">${team.intPoints} PTS</div>
      </div>
    </div>

    <div class="team-card__stats">
      <div class="team-card__goals">
        <div class="team-card__goal">Goals for: <h4>${
          team.intGoalsFor
        }</h4></div>
        <div class="team-card__goal">Goals against: <h4>${
          team.intGoalsAgainst
        }</h4></div>
        <div class="team-card__goal">Goals difference: <h4>${
          team.intGoalDifference
        }</h4></div>
      </div>
    </div>
  `;

  const stats = card.querySelector(".team-card__stats");
  const form = createForm(team.strForm);
  stats.insertBefore(form, stats.firstChild);

  return card;
}
