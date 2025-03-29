import json
import os

LEADERBOARD_FILE = 'leaderboard.json'

def load_leaderboard():
    if os.path.exists(LEADERBOARD_FILE):
        with open(LEADERBOARD_FILE, 'r') as file:
            return json.load(file)
    return []

def save_leaderboard(leaderboard):
    with open(LEADERBOARD_FILE, 'w') as file:
        json.dump(leaderboard, file, indent=4)

def get_leaderboard():
    leaderboard = load_leaderboard()
    # Sort by score in descending order
    return sorted(leaderboard, key=lambda x: x['score'], reverse=True)

def add_score(player, score):
    leaderboard = load_leaderboard()
    leaderboard.append({'player': player, 'score': score})
    save_leaderboard(leaderboard)
