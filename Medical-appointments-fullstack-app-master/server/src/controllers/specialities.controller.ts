import { Request, Response } from 'express';
import { showErrors } from '../utils';
import Speciality from '../models/Speciality';

const object = 'specialities';

export const getSpecialities = async (req: Request, res: Response) =>{
  try {

    const specialities = await Speciality.findAll({
      order: [['id', 'ASC']]
    });

    res.json(specialities);

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

export const getSpeciality = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const speciality = await Speciality.findByPk(id);

    if(!speciality) return res.status(404).json({
      message: `User with id: ${ id }, was not found!`
    });

    res.json(speciality);

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

export const createSpecilaity = async (req: Request, res: Response) =>{

  const { body } = req;

  try { 

  const specilaity = await Speciality.create(body);

  await specilaity.save();

  res.status(201).json({
    message: 'specilaity was created successfully!',
    new_specilaity: specilaity
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

export const updateSpeciality = async (req: Request, res: Response) =>{

  const { body, params: { id } } = req;

  try {

    const speciality = await Speciality.findByPk(id);

    if(!speciality) {
      return res.status(404).json({
        message: `Speciality with ID: ${ id } is not exist!`
      });
    };

    await speciality.update(body);
    await speciality.save();

    res.json({
      message: 'speciality was updated successfully!',
      speciality
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

export const deleteSpeciality = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const speciality = await Speciality.findByPk(id);

    if(!speciality) {
      return res.status(404).json({
        message: `Patient with ID: ${ id } is not exist!`
      });
    };

    await speciality.destroy();

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