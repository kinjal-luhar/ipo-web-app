document.addEventListener("DOMContentLoaded", () => {
  fetch("http://127.0.0.1:8000/api/ipos/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch IPO data");
      }
      return response.json();
    })
    .then((ipos) => {
      const list = document.getElementById("ipo-list");
      ipos.forEach((ipo) => {
        const card = document.createElement("div");
        card.className = "col";

        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <div class="card-body">
              <div class="d-flex align-items-center mb-3">
                <img src="${ipo.company.logo}" alt="${ipo.company.name} logo" class="me-2" width="50"/>
                <h5 class="card-title mb-0">${ipo.company.name}</h5>
              </div>
              <p class="card-text"><strong>Price Band:</strong> ${ipo.price_band}</p>
              <p class="card-text"><strong>Open:</strong> ${ipo.open_date} - <strong>Close:</strong> ${ipo.close_date}</p>
              <p class="card-text"><strong>Status:</strong> ${ipo.status}</p>
              <p class="card-text"><strong>CMP:</strong> ₹${ipo.current_market_price} | <strong>Return:</strong> ${ipo.current_return}%</p>
              <div class="mt-3">
                ${ipo.documents.map(doc => `
                  <a href="${doc.rhp_pdf}" target="_blank" class="btn btn-outline-primary btn-sm me-2">RHP</a>
                  <a href="${doc.drhp_pdf}" target="_blank" class="btn btn-outline-secondary btn-sm">DRHP</a>
                `).join("")}
              </div>
            </div>
          </div>
        `;

        list.appendChild(card);
      });
    })
    .catch((error) => {
      console.error(error.message);
      document.getElementById("ipo-list").innerHTML =
        `<p class="text-danger">Unable to load IPOs. Try again later.</p>`;
    });
});
