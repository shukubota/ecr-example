import * as cdk from '@aws-cdk/core';
import * as events from '@aws-cdk/aws-events';
import * as targets from '@aws-cdk/aws-events-targets';

export class EventBridgeController extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new events.Rule(this, 'sampleRule', {
      schedule: events.Schedule.cron({ minute: "0", hour: "16", day: "L" }),
      targets: [],
  });
  }
}