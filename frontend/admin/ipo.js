document.getElementById("ipo-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    company: parseInt(document.getElementById("company_id").value),
    price_band: document.getElementById("price_band").value,
    open_date: document.getElementById("open_date").value,
    close_date: document.getElementById("close_date").value,
    issue_size: document.getElementById("issue_size").value,
    issue_type: document.getElementById("issue_type").value,
    listing_date: document.getElementById("listing_date").value,
    status: document.getElementById("status").value,
    ipo_price: parseFloat(document.getElementById("ipo_price").value),
    listing_price: parseFloat(document.getElementById("listing_price").value),
    listing_gain: parseFloat(document.getElementById("listing_gain").value),
    current_market_price: parseFloat(document.getElementById("current_market_price").value),
    current_return: parseFloat(document.getElementById("current_return").value),
  };
    console.log("Sending IPO data:", data);

  fetch("http://127.0.0.1:8000/api/ipos/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to add IPO");
      return response.json();
    })
    .then((data) => {
      document.getElementById("message").innerHTML =
        `<div class="alert alert-success">IPO added successfully!</div>`;
      document.getElementById("ipo-form").reset();
    })
    .catch((error) => {
      document.getElementById("message").innerHTML =
        `<div class="alert alert-danger">${error.message}</div>`;
    });
});
