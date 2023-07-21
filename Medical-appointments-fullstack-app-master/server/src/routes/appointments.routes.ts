import { Router, Request, Response, NextFunction } from "express";
import {
  getAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment
} from "../controllers/appointments.controller";
import { check } from 'express-validator';
import validateFields from "../middlewares/validateFields";
import isNumber from "../middlewares/isNumber";
import validDate from "../middlewares/validDate";

const router = Router();

router.get("/", getAppointments);
router.get("/:id", getAppointment);
router.post("/",
  [
    check('id_doctor', 'Id doctor could not be empty!').not().isEmpty(),
    check('id_doctor').custom(isNumber),    
    check('id_patient', 'Id patient could not be empty!').not().isEmpty(),
    check('id_patient').custom(isNumber),    
    check('appointment_date', 'Appointment date could not be empty!').not().isEmpty(),
    check('appointment_date').custom(validDate),
    check('id_status_appointment').custom(isNumber),    
    validateFields
  ], 
  createAppointment
  );
router.put("/:id",
  [
    check('id_doctor', 'Id doctor could not be empty!').not().isEmpty(),
    check('id_doctor').custom(isNumber),    
    check('id_patient', 'Id patient could not be empty!').not().isEmpty(),
    check('id_patient').custom(isNumber),    
    check('appointment_date', 'Appointment date could not be empty!').not().isEmpty(),
    check('appointment_date').custom(validDate),
    check('id_status_appointment').custom(isNumber),    
    validateFields
  ], 
  updateAppointment
  );
router.delete("/:id", deleteAppointment);

export default router;
