
import { NextApiHandler } from "next";
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Google({
      clientId:
        "424339024556-g54ab85flqohftv7nf85pbt50gvsh9om.apps.googleusercontent.com",
      clientSecret: "JquQF9vEg5jM-KZZ83V4EO31",
    }),
// Providers.Cognito({
//       clientId:
//         "424339024556-g54ab85flqohftv7nf85pbt50gvsh9om.apps.googleusercontent.com",
//       clientSecret: "JquQF9vEg5jM-KZZ83V4EO31",
//       domain: 'http://localhost:4000'
//     }),
  ],
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
// 
export default authHandler



// export default (req, res) => NextAuth(req, res, options)
