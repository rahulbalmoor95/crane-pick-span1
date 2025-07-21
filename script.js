const beams = [
  { id: 1, weight: 76, capacity: 78 },
  { id: 2, weight: 84, capacity: 88 },
  { id: 3, weight: 83, capacity: 88 },
  { id: 4, weight: 86, capacity: 88 },
  { id: 5, weight: 85, capacity: 88 },
  { id: 6, weight: 87, capacity: 88 },
  { id: 7, weight: 86, capacity: 88 },
  { id: 8, weight: 84, capacity: 88 },
  { id: 9, weight: 83, capacity: 88 },
  { id: 10, weight: 82, capacity: 88 },
  { id: 11, weight: 77, capacity: 78 }
];

function renderTable() {
  const tbody = document.getElementById("beamTable");
  tbody.innerHTML = ""; // clear existing rows

  beams.forEach(beam => {
    const status = beam.weight <= beam.capacity ? "PASS" : "OVERLOAD";
    const tr = document.createElement("tr");
    tr.className = beam.weight <= beam.capacity ? "pass" : "fail";
    tr.innerHTML = `
      <td>${beam.id}</td>
      <td>${beam.weight}</td>
      <td>${beam.capacity}</td>
      <td>${status}</td>
    `;
    tbody.appendChild(tr);
  });
}

document.addEventListener("DOMContentLoaded", renderTable);
