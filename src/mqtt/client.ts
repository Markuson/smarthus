import {Amplify, Hub, PubSub} from 'aws-amplify';
import {
  CONNECTION_STATE_CHANGE,
  ConnectionState,
  AWSIoTProvider,
} from '@aws-amplify/pubsub';
import {
  AWS_REGION,
  COGNITO_IDENTITY_POOL_ID,
  PUBSUB_ENDPOINT,
  USER_POOLS_ID,
  USER_POOLS_WEB_CLIENT_ID,
} from '@env';
import {mqttAction, mqttReqData} from '../types/mqtt';

export async function MQTTinit(onError: (error: string) => void) {
  try {
    Amplify.configure({
      aws_project_region: AWS_REGION,
      aws_cognito_identity_pool_id: COGNITO_IDENTITY_POOL_ID,
      aws_cognito_region: AWS_REGION,
      aws_user_pools_id: USER_POOLS_ID,
      aws_user_pools_web_client_id: USER_POOLS_WEB_CLIENT_ID,
    });
    Amplify.addPluggable(
      new AWSIoTProvider({
        aws_pubsub_region: AWS_REGION,
        aws_pubsub_endpoint: PUBSUB_ENDPOINT,
      }),
    );
  } catch (error: any) {
    onError(error);
  }
}

export async function MQTTpublish(
  action: mqttAction,
  name: string | undefined,
  data: mqttReqData | undefined,
  onError: (error: any) => void,
) {
  try {
    await PubSub.publish('smarthusIn', {
      action,
      name,
      data,
    });
  } catch (error: any) {
    onError(error);
  }
}

export async function MQTTsubscribe(
  onMessage: (message: any) => void,
  onConnectionChange: (connectionState: ConnectionState) => void,
  onError: (error: any) => void,
) {
  try {
    PubSub.subscribe('smarthusOut').subscribe({
      next: data => {
        onMessage(data.value);
      },
      error: error => onError(error.error),
      complete: () => console.log('Topic smarthusOut CLOSED'),
    });
    Hub.listen('pubsub', (data: any) => {
      const {payload} = data;
      if (payload.event === CONNECTION_STATE_CHANGE) {
        const connectionState = payload.data.connectionState as ConnectionState;
        onConnectionChange(connectionState);
      }
    });
  } catch (error: any) {
    onError(error);
  }
}

export async function MQTTupdate(onError: (error: any) => void) {
  try {
    MQTTpublish('retrieve', undefined, onError);
  } catch (error: any) {
    onError(error);
  }
}
