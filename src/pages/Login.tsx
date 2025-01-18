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
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FieldValues) {

    const toastId = toast.loading('Logging in');
    try{
        const userInfo={
            email:values.email,
            password:values.password
        }
        const res=await login(userInfo).unwrap();

        const user = verifyToken(res.data.token)
        dispatch(setUser({user:user,token:res?.data.token}))
        toast.success('Logged in', { id: toastId, duration: 2000 });
        navigate(`/`);


    }catch{
        toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  }
  return (
    <div className="h-svh w-full grid place-items-center p-10">
      
      <Form {...form}>
        <div className="relative mx-auto p-2 lg:p-10 md:p-10  shadow-lg hover:shadow-xl rounded-sm w-full lg:w-96 md:w-96">
          <p onClick={()=>navigate('/')} className="border inline font-bold shadow-md hover:shadow-sm hover:cursor-pointer px-3 py-1 rounded-full absolute top-0 right-0 m-2">X</p>
          <h2 className="text-center mt-5 text-2xl font-semibold uppercase my-3">sign in</h2>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mt-2"
        >
          <FormField
            control={form.control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            }}
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
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
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

          <Button className="w-full" type="submit">LOG IN</Button>
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
