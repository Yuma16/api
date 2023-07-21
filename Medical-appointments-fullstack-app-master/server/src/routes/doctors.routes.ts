import { Router, Request, Response, NextFunction } from "express";
import {
  getDoctors,
  getDoctor,
  createDoctor,
  updateDoctor,
  deleteDoctor
} from "../controllers/doctors.controller";
import { check } from 'express-validator';
import validateFields from "../middlewares/validateFields";
import isNumber from "../middlewares/isNumber";
import validDate from "../middlewares/validDate";
import hasOnlyCharacters from "../middlewares/hasOnlyCharacters";

const router = Router();

router.get("/", getDoctors);
router.get("/:id", getDoctor);
router.post("/",
  [
    check('first_name', 'First name could not be empty!').not().isEmpty(),
    check('first_name').custom(hasOnlyCharacters),
    check('last_name', 'First name could not be empty!').not().isEmpty(),
    check('last_name').custom(hasOnlyCharacters),
    check('email', 'Email date could not be empty!').not().isEmpty(),
    check('email', 'Email is not valid!').isEmail(),
    check('id_office_number', 'Id office number could not be empty!').not().isEmpty(),
    check('id_office_number').custom(isNumber),    
    check('id_speciality', 'Id speciality could not be empty!').not().isEmpty(),
    check('id_speciality').custom(isNumber),    
    validateFields
  ], 
  createDoctor
  );
router.put("/:id",
  [
    check('first_name', 'First name could not be empty!').not().isEmpty(),
    check('first_name').custom(hasOnlyCharacters),
    check('last_name', 'Last name could not be empty!').not().isEmpty(),
    check('last_name').custom(hasOnlyCharacters),
    check('email', 'Email could not be empty!').not().isEmpty(),
    check('email', 'Email is not valid!').isEmail(),
    check('id_office_number', 'Id office number could not be empty!').not().isEmpty(),
    check('id_office_number').custom(isNumber),    
    check('id_speciality', 'Id speciality could not be empty!').not().isEmpty(),
    check('id_speciality').custom(isNumber),    
    validateFields
  ], 
  updateDoctor
  );
router.delete("/:id", deleteDoctor);

export default router;
