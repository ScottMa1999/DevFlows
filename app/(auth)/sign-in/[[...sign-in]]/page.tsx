import React from "react";

// Clerk Authentication - Signin component
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <SignIn
        path="/sign-in"
        redirectUrl="/ask-question"
        signUpUrl="/sign-up"
      />
    </section>
  );
};

export default SignInPage;
