import { DataTypes } from 'sequelize';
import sequelize from '../config/postgres';
import Floor from './Floor';

const ConsultingRoom = sequelize.define('consulting_rooms', {
  office_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  id_floor: {
    type: DataTypes.INTEGER,
    references: {
      model: Floor,
      key: 'id'
    }
  }
});

Floor.hasMany(ConsultingRoom, {
  foreignKey: 'id_floor',
  sourceKey: 'id'
});

ConsultingRoom.belongsTo(Floor, {
  foreignKey: 'id_floor',
  targetKey: 'id'
});

export default ConsultingRoom;