import Router from "koa-router";

import {
  getAll,
  getById,
  create,
  update,
  remove,
} from "../controllers/components.controller";

const router = new Router();

router.get("/components", getAll);
router.get("/components/:id", getById);
router.post("/components", create);
router.put("/components/:id", update);
router.delete("/components/:id", remove);

export default router;
