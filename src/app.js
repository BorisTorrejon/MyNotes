import express from 'express';
import {create} from 'express-handlebars';
import indexRouter from './routes/index.routes';
import path from 'path';
import morgan from 'morgan';

const app = express();
const hbs = create({
    extname: '.hbs',
    layoutsDir: path.join("src/views", "layouts"),
    partialsDir: path.join("src/views","partials"),
    defaultLayout:'main'
});

app.set("views",path.join(__dirname,"views"));

app.engine(".hbs", hbs.engine);

app.set("view engine", ".hbs");

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

app.use(indexRouter);

export default app;