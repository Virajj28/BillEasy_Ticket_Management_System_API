import express from 'express';
import authRouter from './routes/auth';
import userRouter from './routes/user';
import ticketRouter from './routes/ticket';
import authenticationMiddleware from './middleware/authentication';
import bodyParser from 'body-parser';
import sequelize from './models';
import User from './models/user';

const app = express();
const port = process.env.PORT || 3000;

sequelize.authenticate().then(async () => {
    await sequelize.sync({ force: true }); // 'force: true' drops the table if it exists
    console.log('Connection has been established successfully.');

}).catch((error) => {
    console.error('Unable to connect to the database:', error);
})

app.listen(port);
app.use(bodyParser.json())
app.get("/healthcheck", (_, res) => {
    res.send("OK");
});
app.use('/auth', authRouter);
app.use('/users', authenticationMiddleware, userRouter);
app.use('/tickets', authenticationMiddleware, ticketRouter);
