Vim�UnDo� խx������´�췉���jt� N`j� /   /                                  `C�b    _�                             ����                                                                                                                                                                                                                                                                                                                                                             `-6p     �         0       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `-6q     �               0   :import { Schema, model, Document, Types } from "mongoose";   $import IModel from "../core/imodel";   +import { IBooking } from "./booking.model";       /*    Types:   �- PROFORMA: Issued by HP, to the final client for the total amount.  (It is mostly for the companies.  It is not a valid document for the state authorities.)   L- IHPHOST: Invoice issued by HP to host, for the corresponding % commission.   X- IHPHOST: Invoice issued by HP to the final client, for the corresponding % commission.   k- IHOSTUSER: Invoice issued by the host to the final client, for the reservation amount less HP commission.   */       export enum EInvoiceTypes {     PROFORMA = "proforma",     IHPHOST = "ihphost",     IHPUSER = "ihpuser",     IHOSTUSER = "ihostuser"   }       Oconst bookingTypes = Object.keys(EInvoiceTypes).map(key => EInvoiceTypes[key]);       *export interface IInvoice extends IModel {     id?: Document["_id"];     invoiceNumber: string;     type: EInvoiceTypes;   %  booking: IBooking["id"] | IBooking;   }       2export type InvoiceDocument = IInvoice & Document;       )const invoiceSchema: Schema = new Schema(     {   4    invoiceNumber: { type: String, required: true },       type: {         type: String,         enum: bookingTypes,         required: true       },       booking: {         type: Types.ObjectId,         ref: "Invoice",   :      required: [true, "The invoice must have a booking."]       }     },     { timestamps: true }   );       @export default model<InvoiceDocument>("Invoice", invoiceSchema);5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `-6q    �         2       5�_�      	              1        ����                                                                                                                                                                                                                                                                                                                                                             `-8�     �   0   1           5�_�      
           	   1        ����                                                                                                                                                                                                                                                                                                                                                             `-8�     �   0   1          @export default model<InvoiceDocument>('Invoice', invoiceSchema);5�_�   	              
   !        ����                                                                                                                                                                                                                                                                                                                                                             `-8�     �       "   0      )const invoiceSchema: Schema = new Schema(5�_�   
                          ����                                                                                                                                                                                                                                                                                                                                                             `-8�     �      !   0       5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `-8�    �      !   0       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `-8�     �          0      :import { Schema, model, Document, Types } from 'mongoose';5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `-8�     �          0      :import { Schema, model, Document, Types } from 'mongoose';5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             `-8�     �          0      8import { Schemamodel, Document, Types } from 'mongoose';5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `-8�     �         0       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `-8�    �         0       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `C�`     �                  id?: Document['_id'];5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             `C�a     �         /       5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             `C�a    �         /       5��