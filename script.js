const data75 = {
  "10": 260.0, "15": 164.0, "20": 119.0, "25": 87.0,
  "30": 66.0, "35": 52.0, "40": 41.4, "45": 33.8,
  "50": 27.2, "55": 21.8, "60": null, "65": null,
  "70": null, "75": null, "80": null, "85": null,
  "90": null, "95": null, "100": null
};

const boomSelector = document.getElementById("boomLength");
const chartBody = document.getElementById("chartBody");

function renderChart(data) {
  chartBody.innerHTML = "";
  for (let radius in data) {
    const capacity = data[radius];
    const row = document.createElement("tr");

    const beamInput = document.createElement("input");
    beamInput.type = "number";
    beamInput.placeholder = "kips";
    beamInput.addEventListener("input", () => updateStatus(capacity, beamInput, statusCell));

    const statusCell = document.createElement("td");
    statusCell.textContent = "-";

    row.innerHTML = `
      <td>${radius}</td>
      <td>${capacity !== null ? capacity : 'N/A'}</td>
      <td></td>
    `;

    row.cells[2].appendChild(beamInput);
    row.appendChild(statusCell);
    chartBody.appendChild(row);
  }
}

function updateStatus(capacity, input, statusCell) {
  if (!capacity || input.value === "") {
    statusCell.textContent = "-";
    statusCell.className = "";
    return;
  }
  const beamWeight = parseFloat(input.value);
  const status = beamWeight <= capacity ? "PASS" : "OVERLOAD";
  statusCell.textContent = status;
  statusCell.className = status === "PASS" ? "pass" : "fail";
}

// Initial render
renderChart(data75);
