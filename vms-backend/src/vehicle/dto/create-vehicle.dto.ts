export class CreateVehicleDto {
  readonly vehicleNumber: number;
  readonly vehicleType: string;
  readonly puc: Buffer;
  readonly insurance: Buffer;
}
