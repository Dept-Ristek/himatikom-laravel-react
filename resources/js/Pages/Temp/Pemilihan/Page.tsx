import TempMainLayout from "@/Layouts/TempMainLayout";
import { Head } from "@inertiajs/react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/Components/ui/chart";
import Image from "@/Components/Image";
import { useEffect, useState } from "react";
import { Pemilihan } from "@/types";
import axios from "axios";

const PageTempDashboardPemilihan = ({ title }: { title: string }) => {
    const [paslon, setPaslon] = useState<Pemilihan[]>([]);

    const fetchData = async () => {
        try {
            const response = await axios.get(route('admin.pemilihan.count'));
            // console.log(response.status);
            if (response.status == 200) {
                const newData = response.data.map((item: Pemilihan, index: number) => ({
                    ...item,
                    name: item.name,
                    total: item.total
                }));
                setPaslon(newData);
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchData()
    }, [])
    // const [data, setData] = useState<ChartProps[]>([]);
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         const newData = chartData.map(item => ({
    //           ...item,
    //           total: Math.max(1, item.total + Math.floor(Math.random() * 10) - 5)
    //         }));
    //         setData(newData);
    //       }, 5000); // Every 5 seconds

    //       return () => clearInterval(intervalId);
    // }, [])

    const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "hsl(var(--chart-1))",
        },
      } satisfies ChartConfig
    return (
        <TempMainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-6xl'>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Hasil Pemilihan</CardTitle>
                        <CardDescription>{Intl.DateTimeFormat('id-ID', {
                            day: '2-digit',
                            month: 'long',
                            year: 'numeric'
                        }).format(new Date())}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <BarChart accessibilityLayer data={paslon}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="name"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                />
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Bar dataKey="total" fill="#0000FF" radius={8} />
                            </BarChart>
                        </ChartContainer>
                    </CardContent>
                    {/* <CardFooter className="flex-col items-start gap-2 text-sm">
                        <div className="leading-none text-muted-foreground">
                            Showing total visitors for the last 6 months
                        </div>
                    </CardFooter> */}
                </Card>
            </div>
        </TempMainLayout>
    );
}
export default PageTempDashboardPemilihan;
