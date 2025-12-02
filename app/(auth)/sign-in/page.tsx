'use client'
import FooterLink from "@/components/forms/FooterLink";
import InputFaild from "@/components/forms/InputFaild";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignInFormData {
  email: string;
  password: string;
}
const SignIn = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return <>
        <h1 className="form-title">Sign In & personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <InputFaild
          name="email"
          label="Email"
          placeholder="contact@example.com"
          type="email"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          }}
        />
          <InputFaild
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
        />

      <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "Signing In" : "Sign In"}
    </Button>
      <FooterLink 
        text="Don't have an account?"
        linkText="Create account"
        href="/sign-up"
      
      />

      </form>
  </>;
};

export default SignIn;
