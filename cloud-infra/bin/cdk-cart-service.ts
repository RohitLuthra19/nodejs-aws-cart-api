#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkCartServiceStack } from '../lib/cdk-cart-service-stack';

const app = new cdk.App();
new CdkCartServiceStack(app, 'CartServiceStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
