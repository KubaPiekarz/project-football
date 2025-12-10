import { getTeams } from "../api/getTeams.js";
import { createTeamCard } from "./components/teamCard.js";
import { renderTeams, showSkeleton, showError } from "./functions/renderer.js";
import { initSearch } from "./functions/search.js";

const teamsSection = document.getElementById("teams");
const errorSection = document.getElementById("error");
const emptySection = document.getElementById("empty");
const searchInput = document.getElementById("search");

let allTeams = [];
let isLoading = false;

async function loadTeams() {
  showSkeleton(teamsSection, errorSection, emptySection);

  isLoading = true;
  allTeams = await getTeams();
  isLoading = false;

  if (!allTeams.length) {
    showError(teamsSection, emptySection, errorSection);
    return;
  }

  renderTeams(
    allTeams,
    { teamsSection, errorSection, emptySection },
    createTeamCard
  );

  initSearch(searchInput, allTeams, (teams) => {
    renderTeams(
      teams,
      { teamsSection, errorSection, emptySection },
      createTeamCard
    );

    if (teams.length === 0) {
      const emptyQuery = document.getElementById("empty-query");
      if (emptyQuery) {
        emptyQuery.textContent = `"${searchInput.value}"`;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", loadTeams);
