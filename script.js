
document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("table").querySelector("tbody");

    // Add a new row
    function myFunction(event) {
        event.preventDefault(); // Stop page reload
        const name = document.getElementById("name").value;

        if (name.trim()) {
            table.insertAdjacentHTML(
                "beforeend",
                `<tr>
                    <td>${name}</td>
                    <td>Tilgjengelig</td>
                    <td>
                        <button class="endre-status">Endre Status</button>
                        <button class="slett">Slett</button>
                    </td>
                </tr>`
            );
            document.getElementById("name").value = ""; // Clear the input
        }
    }

    // Handle clicks in the table
    table.addEventListener("click", (event) => {
        if (event.target.classList.contains("slett")) {
            event.target.closest("tr").remove(); // Delete the row
        }

        if (event.target.classList.contains("endre-status")) {
            const statusCell = event.target.closest("tr").children[1];
            statusCell.textContent =
                statusCell.textContent === "Tilgjengelig" ? "Opptatt" : "Tilgjengelig";
        }
    });

    // Allow the function to work in HTML
    window.myFunction = myFunction;
});
