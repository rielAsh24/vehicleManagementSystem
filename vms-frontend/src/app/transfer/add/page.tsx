import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddTransfer from "./add-form";

export default function Transfer() {
  return (
    <section className="flex w-full items-center justify-center">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Transfer Vehicle</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <AddTransfer />
        </CardContent>
      </Card>
    </section>
  );
}
