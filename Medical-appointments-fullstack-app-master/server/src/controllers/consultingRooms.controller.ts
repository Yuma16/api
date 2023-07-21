import { Request, Response } from 'express';
import { showErrors } from '../utils';
import ConsultingRoom from '../models/ConsultingRoom';
import Floor from '../models/Floor';

const object = 'consulting rooms';

export const getRooms = async (req: Request, res: Response) =>{
  try {

    const rooms = await ConsultingRoom.findAll({
      include: [
        { model: Floor, attributes: ['level'] }
      ],
      order: [['id', 'ASC']]
    });

    res.json(rooms);

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

export const getRoom = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const room = await ConsultingRoom.findByPk(id, {
      include: [
        { model: Floor, attributes: ['id', 'level'] }
      ],
      attributes: {
        exclude: ['id_floor']
      }
    });

    if(!room) return res.status(404).json({
      message: `Consulting room with id: ${ id }, was not found!`
    });

    res.json(room);

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

export const createRoom = async (req: Request, res: Response) =>{

  const { body } = req;

  try { 

  const room = await ConsultingRoom.create(body);

  await room.save();

  res.status(201).json({
    message: 'Consulting room was created successfully!',
    new_room: room
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

export const updateRoom = async (req: Request, res: Response) =>{

  const { body, params: { id } } = req;

  try {

    const room = await ConsultingRoom.findByPk(id);

    if(!room) {
      return res.status(404).json({
        message: `Consulting room with ID: ${ id } is not exist!`
      });
    };

    await room.update(body);
    await room.save();

    res.json({
      message: 'Consulting room was updated successfully!',
      room
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

export const deleteRoom = async (req: Request, res: Response) =>{

  const { id } = req.params;

  try { 

    const room = await ConsultingRoom.findByPk(id);

    if(!room) {
      return res.status(404).json({
        message: `Consulting room with ID: ${ id } is not exist!`
      });
    };

    await room.destroy();

    res.json({
      message: 'Consulting room was deleted successfully!'
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