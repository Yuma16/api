import { Request, Response } from 'express';
import { showErrors } from '../utils';
import AppointmentStates from '../models/AppointmentStates';

const object = 'appointment states';

export const getStates = async (req: Request, res: Response) =>{
  try {

    const states = await AppointmentStates.findAll({
      order: [['id', 'ASC']]
    });

    res.json(states);

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

export const getStatus = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const status = await AppointmentStates.findByPk(id);

    if(!status) return res.status(404).json({
      message: `Status with id: ${ id }, was not found!`
    });

    res.json(status);

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

export const createStatus = async (req: Request, res: Response) =>{

  const { body } = req;

  try { 

  const status = await AppointmentStates.create(body);

  await status.save();

  res.status(201).json({
    message: 'Status was created successfully!',
    new_specilaity: status
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

export const updateStatus = async (req: Request, res: Response) =>{

  const { body, params: { id } } = req;

  try {

    const status = await AppointmentStates.findByPk(id);

    if(!status) {
      return res.status(404).json({
        message: `Speciality with ID: ${ id } is not exist!`
      });
    };

    await status.update(body);
    await status.save();

    res.json({
      message: 'speciality was updated successfully!',
      status
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

export const deleteStatus = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const status = await AppointmentStates.findByPk(id);

    if(!status) {
      return res.status(404).json({
        message: `Patient with ID: ${ id } is not exist!`
      });
    };

    await status.destroy();

    res.json({
      message: 'Speciality was deleted successfully!'
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