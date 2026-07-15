import { Router } from "express";

import {
  create,
  getAll,
  getOne,
  update,
  remove,
} from "./service.controller";

import { authenticate } from "../auth/auth.middleware";

const router = Router();

router.use(authenticate);

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);
router.put("/:id", update);
router.delete("/:id", remove);

export default router;