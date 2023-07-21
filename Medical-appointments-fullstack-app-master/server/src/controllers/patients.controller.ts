import { Request, Response } from 'express';
import { showErrors } from '../utils';
import Patient from '../models/Patient';
import { IPatient } from '../types';

const object = 'patients';

export const getPatients = async (req: Request, res: Response) =>{
  try {

    const patients = await Patient.findAll({
      order: [['id', 'ASC']]
    });

    res.json(patients);

  } catch (error) {
    showErrors(
      error,
      {
        message: 'getting',
        object
      },
      res
    );
  };
};

export const getPatient = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const patient = await Patient.findByPk(id);

    if(!patient) return res.status(404).json({
      message: `Patient with id: ${ id }, was not found!`
    });

    res.json(patient);

  } catch (error) {
    showErrors(
      error,
      {
        message: 'getting',
        object
      },
      res
    );
  };
};

export const createPatient = async (req: Request, res: Response) =>{

  const { body } = req;

  const { first_name, last_name, birth_date, phone } : IPatient = body;

  try { 

  if(!first_name || !last_name || !birth_date || !phone){
    return res.sendStatus(400);
  };

  const patient = await Patient.create(body);

  await patient.save();

  res.status(201).json({
    message: 'Patient was created successfully!',
    new_patient: patient
  });

  } catch (error) {
    showErrors(
      error,
      {
        message: 'creating',
        object
      },
      res
    );
  };
};

export const updatePatient = async (req: Request, res: Response) =>{

  const { body, params: { id } } = req;

  try {

    const patient = await Patient.findByPk(id);

    if(!patient) {
      return res.status(404).json({
        message: `Patient with ID: ${ id } is not exist!`
      });
    };

    await patient.update(body);
    await patient.save();

    res.json({
      message: 'Patient was updated successfully!',
      patient
    });

  } catch (error) {
    showErrors(
      error,
      {
        message: 'updating',
        object
      },
      res
    );
  };
};

export const deletePatient = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const patient = await Patient.findByPk(id);

    if(!patient) {
      return res.status(404).json({
        message: `Patient with ID: ${ id } is not exist!`
      });
    };

    await patient.destroy();

    res.json({
      message: 'Patient was deleted successfully!'
    });

  } catch (error) {
    showErrors(
      error,
      {
        message: 'deleting',
        object
      },
      res
    );
  };
};