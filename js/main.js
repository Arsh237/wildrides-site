"use strict";!function(){var n=$("html"),t=function(){$(".btn-menu").on("click",function(t){t.preventDefault(),n.toggleClass("menu-opened")})},e=function(){t()};e()}();import { UserManager } from "oidc-client-ts";

const cognitoAuthConfig = {
    authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_MQ8vF9JFf",
    client_id: "5ahf1ok3n9f61do1tnlefcbsfi",
    redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
    response_type: "code",
    scope: "phone openid email"
};

// create a UserManager instance
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

export async function signOutRedirect () {
    const clientId = "5ahf1ok3n9f61do1tnlefcbsfi";
    const logoutUri = "https://d84l1y8p4kdic.cloudfront.net"; 
    // Replace <user pool domain> with your actual Cognito domain from the AWS console
    const cognitoDomain = "https://wildrydes-your-unique-name.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
};