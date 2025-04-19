import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Loading = () => {
  return (
    <>
      <main className="h-screen">
        <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[104px]">
          <div className="flex h-full items-center justify-center">
            <Card className="flex size-full flex-col">
              <CardHeader className="animate-pulse p-3 sm:p-6">
                <CardTitle>Loading...</CardTitle>
                <CardDescription>Loading contents</CardDescription>
              </CardHeader>
              <Separator />
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Loading;
