import { Router } from "express";
import {
  getFloors,
  getFloor,
  createFloor,
  updateFloor,
  deleteFloor
} from "../controllers/floors.controller";
import { check } from 'express-validator';
import validateFields from "../middlewares/validateFields";
import isNumber from "../middlewares/isNumber";

const router = Router();

router.get("/", getFloors);
router.get("/:id", getFloor);
router.post("/",
  [
    check('level', 'Level could not be empty!').not().isEmpty(),
    check('level').custom(isNumber),    
    validateFields
  ], 
  createFloor
  );
router.put("/:id",
  [
    check('level', 'Level could not be empty!').not().isEmpty(),
    check('level').custom(isNumber),    
    validateFields
  ], 
  updateFloor
  );
router.delete("/:id", deleteFloor);

export default router;
