import { Head, Link } from "@inertiajs/react";
import TempMainLayout from "@/Layouts/TempMainLayout";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../../Components/ui/form";
import { Button } from "../../../Components/ui/button";
import { Input } from "../../../Components/ui/input";
import axios from "axios";

const PageTempCreateToken = ({ title }: { title: string }) => {
    const { toast } = useToast();
    const formSchema = z.object({
        total: z.string({
            message: `This field cannot be null!`
        })
    })

    type TokenFormValue = z.infer<typeof formSchema>;

    const defautValue: Partial<TokenFormValue> = {
        total: undefined
    }

    const form = useForm<TokenFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: defautValue
    })

    const onSubmit =  async (data: TokenFormValue) => {
        try {
            const response = await axios.post(route('admin.token.store'), data);

            if (response.status == 200) {
                form.reset({
                    total: '',
                });
                form.formState.isSubmitted;
                // inputfileref.current!.value = '';
                toast({
                    variant: 'default',
                    title: response.data.title,
                    description: response.data.message,
                    duration: 3000,
                });
            }

            if (response.status != 200) {
                form.formState.isSubmitted;
                // inputfileref.current!.value = '';
                throw response.data.message;
            }
        } catch (error) {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: error as string,
                duration: 3000
            })
        }
    }

    return (
        <TempMainLayout>
            <Head title={title} />
            <div className='flex flex-col justify-center p-3 max-w-xl'>
            <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="total"
                                render={({ field: { value, ...fieldProps } }) => (
                                    <FormItem className="mb-3">
                                        <FormLabel>Total</FormLabel>
                                        <FormControl>
                                            <Input {...fieldProps} placeholder="Masukkan jumlah token yang ingin dibuat" value={value} type="number" />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <div className="flex gap-2">
                                <Button className="bg-primary" type="submit" disabled={form.formState.isSubmitting}>Save</Button>
                                <Link href={route('admin.token.index')} className="bg-red-500 text-sm rounded-md px-3 text-white font-bold" as="button" disabled={form.formState.isSubmitting}>Cancel</Link>
                            </div>
                        </form>
                    </Form>
            </div>
        </TempMainLayout>
    );
}
export default PageTempCreateToken;
