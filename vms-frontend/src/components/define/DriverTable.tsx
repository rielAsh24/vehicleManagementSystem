import { getAll } from "@/actions/driver";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { driverData } from "@/lib/driver.dto";

export async function DriversList() {
  const drivers: driverData[] = await getAll();

  return (
    <Table className="lg:max-w-xl">
      <TableCaption>List of Drivers in Record</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="">Name</TableHead>
          <TableHead>Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {drivers.map((d: driverData) => (
          <TableRow key={d.driverName}>
            <TableCell>{d.driverName}</TableCell>
            <TableCell>{d.phoneNumber}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
