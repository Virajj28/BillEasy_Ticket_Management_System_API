import { Router } from 'express';

const authRouter = Router();

authRouter.get("/", (req, res) => {
    res.send("Auth works");
})

export default authRouter;