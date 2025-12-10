export function renderTeams(teams, sections, createCardFn) {
  const { teamsSection, errorSection, emptySection } = sections;

  errorSection.hidden = true;
  emptySection.hidden = true;
  teamsSection.hidden = false;

  if (!teams.length) {
    teamsSection.hidden = true;
    emptySection.hidden = false;
    return;
  }

  teamsSection.innerHTML = "";
  teams.forEach((team) => {
    teamsSection.appendChild(createCardFn(team));
  });
}

export function showSkeleton(teamsSection, errorSection, emptySection) {
  errorSection.hidden = true;
  emptySection.hidden = true;
  teamsSection.hidden = false;

  const skeletonHTML = `
    <div class="team-card">
      <div class="team-card__header">
        <div class="team-card__info">
          <div class="team-card__skeleton-rank"></div>
          <div class="team-card__skeleton-badge"></div>
          <div class="team-card__skeleton-name"></div>
        </div>
        <div class="team-card__skeleton-score-record">
          <div class="team-card__record-chart">
            <div class="team-card__skeleton-chart"></div>
            <div class="team-card__skeleton-record"></div>
          </div>
          <div class="team-card__skeleton-points"></div>
        </div>
      </div>
      
    </div>
  `;

  teamsSection.innerHTML = skeletonHTML.repeat(5);
}

export function showError(teamsSection, emptySection, errorSection) {
  teamsSection.hidden = true;
  emptySection.hidden = true;
  errorSection.hidden = false;
}
