import { getAll } from "@/actions/transfer";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { transferData } from "@/lib/transfer.dto";

export default async function TransfersList() {
  const transfers: transferData[] = await getAll();

  return (
    <Table className="lg:max-w-xl">
      <TableCaption>List of Transfers in Record</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Vehicle Transferred</TableHead>
          <TableHead>From</TableHead>
          <TableHead>To</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transfers.map((d: transferData) => (
          <TableRow key={d.v_num}>
            <TableCell>{d.v_num}</TableCell>
            <TableCell>{d.fromOwner}</TableCell>
            <TableCell>{d.toOwner}</TableCell>
            <TableCell>{new Date(d.t_date).toDateString()}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
