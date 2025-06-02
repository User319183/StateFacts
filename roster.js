// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get DOM elements, which might be null if they don't exist on the current page
    const grid = document.getElementById("rosterGrid"); // Roster grid container
    const playerModalElement = document.getElementById('playerModal'); // Modal element
    const playerModalBody = document.getElementById('playerModalBody'); // Modal body
    const playerModalLabel = document.getElementById('playerModalLabel'); // Modal label
    const allPlayersBtn = document.getElementById('all-players'); // All players filter button
    const starPlayersBtn = document.getElementById('star-players'); // Star players filter button

    // Only continue with roster functionality if necessary elements exist on the page
    if (!grid) {
        return; // Exit early if we're not on the roster page
    }

    // Initialize modal only if the element exists
    let playerModal;
    if (playerModalElement) {
        playerModal = new bootstrap.Modal(playerModalElement); // Create Bootstrap modal instance
    }

    // Render function to display all player cards in the DOM
    const render = (list) => {
        grid.innerHTML = ""; // Clear grid

        if (list.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i> No players found matching the current filter.
                    </div>
                </div>
            `; // Show message if no players found
            return;
        }

        list.forEach((player, index) => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-3"; // Set column classes

            const card = document.createElement("div");

            if (player.starPlayer) {
                card.className = "card h-100 shadow star-player"; // Add special class for star players
            } else {
                card.className = "card h-100 shadow-sm"; // Regular card class
            }

            // Populating the card with player info
            card.innerHTML = `
                <div class="position-relative">
                    <img src="${player.photo}" alt="${player.fullName}" class="card-img-top" />
                    <span class="position-badge position-${player.position.toLowerCase()}">${player.position}</span>
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">${player.fullName}</h5>
                    <p class="card-text text-muted text-center">Age: ${player.age}</p>
                    <div class="text-center">
                        <button class="btn btn-primary btn-more-info" data-player-index="${index}">
                            <i class="fas fa-info-circle me-1"></i> More Info
                        </button>
                    </div>
                </div>
            `;

            col.appendChild(card); // Add card to column
            grid.appendChild(col); // Add column to grid

            // Add event listener for the More Info button
            const moreInfoBtn = card.querySelector('.btn-more-info'); // Get More Info button
            moreInfoBtn.addEventListener('click', function () {
                const playerIndex = this.getAttribute('data-player-index'); // Get player index
                const selectedPlayer = list[playerIndex]; // Get selected player

                // Update the modal content
                playerModalLabel.textContent = selectedPlayer.fullName; // Set modal label

                // Determine player status badge
                let statusBadge = '';
                if (selectedPlayer.starPlayer) {
                    statusBadge = '<span class="badge bg-warning text-dark me-2"><i class="fas fa-star me-1"></i> Star Player</span>';
                }

                playerModalBody.innerHTML = `
                    <div class="row">
                        <div class="col-md-5 text-center mb-3">
                            <img src="${selectedPlayer.photo}" alt="${selectedPlayer.fullName}" 
                                class="img-fluid rounded mb-3" style="max-height: 300px;">
                            <div>${statusBadge}<span class="badge bg-primary"><i class="fas fa-user-tag me-1"></i>${selectedPlayer.position}</span></div>
                        </div>
                        <div class="col-md-7">
                            <h4 class="mb-3">${selectedPlayer.fullName}</h4>
                            <div class="mb-3">
                                <div class="d-flex align-items-center mb-2">
                                    <div class="me-3"><strong>Age:</strong></div>
                                    <div>${selectedPlayer.age}</div>
                                </div>
                            </div>
                            <div class="alert alert-info">
                                <h5 class="alert-heading"><i class="fas fa-lightbulb me-2"></i>Did you know?</h5>
                                <p class="mb-0">${selectedPlayer.hiddenDetail}</p>
                            </div>
                        </div>
                    </div>
                `;

                // Show the modal if it exists
                if (playerModal) {
                    playerModal.show(); // Show modal
                }
            });
        });
    };

    // Filter handlers | only add event listeners if the elements exist
    if (allPlayersBtn && starPlayersBtn) {
        allPlayersBtn.addEventListener('click', function () {
            allPlayersBtn.classList.add('active'); // Highlight all players button
            starPlayersBtn.classList.remove('active'); // Unhighlight star players button
            render(players); // Show all players
        });

        starPlayersBtn.addEventListener('click', function () {
            starPlayersBtn.classList.add('active'); // Highlight star players button
            allPlayersBtn.classList.remove('active'); // Unhighlight all players button
            const starPlayers = players.filter(player => player.starPlayer); // Filter star players
            render(starPlayers); // Show only star players
        });
    }

    // Init the roster with all players only if we're on the roster page
    if (grid && players) {
        render(players); // Render all players on page load
    }
});
