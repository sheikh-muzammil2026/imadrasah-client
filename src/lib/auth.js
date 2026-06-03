import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";


const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("imadrasah");

export const auth = betterAuth({
  database: mongodbAdapter(db, {

    client
  }),
   emailAndPassword: { 
    enabled: true, 
    autoSignIn: false 
  }, 
   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
        
      },

      session: {
        cookieCache: {
          enabled: true,
          strategy: "jwt",
          maxAge: 5 * 60,
        }
      },
       plugins: [
        jwt(), 
    ],
    
     user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
      },
    },
  },


});