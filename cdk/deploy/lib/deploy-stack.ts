import { Stack, StackProps } from 'aws-cdk-lib';
// import { Construct } from 'constructs';
import * as events from '@aws-cdk/aws-events';
import * as cdk from '@aws-cdk/core';
// import * as targets from '@aws-cdk/aws-events-targets';


export class DeployStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new events.Rule(this, 'sampleRule', {
      schedule: events.Schedule.cron({ minute: "0", hour: "16", day: "L" }),
      targets: [],
    });
  }
}
