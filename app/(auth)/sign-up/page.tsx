"use client";
import InputFaild from "@/components/forms/InputFaild";
import SelactFaild from "@/components/forms/SelactFaild";
import { Button } from "@/components/ui/button";
import { INVESTMENT_GOALS } from "@/lib/constants";
import { useForm, SubmitHandler } from "react-hook-form";

interface SignInFormData {
  fullName: string;
  email: string;
  password: string;
  country: string;
  investmentGoals: string;
  riskTolerance: string;
  preferredIndustry: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "egypt",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
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

  return (
    <>
      <h1 className="form-title">Sign Up & personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <InputFaild
          name="fullName"
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
          register={register}
          error={errors.fullName}
          validation={{
            required: "Full name is required",
            minLength: {
              value: 2,
              message: "Full name must be at least 2 characters",
            },
          }}
        />
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

        <SelactFaild
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          control={control}
          error={errors.investmentGoals}
          options={INVESTMENT_GOALS}
          required 
        
    
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting ? "creating account" : "start your journey"}
        </Button>
      </form>
    </>
  );
};

export default SignUp;
