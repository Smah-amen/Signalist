"use client"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from "react-hook-form"

interface SignInFormData {
  fullName: string
  email: string
  password: string
  country: string
  investmentGoals: string
  riskTolerance: string
  preferredIndustry: string
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
  })

  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <>
      <h1 className="form-title">Sign Up & personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Button type="submit" disabled={isSubmitting} className="yellow-btn w-full mt-5">
          {isSubmitting ? "creating account" : "start your journey"}
        </Button>
      </form>
    </>
  )
}

export default SignUp