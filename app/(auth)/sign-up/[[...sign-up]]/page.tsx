import React from "react";

// Clerk Authentication
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <section className="flex min-h-screen w-full items-center justify-center">
      <SignUp afterSignUpUrl="/ask-question" />
    </section>
  );
};

export default SignUpPage;
