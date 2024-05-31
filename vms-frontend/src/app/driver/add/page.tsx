import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AddDriver from "@/components/define/AddDriver";

export default function Driver() {
  return (
    <section className="flex w-full items-center justify-center">
      <Card>
        <CardHeader className="pb-4">
          <CardTitle>Add A Driver</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <AddDriver />
        </CardContent>
      </Card>
    </section>
  );
}
