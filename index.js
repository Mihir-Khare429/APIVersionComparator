import { express } from 'express';
import { config } from 'dotenv';
import router from './src/routes/index';

config();
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/healthcheck',(req,res) => {
    res.status(200).send('Healthy!')
})

app.use(router);

app.listen(PORT , () => {
    console.log(`Server is listening on ${PORT}`)
})