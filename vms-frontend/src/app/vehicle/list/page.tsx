import { Vehicles, columns } from "@/components/define/VehicleColumns";
import { DataTable } from "@/components/ui/data-table";
import { getAll } from "@/actions/vehicle";

export default async function DemoPage() {
  const data: Vehicles[] = await getAll();

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
