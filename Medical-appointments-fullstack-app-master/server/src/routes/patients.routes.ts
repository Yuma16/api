import { Router, Request, Response, NextFunction } from "express";
import {
  getPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} from "../controllers/patients.controller";
import { check } from 'express-validator';
import validateFields from "../middlewares/validateFields";
import isNumber from "../middlewares/isNumber";
import validDate from "../middlewares/validDate";
import hasOnlyCharacters from "../middlewares/hasOnlyCharacters";

const router = Router();

router.get("/", getPatients);
router.get("/:id", getPatient);
router.post("/",
  [
    check('first_name', 'First name could not be empty!').not().isEmpty(),
    check('first_name').custom(hasOnlyCharacters),
    check('last_name', 'Last name could not be empty!').not().isEmpty(),
    check('last_name').custom(hasOnlyCharacters),
    check('birth_date', 'Birth date could not be empty!').not().isEmpty(),
    check('birth_date').custom(validDate),
    check('phone', 'Phone could not be empty!').not().isEmpty(),
    check('phone').custom(isNumber),    
    validateFields
  ], 
  createPatient
  );
router.put("/:id",
  [
    check('first_name', 'First name could not be empty!').not().isEmpty(),
    check('first_name').custom(hasOnlyCharacters),
    check('last_name', 'Last name could not be empty!').not().isEmpty(),
    check('last_name').custom(hasOnlyCharacters),
    check('birth_date', 'Birth date could not be empty!').not().isEmpty(),
    check('birth_date').custom(validDate),
    check('phone', 'Phone could not be empty!').not().isEmpty(),
    check('phone').custom(isNumber),    
    validateFields
  ], 
  updatePatient
  );
router.delete("/:id", deletePatient);

export default router;
