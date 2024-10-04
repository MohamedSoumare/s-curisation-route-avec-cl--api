import express from 'express';

const app = express();


const API_KEY = 'Simplon_2024';

function checkApiKey(req, res, next) {
  const apiKey = req.headers['Simplon_2024'];

  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ message: 'Accès refusé. Clé API manquante ou invalide.' });
  }
  next();
}

app.get('/api/private-data', checkApiKey, (req, res) => {
  res.json({ message: 'Voici des données protégées.' });
});

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
