/* eslint-disable @typescript-eslint/no-explicit-any */
import { FieldValues, useForm } from "react-hook-form";

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
import { Link, useNavigate } from "react-router-dom";
import { PasswordInput } from "@/components/ui/password-input";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "@/utils/verifyToken";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";

export default function Login() {
    const [login] = useLoginMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      email: "admin@gmail.com",
      password: "@Admin123",
    },
  });

  async function onSubmit(values: FieldValues) {
    console.log(values);
    const toastId = toast.loading('Logging in');
    try{
        const userInfo={
            email:values.email,
            password:values.password
        }
        const res=await login(userInfo).unwrap();
        console.log(res,"res")
        const user = verifyToken(res.data.token)
        dispatch(setUser({user:user,token:res?.data.token}))
        toast.success('Logged in', { id: toastId, duration: 2000 });
        navigate(`/`);

        console.log(res,"rest")
    }catch{
        toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  }
  return (
    <div className="h-svh w-full grid place-items-center p-10">
      
      <Form {...form}>
        <div className="relative mx-auto p-2 lg:p-10 border-b-slate-600 border-2 rounded-sm w-full lg:w-96 md:w-60">
          <p onClick={()=>navigate('/')} className="border inline font-bold shadow-md hover:shadow-sm hover:cursor-pointer px-3 py-1 rounded-full absolute top-0 right-0 m-2">X</p>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-2"
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
