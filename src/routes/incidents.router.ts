import Router from "koa-router";

import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../controllers/incidents.controller";

const router = new Router();

router.get("/incidents", getAll);
router.get("/incidents/:id", getById);
router.post("/incidents", create);
router.put("/incidents/:id", update);
router.delete("/incidents/:id", remove);

export default router;
