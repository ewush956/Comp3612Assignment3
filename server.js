const express = require('express');
const PORT = process.env.PORT;
const app = express();
const fs = require('fs');

const path = require('path');
const circuitsPath = path.join(__dirname, 'data', 'circuits.json');
const constructorsPath = path.join(__dirname, 'data', 'constructors.json');
const driversPath = path.join(__dirname, 'data', 'drivers.json');
const racesPath = path.join(__dirname, 'data', 'races.json');
const resultsPath = path.join(__dirname, 'data', 'results.json');

const readJSON = (filePath) => {
    try {
        const fullPath = path.resolve(__dirname, filePath);
        const data = fs.readFileSync(fullPath, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading file ${filePath}:`, error);
        return [];
    }
};
const circuits = readJSON(circuitsPath);
const constructors = readJSON(constructorsPath);
const drivers = readJSON(driversPath);
const races = readJSON(racesPath);
const results = readJSON(resultsPath);

app.use(express.json());

app.get('/api/circuits', (req, res) => { res.json({ circuits }); });
app.get('/api/constructors', (req, res) => { res.json({ constructors }); });
app.get('/api/drivers', (req, res) => { res.json({ drivers }); });

app.get('/api/circuits/:circuitId', (req, res) => {
    const circuitId = parseInt(req.params.circuitId);
    const circuit = circuits.find(c => c.circuitId === circuitId);
    if (circuit) res.json(circuit);
    else
        res.status(404).json({ error: 'Circuit not found' });
});

app.get('/api/constructors/:constructorRef', (req, res) => {
    const constructorRef = req.params.constructorRef.toLowerCase();
    const constructor = constructors.find(c => c.constructorRef === constructorRef);
    if (constructor)
        res.json(constructor);
    else
        res.status(404).json({ error: 'Constructor not found' });
});

app.get('/api/races/season/:year', (req, res) => {
    const year = parseInt(req.params.year);
    const seasonRaces = races.filter(r => r.year === year);
    if (seasonRaces.length > 0)
        res.json({ season: year, races: seasonRaces });
    else
        res.status(404).json({ error: 'No races found for the specified season' });
});

app.get('/api/races/id/:raceId', (req, res) => {
    const raceId = parseInt(req.params.raceId);
    const race = races.find(r => r.id === raceId);
    if (race)
        res.json(race);
    else
        res.status(404).json({ error: 'Race not found' });
});

app.get('/api/results/race/:raceId', (req, res) => {
    const raceId = parseInt(req.params.raceId);
    const raceResults = results.filter(r => r.race.id === raceId);
    if (raceResults.length > 0)
        res.json({ raceId, results: raceResults });
    else
        res.status(404).json({ error: 'No results found for the specified race' });
});

app.get('/api/results/season/:year', (req, res) => {
    const year = parseInt(req.params.year);
    const seasonResults = results.filter(r => r.race.year === year);
    if (seasonResults.length > 0)
        res.json({ year, results: seasonResults });
    else
        res.status(404).json({ error: 'No results found for the specified season' });
});

app.get('/api/drivers/:driverRef', (req, res) => {
    const driverRef = req.params.driverRef.toLowerCase();
    const driver = drivers.find(d => d.driverRef === driverRef);
    if (driver)
        res.json(driver);
    else
        res.status(404).json({ error: 'Driver not found' });
});

app.get('/api/driverResults/:driver/:year', (req, res) => {
    const { driver, year } = req.params;
    const driverResults = results.filter(r => {
        r.driver.ref === driver.toLowerCase() && r.race.year === parseInt(year)
    });
    if (driverResults.length > 0)
        res.json({ driver, year: parseInt(year), results: driverResults });
    else
        res.status(404).json({ error: 'No results found for the specified driver and year' });
});

app.get('/api/constructorResults/:constructor/:year', (req, res) => {
    const { constructor, year } = req.params;
    const constructorResults = results.filter(r => {
        r.constructor.ref === constructor.toLowerCase() && r.race.year === parseInt(year)
    });
    if (constructorResults.length > 0)
        res.json({ constructor, year: parseInt(year), results: constructorResults });
    else
        res.status(404).json({ error: 'No results found for the specified constructor and year' });
});

app.use((req, res) => { res.status(404).json({ error: 'Endpoint not found. Please check the URL and try again.' }); });
app.listen(PORT, () => { console.log(`Server is running on http://localhost:${PORT}`); });
