import { ChartConfig } from "@/components/ui/chart";
import { useQuery } from "@tanstack/react-query";

export function useCustomPieChartDataHook(): {
  data: any;
  config: any;
  isLoading: boolean;
} {
  const { data, isLoading } = useQuery({
    queryKey: ["count"],
    queryFn: () =>
      fetch("http://localhost:8111/api/count/films/characters").then((res) =>
        res.json()
      ),
  });

  const filledData =
    data?.map((item: { name: string; count: number }, index: number) => ({
      ...item,
      fill: `hsl(var(--chart-${index + 1}))`,
    })) || data;

  const chartConfig = filledData?.reduce(
    (
      config: { [x: string]: { label: any } },
      item: {
        fill: any;
        name: string;
      }
    ) => {
      config[item.name] = {
        label: item.name.charAt(0).toUpperCase() + item.name.slice(1),
      };
      return config;
    },
    {} as ChartConfig
  );

  return { data: filledData, config: chartConfig, isLoading };
}
