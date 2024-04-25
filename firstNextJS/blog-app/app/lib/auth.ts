import GoogleProviders from "next-auth/providers/google";

export const authOption = {
  providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    })
  ]
}
