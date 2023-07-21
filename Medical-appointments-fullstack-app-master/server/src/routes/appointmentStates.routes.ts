import { Router } from "express";
import {
  getStates,
  getStatus,
  createStatus,
  updateStatus,
  deleteStatus
} from "../controllers/appointmentStates.controller";
import { check } from 'express-validator';
import validateFields from "../middlewares/validateFields";
import hasOnlyCharacters from "../middlewares/hasOnlyCharacters";

const router = Router();

router.get("/", getStates);
router.get("/:id", getStatus);
router.post("/",
  [
    check('status', 'Status could not be empty!').not().isEmpty(),
    check('status').custom(hasOnlyCharacters),
    validateFields
  ], 
  createStatus
  );
router.put("/:id",
  [
    check('status', 'Status could not be empty!').not().isEmpty(),
    check('status').custom(hasOnlyCharacters),
    validateFields
  ], 
  updateStatus
  );
router.delete("/:id", deleteStatus);

export default router;
