/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";

// import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { PasswordInput } from "@/components/ui/password-input";

export default function Login() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <div className="h-svh w-full grid place-items-center p-10">
      <Form {...form}>
        <div className=" mx-auto p-2 lg:p-10 border-b-slate-600 border-2 rounded-sm w-full lg:w-96 md:w-60">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="password"   {...field} />
                </FormControl>
                {/* <FormDescription>Enter your password.</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit">Submit</Button>
          </form>
           <div className="pt-5 text-center">
            <div className="flex w-full justify-between items-center gap-3"> 
                <div className="border-2 w-full"></div> <span>X</span> <div className="border-2 w-full"></div></div>
           
            <Link to={'/registration'} className="text-center w-full hover:text-blue-500">CREATE NEW ACCOUNT?</Link>
           </div>
          
          </div>
       
      </Form>
    </div>
  );
}
