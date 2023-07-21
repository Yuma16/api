import { Request, Response } from 'express';
import { showErrors } from '../utils';
import Floor from '../models/Floor';

const object = 'floors';

export const getFloors = async (req: Request, res: Response) =>{
  try {

    const floors = await Floor.findAll({
      order: [['id', 'ASC']]
    });

    res.json(floors);

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

export const getFloor = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const floor = await Floor.findByPk(id);

    if(!floor) return res.status(404).json({
      message: `Floor with id: ${ id }, was not found!`
    });

    res.json(floor);

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

export const createFloor = async (req: Request, res: Response) =>{

  const { body } = req;

  try { 

  const floor = await Floor.create(body);

  await floor.save();

  res.status(201).json({
    message: 'Floor was created successfully!',
    new_floor: floor
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

export const updateFloor = async (req: Request, res: Response) =>{

  const { body, params: { id } } = req;

  try {

    const floor = await Floor.findByPk(id);

    if(!floor) {
      return res.status(404).json({
        message: `floor with ID: ${ id } is not exist!`
      });
    };

    await floor.update(body);
    await floor.save();

    res.json({
      message: 'Floor was updated successfully!',
      floor
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

export const deleteFloor = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const floor = await Floor.findByPk(id);

    if(!floor) {
      return res.status(404).json({
        message: `Floor with ID: ${ id } is not exist!`
      });
    };

    await floor.destroy();

    res.json({
      message: 'Floor was deleted successfully!'
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