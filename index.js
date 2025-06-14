const express = require('express');
const axios = require('axios');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;
const API_URL = 'https://kgrp-api.onrender.com/noticias';
const BACKUP_FILE = 'backup.json';

// Rota principal para o site buscar as noticias
app.get('/noticias', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const noticias = response.data;

    // Salva o backup local
    fs.writeFileSync(BACKUP_FILE, JSON.stringify(noticias, null, 2));
    
    console.log('✅ Dados atualizados da API');
    res.json(noticias);
  } catch (err) {
    console.log('⚠️ Erro na API, carregando backup local');

    if (fs.existsSync(BACKUP_FILE)) {
      const backup = fs.readFileSync(BACKUP_FILE);
      res.json(JSON.parse(backup));
    } else {
      res.status(500).json({ error: 'Sem dados disponíveis' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Servidor proxy rodando em http://localhost:${PORT}`);
});
