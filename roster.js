document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("rosterGrid");
    const playerModal = new bootstrap.Modal(document.getElementById('playerModal'));
    const playerModalBody = document.getElementById('playerModalBody');
    const playerModalLabel = document.getElementById('playerModalLabel');
    const allPlayersBtn = document.getElementById('all-players');
    const starPlayersBtn = document.getElementById('star-players');
    
    // Render function to display all player cards in the DOM
    const render = (list) => {
        grid.innerHTML = "";
        
        if (list.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-info">
                        <i class="fas fa-info-circle me-2"></i> No players found matching the current filter.
                    </div>
                </div>
            `;
            return;
        }
        
        list.forEach((player, index) => {
            const col = document.createElement("div");
            col.className = "col-12 col-sm-6 col-md-4 col-lg-3";
            
            const card = document.createElement("div");
            
            if (player.starPlayer) {
                card.className = "card h-100 shadow star-player"; 
            } else {
                card.className = "card h-100 shadow-sm";
            }
            
            // Populate the card with player info
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
            
            col.appendChild(card);
            grid.appendChild(col);
            
            // Add event listener for the More Info button
            const moreInfoBtn = card.querySelector('.btn-more-info');
            moreInfoBtn.addEventListener('click', function() {
                const playerIndex = this.getAttribute('data-player-index');
                const selectedPlayer = list[playerIndex];
                
                // Update the modal content
                playerModalLabel.textContent = selectedPlayer.fullName;
                
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

                playerModal.show();
            });
        });
    };
    
    // Filter handlers
    allPlayersBtn.addEventListener('click', function() {
        allPlayersBtn.classList.add('active');
        starPlayersBtn.classList.remove('active');
        render(players);
    });
    
    starPlayersBtn.addEventListener('click', function() {
        starPlayersBtn.classList.add('active');
        allPlayersBtn.classList.remove('active');
        const starPlayers = players.filter(player => player.starPlayer);
        render(starPlayers);
    });

    // Initialize the roster with all players
    render(players);
});
