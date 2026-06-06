const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Statische Dateien bereitstellen
app.use(express.static(__dirname));

// Startseite
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
