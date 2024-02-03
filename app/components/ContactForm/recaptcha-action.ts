import { revalidatePath } from "next/cache";
const {
  RecaptchaEnterpriseServiceClient,
} = require("@google-cloud/recaptcha-enterprise");

export async function assessRecaptcha(
  token: FormDataEntryValue | null,
  recaptchaAction: string,
) {
  // Create the reCAPTCHA client.
  // TODO: Cache the client generation code (recommended) or call client.close() before exiting the method.
  const projectID = process.env.GOOGLE_PROJECT_ID;
  const recaptchaKey = process.env.GOOGLE_KEY_ID;
  const client = new RecaptchaEnterpriseServiceClient();
  const projectPath = client.projectPath(projectID);

  // Build the assessment request.
  const request = {
    assessment: {
      event: {
        token: token,
        siteKey: recaptchaKey,
      },
    },
    parent: projectPath,
  };

  const [response] = await client.createAssessment(request);

  if (!response.tokenProperties.valid) {
    console.error(
      `The CreateAssessment call failed because the token was: ${response.tokenProperties.invalidReason}`,
    );
    client.close();
    revalidatePath("/");
    return null;
  }

  // Check if the expected action was executed.
  // The `action` property is set by user client in the grecaptcha.enterprise.execute() method.
  if (response.tokenProperties.action === recaptchaAction) {
    // Get the risk score and the reason(s).
    // For more information on interpreting the assessment, see:
    // https://cloud.google.com/recaptcha-enterprise/docs/interpret-assessment
    console.log(`The reCAPTCHA score is: ${response.riskAnalysis.score}`);
    response.riskAnalysis.reasons.forEach((reason: string) => {
      console.log(reason);
    });

    revalidatePath("/");
    client.close();
    return response.riskAnalysis.score;
  } else {
    console.log(
      "The action attribute in your reCAPTCHA tag does not match the action you are expecting to score",
    );

    revalidatePath("/");
    client.close();
    return null;
  }
}
