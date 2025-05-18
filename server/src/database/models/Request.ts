import {
    CreationOptional,
    DataTypes,
    InferAttributes,
    InferCreationAttributes,
} from "sequelize";
import {  Column, Model, Table } from "sequelize-typescript";

@Table( {
    tableName: "requests",
    freezeTableName: true
} )
export class Request extends Model<InferAttributes<Request>, InferCreationAttributes<Request>> {

    @Column( {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    } )
    declare id: CreationOptional<number>;

    @Column( {
        type: DataTypes.STRING, allowNull: false
    } )
    declare phone: string;

    @Column( {
        type: DataTypes.STRING, allowNull: false
    } )
    declare name: string;

}