export function createFormChart(intWin, intDraw, intLoss) {
  const total = Number(intWin) + Number(intDraw) + Number(intLoss);

  return `
    <div class="form-chart">
      <div class="form-chart__item w" style="width: ${
        (intWin / total) * 100
      }%"></div>
      <div class="form-chart__item d" style="width: ${
        (intDraw / total) * 100
      }%"></div>
      <div class="form-chart__item l" style="width: ${
        (intLoss / total) * 100
      }%"></div>
    </div>
  `;
}
