import { Router } from "express";
import {
  getRooms,
  getRoom,
  createRoom,
  updateRoom,
  deleteRoom
} from "../controllers/consultingRooms.controller";
import { check } from 'express-validator';
import validateFields from "../middlewares/validateFields";
import isNumber from "../middlewares/isNumber";

const router = Router();

router.get("/", getRooms);
router.get("/:id", getRoom);
router.post("/",
  [
    check('office_code', 'Office code could not be empty!').not().isEmpty(),
    check('id_floor', 'Id floor could not be empty!').not().isEmpty(),
    check('id_floor').custom(isNumber),    
    validateFields
  ], 
  createRoom
  );
router.put("/:id",
  [
    check('office_code', 'Office code could not be empty!').not().isEmpty(),
    check('id_floor', 'Id floor could not be empty!').not().isEmpty(),
    check('id_floor').custom(isNumber),    
    validateFields
  ], 
  updateRoom
  );
router.delete("/:id", deleteRoom);

export default router;
