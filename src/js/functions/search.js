export function initSearch(searchInput, allTeams, renderFn) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allTeams.filter((team) =>
      team.strTeam.toLowerCase().includes(query)
    );
    renderFn(filtered);
  });
}
