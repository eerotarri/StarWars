// import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useCustomPieChartDataHook } from "@/lib/hooks/use-custom-pie-chart-data-hook";
import CustomSelect from "./custom-select";

export function CustomPieChart() {
  const { data, config, isLoading } = useCustomPieChartDataHook();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Card className="flex flex-col bg-secondary rounded-xl shadow-lg">
      <CardHeader className="items-center pb-0 text-secondary-foreground">
        <CardTitle className="mb-4">
          <CustomSelect className="mb-2" />
          per film
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie data={data} dataKey="count" label nameKey="name" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
