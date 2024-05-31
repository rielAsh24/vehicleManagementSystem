import { getAll } from "@/actions/vehicle";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { vehicleData } from "@/lib/vehicle.dto";

export default async function VehiclesList() {
  const vehicles: vehicleData[] = await getAll();

  return (
    <section className="flex w-full justify-center">
      <Table className="lg:max-w-xl">
        <TableCaption>List of Vehicles in Record</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Vehicle Number</TableHead>
            <TableHead>Vehicle Type</TableHead>
            <TableHead>Owner</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((v: vehicleData) => (
            <TableRow key={v.vehicleNumber}>
              <TableCell className="font-medium">{v.vehicleNumber}</TableCell>
              <TableCell>{v.vehicleType}</TableCell>
              <TableCell>{v.ownerId === null ? "None" : v.ownerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
