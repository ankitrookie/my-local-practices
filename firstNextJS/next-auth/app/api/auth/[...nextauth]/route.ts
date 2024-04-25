import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    // this CredentialsProvider, provider lets you do login with email and password
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { lable: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials: any) {
        console.log(credentials)

        // here we provide database logic

        // this return, we are returning our all credentials what ever we want to store in jwt token (with this credentials)
        // jwt create three layer token which store our Credentials
        return {
          id: "userId",
          name: "ankit",
          password: "password"
        }
      }
    })
  ],
  // this secret is for when ever you are incoding or decoding use this secret key to do that ( it is same as our jwt second argunment password )
  secret: process.env.NEXTAUTH_URL
});

export { handler as GET, handler as POST };
