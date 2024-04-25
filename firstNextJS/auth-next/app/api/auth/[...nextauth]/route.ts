import NextAuth from "next-auth";
import CredentialsPovider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsPovider({
      name: "email",
      credentials: {
        email: { label: "email", type: "text", placeholder: "example@gmail.com" },
        password: { label: "password", type: "password", placeholder: "1234" }
      },
      async authorize(credentials) {
        const { password, email } = credentials as {
          email: string,
          password: string
        }
        return {
          id: "",
          name: "Account created successfully!"
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // The signIn callback is used to handle the sign-in process. You can use this callback 
  // to perform additional checks or validations before allowing the user to sign in.
  // For instance, you might want to check if the user's account is active or if they have 
  // the necessary permissions to access your application. In this case, you can define a 
  // signIn callback that performs these checks and returns a success or failure response.
})

export { handler as GET, handler as POST }
