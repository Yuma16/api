import { Router } from "express";
import {
  getSpecialities,
  getSpeciality,
  createSpecilaity,
  updateSpeciality,
  deleteSpeciality
} from "../controllers/specialities.controller";
import { check } from 'express-validator';
import validateFields from "../middlewares/validateFields";
import hasOnlyCharacters from "../middlewares/hasOnlyCharacters";

const router = Router();

router.get("/", getSpecialities);
router.get("/:id", getSpeciality);
router.post("/",
  [
    check('speciality_name', 'First name could not be empty!').not().isEmpty(),
    check('speciality_name').custom(hasOnlyCharacters),
    validateFields
  ], 
  createSpecilaity
  );
router.put("/:id",
  [
    check('speciality_name', 'Speciality name could not be empty!').not().isEmpty(),
    check('speciality_name').custom(hasOnlyCharacters),
    validateFields
  ], 
  updateSpeciality
  );
router.delete("/:id", deleteSpeciality);

export default router;
