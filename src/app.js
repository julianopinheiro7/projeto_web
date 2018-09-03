const express = require('express');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('Servidor rodando na porta 3000');
});