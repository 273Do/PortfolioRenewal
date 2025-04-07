import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Loading = () => {
  return (
    <>
      <main className="h-screen">
        <div className="fixed left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 p-3 py-[70px] sm:p-12 sm:py-[104px]">
          <div className="flex h-full items-center justify-center">
            <Card className="flex size-full flex-col border">
              <CardContent className="size-full overflow-y-scroll p-0">
                <div className="m-3 columns-1 sm:m-4 sm:columns-2 lg:columns-3 xl:columns-4">
                  <Card className="mb-3 border-none p-0 shadow-none sm:mb-4 sm:p-2">
                    <CardHeader className="w-full p-0">
                      <CardTitle>Loading...</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Loading;
