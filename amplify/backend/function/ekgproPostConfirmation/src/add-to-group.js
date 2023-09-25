/* eslint-disable unicorn/prefer-module */

const {
  CognitoIdentityProviderClient,
  AdminAddUserToGroupCommand,
  GetGroupCommand,
  CreateGroupCommand,
} = require('@aws-sdk/client-cognito-identity-provider');

const cognitoIdentityServiceProvider = new CognitoIdentityProviderClient({});

/**
 * @type {import('@types/aws-lambda').PostConfirmationTriggerHandler}
 */
exports.handler = async event => {
  const groupParameters = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
  };
  const addUserParameters = {
    GroupName: process.env.GROUP,
    UserPoolId: event.userPoolId,
    Username: event.userName,
  };
  /**
   * Check if the group exists; if it doesn't, create it.
   */
  try {
    await cognitoIdentityServiceProvider.send(
      new GetGroupCommand(groupParameters)
    );
  } catch {
    await cognitoIdentityServiceProvider.send(
      new CreateGroupCommand(groupParameters)
    );
  }
  /**
   * Then, add the user to the group.
   */
  await cognitoIdentityServiceProvider.send(
    new AdminAddUserToGroupCommand(addUserParameters)
  );

  return event;
};
