import {Model, DataTypes} from 'sequelize'

import {sequelize} from '../instances/mysql'

export interface FraseInstance extends Model {
    id: number,
    autor: string,
    txt: string
}
export const frase = sequelize.define<FraseInstance>('frases',{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    autor:{
        type:DataTypes.STRING
    },
    txt:{
        type:DataTypes.STRING
    }
},{
    tableName:'frases',
    timestamps:false
})