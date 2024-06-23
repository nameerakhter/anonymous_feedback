import { resend } from "@/lib/resend";

import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "../../types/ApiResponse";
import { string } from "zod";
import { Console } from "console";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
):Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Annonymouse Feedback | Verification Code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return{success: true, message: "Verificaiton email sent"}
    } catch (emailError) {
        console.error("error sending Verification email", emailError);
        return{success: false, message: "Failed to send Verification email"}
        
    }
}