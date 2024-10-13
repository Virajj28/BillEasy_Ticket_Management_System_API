import { Router } from 'express';

const ticketRouter = Router();

ticketRouter.get("/", (req, res) => {
    res.send("Ticket works");
})

export default ticketRouter;