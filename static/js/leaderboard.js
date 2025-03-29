document.addEventListener('DOMContentLoaded', function() {
    fetch('/get_leaderboard')
        .then(response => response.json())
        .then(data => {
            const tbody = document.querySelector('#leaderboard tbody');
            tbody.innerHTML = ''; // Clear existing entries
            data.forEach((entry, index) => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${entry.player}</td>
                    <td>${entry.score}</td>
                `;
                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching leaderboard:', error));
});
function submitScore(player, score) {
    fetch('/submit_score', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ player: player, score: score }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        // Optionally, refresh the leaderboard
        fetchLeaderboard();
    })
    .catch(error => console.error('Error submitting score:', error));
}
