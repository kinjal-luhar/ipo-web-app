document.getElementById("document-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    ipo: parseInt(document.getElementById("ipo_id").value),
    rhp_pdf: document.getElementById("rhp_pdf").value,
    drhp_pdf: document.getElementById("drhp_pdf").value,
  };

  fetch("http://127.0.0.1:8000/api/documents/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Failed to upload document");
      return response.json();
    })
    .then((data) => {
      document.getElementById("message").innerHTML =
        `<div class="alert alert-success">Documents uploaded successfully!</div>`;
      document.getElementById("document-form").reset();
    })
    .catch((error) => {
      document.getElementById("message").innerHTML =
        `<div class="alert alert-danger">${error.message}</div>`;
    });
});
