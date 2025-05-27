document.getElementById("company-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form reload
  
    const name = document.getElementById("name").value;
    const logo = document.getElementById("logo").value;
  
    fetch("http://127.0.0.1:8000/api/companies/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, logo: logo }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to create company");
        }
      })
      .then((data) => {
        document.getElementById("message").innerHTML =
          `<div class="alert alert-success">Company added: ${data.name}</div>`;
        document.getElementById("company-form").reset();
      })
      .catch((error) => {
        document.getElementById("message").innerHTML =
          `<div class="alert alert-danger">${error.message}</div>`;
      });
  });
  