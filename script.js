async function fetchResults() {
    try {
      const response = await fetch("/results");
      const results = await response.json();
      const tableBody = document.querySelector("#results-table tbody");
  
      results.forEach((result) => {
        const row = document.createElement("tr");
        row.innerHTML = <td>${result.rule}</td><td>${result.status}</td>;
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error fetching results:", error.message);
    }
  }
  
  window.onload = fetchResults;