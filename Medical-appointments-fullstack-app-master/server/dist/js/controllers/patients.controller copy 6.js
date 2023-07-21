"use strict";
// import { Request, Response } from 'express';
// import { showErrors } from '../utils';
// import Patient from '../models/Patient';
// export const getPatients = async (req: Request, res: Response) =>{
//   try {
//     const patients = await Patient.findAll({
//       order: [['id', 'ASC']]
//     });
//     res.json(patients);
//   } catch (error) {
//     showErrors(
//       error,
//       {
//         message: 'getting',
//         object: 'users'
//       },
//       res
//     );
//   };
// };
// export const getPatient = async (req: Request, res: Response) =>{
//   const { id } = req.params;
//   try { 
//     const patient = await Patient.findByPk(id);
//     if(!patient) return res.status(404).json({
//       message: `User with id: ${ id }, was not found!`
//     });
//     res.json(patient);
//   } catch (error) {
//     showErrors(
//       error,
//       {
//         message: 'getting',
//         object: 'users'
//       },
//       res
//     );
//   };
// };
// export const createPatient = async (req: Request, res: Response) =>{
//   const { body } = req;
//   try { 
//   const patient = await Patient.create(body);
//   await patient.save();
//   res.json({
//     message: 'Patient was created successfully!',
//     new_patient: patient
//   });
//   } catch (error) {
//     showErrors(
//       error,
//       {
//         message: 'creating',
//         object: 'users'
//       },
//       res
//     );
//   };
// };
// export const updatePatient = async (req: Request, res: Response) =>{
//   const { body, params: { id } } = req;
//   try {
//     const patient = await Patient.findByPk(id);
//     if(!patient) {
//       return res.status(404).json({
//         message: `Patient with ID: ${ id } is not exist!`
//       });
//     };
//     await patient.update(body);
//     await patient.save();
//     res.json({
//       message: 'Patient was updated successfully!',
//       patient
//     });
//   } catch (error) {
//     showErrors(
//       error,
//       {
//         message: 'updating',
//         object: 'users'
//       },
//       res
//     );
//   };
// };
// export const deletePatient = async (req: Request, res: Response) =>{
//   const { id } = req.params;
//   try { 
//     const patient = await Patient.findByPk(id);
//     if(!patient) {
//       return res.status(404).json({
//         message: `Patient with ID: ${ id } is not exist!`
//       });
//     };
//     await patient.destroy();
//     res.json({
//       message: 'Patient was deleted successfully!'
//     });
//   } catch (error) {
//     showErrors(
//       error,
//       {
//         message: 'deleting',
//         object: 'users'
//       },
//       res
//     );
//   };
// };
//# sourceMappingURL=patients.controller%20copy%206.js.map