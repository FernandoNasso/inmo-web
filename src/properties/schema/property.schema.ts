import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Property extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  operationType: string; // Tipo de operación (venta, alquiler, etc.)

  @Prop({ required: true })
  buildingType: string; // Tipo de edificación (casa, chalet, depto, etc.)

  @Prop({ required: true })
  status: string; // Estado de la publicación (vigente, reservado, vendido, etc.)

  @Prop({ required: true })
  price: string;

  @Prop()
  expenses: string;

  @Prop()
  acceptsPermutation: boolean;

  @Prop()
  professionalUseAllowed: boolean;

  @Prop()
  acceptsPets: boolean;

  @Prop()
  street: string;

  @Prop()
  number: string;

  @Prop()
  betweenStreet1: string;

  @Prop()
  betweenStreet2: string;

  @Prop()
  neighborhood: string;

  @Prop()
  city: string;

  @Prop()
  province: string;

  @Prop()
  landSize: string; // Medidas del terreno (ejemplo: 20mts x 40mts)

  @Prop()
  totalArea: string; // Superficie total

  @Prop()
  coveredArea: string; // Superficie cubierta

  @Prop()
  semiCoveredArea: string; // Superficie semicubierta

  @Prop()
  uncoveredArea: string; // Superficie descubierta

  @Prop()
  backyardSize: string; // Fondo libre (ejemplo: 20m2 o 5x4mts)

  @Prop()
  age: number; // Antigüedad

  @Prop()
  propertyCondition: string; // Estado de la propiedad (excelente, muy bueno, bueno, etc)

  @Prop()
  numberOfFloors: number; // Cantidad de plantas

  @Prop()
  orientation: string; // Orientación

  @Prop()
  coveredParkingSpaces: number; // Cocheras cubiertas

  @Prop()
  uncoveredParkingSpaces: number; // Cocheras descubiertas

  @Prop()
  semiCoveredParkingSpaces: number; // Cocheras semicubiertas

  @Prop()
  numberOfRooms: number; // Cantidad de ambientes

  @Prop()
  numberOfBedrooms: number; // Cantidad de dormitorios

  @Prop()
  numberOfBathrooms: number; // Cantidad de baños

  @Prop()
  otherRooms: string[];

  @Prop({ type: { video: [String], photos: [String] } })
  multimedia: {
    video: string[];
    photos: string[];
  };

  @Prop()
  createdAt: Date; // Fecha de creación

  @Prop()
  updatedAt: Date; // Fecha de última actualización
}

export const PropertySchema = SchemaFactory.createForClass(Property);
