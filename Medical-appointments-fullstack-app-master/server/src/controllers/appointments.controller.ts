import { Request, Response } from 'express';
import { showErrors } from '../utils';
import Appointment from '../models/Appointment';
import Doctor from '../models/Doctor';
import ConsultingRoom from '../models/ConsultingRoom';
import Floor from '../models/Floor';
import Speciality from '../models/Speciality';
import Patient from '../models/Patient';
import AppointmentStates from '../models/AppointmentStates';

const object = 'appointment states';

export const getAppointments = async (req: Request, res: Response) =>{
  try {

    const appointments = await Appointment.findAll({
      include: [
        { 
          model: Doctor,
          attributes: ['id', 'first_name', 'last_name', 'email'],
          include: [
            {
              model: ConsultingRoom,
              attributes: ['id', 'office_code'],
              include: [
                { model: Floor, attributes: ['id', 'level']}
              ]
            },
            {
              model: Speciality,
              attributes: ['id', 'speciality_name'],
            }
          ]
        },
        { 
          model: Patient,
          attributes: ['id', 'first_name', 'last_name', 'birth_date', 'phone']          
        },
        { 
          model: AppointmentStates,
          attributes: ['id', 'status']          
        },
      ],
      attributes: {
        exclude: ['id_patient', 'id_doctor', 'id_status_appointment']
      },
      order: [['id', 'ASC']]
    });

    res.json(appointments);

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

export const getAppointment = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const appointment = await Appointment.findByPk(id, {
      include: [
        { 
          model: Doctor,
          attributes: ['id', 'first_name', 'last_name', 'email'],
          include: [
            {
              model: ConsultingRoom,
              attributes: ['id', 'office_code'],
              include: [
                { model: Floor, attributes: ['id', 'level']}
              ]
            },
            {
              model: Speciality,
              attributes: ['id', 'speciality_name'],
            }
          ]
        },
        { 
          model: Patient,
          attributes: ['id', 'first_name', 'last_name', 'birth_date', 'phone']          
        },
        { 
          model: AppointmentStates,
          attributes: ['id', 'status']          
        },
      ],
      attributes: {
        exclude: ['id_patient', 'id_doctor', 'id_status_appointment']
      }
    });

    if(!appointment) return res.status(404).json({
      message: `Appointment with id: ${ id }, was not found!`
    });

    res.json(appointment);

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

export const createAppointment = async (req: Request, res: Response) =>{

  const { body } = req;

  try { 

  const appointment = await Appointment.create(body);

  await appointment.save();

  res.status(201).json({
    message: 'Appointment was created successfully!',
    new_appointment: appointment
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

export const updateAppointment = async (req: Request, res: Response) =>{

  const { body, params: { id } } = req;

  try {

    const appointment = await Appointment.findByPk(id);

    if(!appointment) {
      return res.status(404).json({
        message: `Speciality with ID: ${ id } is not exist!`
      });
    };

    await appointment.update(body);
    await appointment.save();

    res.json({
      message: 'Appointment was updated successfully!',
      appointment
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

export const deleteAppointment = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const appointment = await Appointment.findByPk(id);

    if(!appointment) {
      return res.status(404).json({
        message: `Appointment with ID: ${ id } is not exist!`
      });
    };

    await appointment.destroy();

    res.json({
      message: 'Appointment was deleted successfully!'
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