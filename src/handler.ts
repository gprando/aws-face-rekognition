import { Handler } from "aws-lambda/handler";

import { FaceRecognitionFunction } from "@functions/face-recognition";

export const faceRecognition: Handler = (event, context) => FaceRecognitionFunction.getInstance().run(event, context);
