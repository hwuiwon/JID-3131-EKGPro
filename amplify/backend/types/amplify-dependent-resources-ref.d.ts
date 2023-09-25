/* eslint-disable unicorn/prevent-abbreviations */
export type AmplifyDependentResourcesAttributes = {
  auth: {
    ekgpro: {
      AppClientID: 'string';
      AppClientIDWeb: 'string';
      CreatedSNSRole: 'string';
      IdentityPoolId: 'string';
      IdentityPoolName: 'string';
      UserPoolArn: 'string';
      UserPoolId: 'string';
      UserPoolName: 'string';
    };
    userPoolGroups: {
      adminGroupRole: 'string';
      userGroupRole: 'string';
    };
  };
  function: {
    ekgproPostConfirmation: {
      Arn: 'string';
      LambdaExecutionRole: 'string';
      LambdaExecutionRoleArn: 'string';
      Name: 'string';
      Region: 'string';
    };
  };
};
