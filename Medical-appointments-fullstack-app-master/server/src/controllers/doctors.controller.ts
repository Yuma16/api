import { Request, Response } from 'express';
import { showErrors } from '../utils';
import Doctor from '../models/Doctor';
import Speciality from '../models/Speciality';
import ConsultingRoom from '../models/ConsultingRoom';
import Floor from '../models/Floor';
import { IDoctor } from '../types/index';

const object = 'doctors';

export const getDoctors = async (req: Request, res: Response) =>{
  try {

    const doctors = await Doctor.findAll({
      include: [
        { 
          model: ConsultingRoom,
          attributes: ['id', 'office_code'],
          include: [
            { model: Floor, attributes: ['id', 'level'] },
          ]          
        },
        { model: Speciality, attributes: ['id', 'speciality_name'] }
      ],
      attributes: { exclude: ['id_office_number', 'id_speciality'] },
      order: [['id', 'ASC']]
    });

    res.json(doctors);

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

export const getDoctor = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const doctor = await Doctor.findByPk(id, {
      include: [
        { 
          model: ConsultingRoom,
          attributes: ['id', 'office_code'],
          include: [
            { model: Floor, attributes: ['id', 'level'] }
          ]
        },
        { model: Speciality, attributes: ['id', 'speciality_name'] }
      ],
      attributes: { exclude: ['id_office_number', 'id_speciality'] }
    });

    if(!doctor) return res.status(404).json({
      message: `Doctor with id: ${ id }, was not found!`
    });

    res.json(doctor);

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

export const createDoctor = async (req: Request, res: Response) =>{

  const { body } = req;

  const { first_name, last_name, email, id_office_number, id_speciality } : IDoctor = body;

  try { 

  if(!first_name || !last_name || !email || !id_office_number || !id_speciality){
    res.sendStatus(400);
  };

  const doctor = await Doctor.create(body);

  await doctor.save();

  res.status(201).json({
    message: 'Doctor was created successfully!',
    new_doctor: doctor
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

export const updateDoctor = async (req: Request, res: Response) =>{

  const { body, params: { id } } = req;

  try {

    const doctor = await Doctor.findByPk(id);

    if(!doctor) {
      return res.status(404).json({
        message: `doctor with ID: ${ id } is not exist!`
      });
    };

    await doctor.update(body);
    await doctor.save();

    res.json({
      message: 'Doctor was updated successfully!',
      doctor
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

export const deleteDoctor = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const doctor = await Doctor.findByPk(id);

    if(!doctor) {
      return res.status(404).json({
        message: `doctor with ID: ${ id } is not exist!`
      });
    };

    await doctor.destroy();

    res.json({
      message: 'doctor was deleted successfully!'
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