import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const Project = () => {
  return (
    <Card className="max-w-[20rem]">
      <CardHeader>
        <CardTitle>Projet 1</CardTitle>
        <Image
          src={"/supertong.png"}
          alt="supertong"
          width={400}
          height={400}
        />
      </CardHeader>
      <CardContent>
        <p>
          Description : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam nec tristique ex, non pellentesque neque. Ut enim justo,
          ultricies sit
        </p>
      </CardContent>
    </Card>
  );
};

export default Project;
