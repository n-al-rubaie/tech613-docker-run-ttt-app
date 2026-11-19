const db = db.getSiblingDB('tictactoe');

const now = new Date();

db.scoreboard_entries.insertMany([
    { initials: 'AAA', score: 100, createdAt: now, updatedAt: now },
    { initials: 'BBB', score: 200, createdAt: now, updatedAt: now },
    { initials: 'CCC', score: 300, createdAt: now, updatedAt: now },
    { initials: 'DDD', score: 400, createdAt: now, updatedAt: now },
    { initials: 'EEE', score: 500, createdAt: now, updatedAt: now },
    { initials: 'FFF', score: 600, createdAt: now, updatedAt: now },
    { initials: 'GGG', score: 700, createdAt: now, updatedAt: now },
    { initials: 'HHH', score: 800, createdAt: now, updatedAt: now },
    { initials: 'III', score: 900, createdAt: now, updatedAt: now },
    { initials: 'JJJ', score: 1000, createdAt: now, updatedAt: now }
]);

print('MongoDB initialisation completed: 10 scoreboard records inserted.');
