import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="p-12">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>About</CardTitle>
          </CardHeader>
          <CardContent>
            <Card className=" w-[360px]">
              <CardContent className="p-7">
                <ul className="text-7xl">
                  <li>Welcome</li>
                  <li>to</li>
                  <li>273*</li>
                  <li>Portfolio</li>
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
