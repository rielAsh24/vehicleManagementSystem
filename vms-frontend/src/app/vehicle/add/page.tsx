import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddVehicle from "./add-form";

export default function Vehicle() {
  return (
    <section className="flex w-full items-center justify-center">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Add A Vehicle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <AddVehicle />
        </CardContent>
      </Card>
    </section>
  );
}
