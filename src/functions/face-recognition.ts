import { Response } from "../helper/response";
import { RekognitionService } from "../services/rekognition-service";

import { CustomResponse } from "./@types";
import { FunctionAbstract } from "./abstracts/functions-abstract";

type RequestFunction = any;

type ResponseFunction = void;

export class FaceRecognitionFunction extends FunctionAbstract<RequestFunction, ResponseFunction> {
  static instance: FaceRecognitionFunction;

  protected buildRequest(request: RequestFunction): RequestFunction {
    return request;
  }

  protected async execute(request: RequestFunction): Promise<CustomResponse<void>> {
    // eslint-disable-next-line no-console
    console.log("request data", request);

    const result = await new RekognitionService().searchFace(request.encodedPhoto);

    return Response.ok(result).build();
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }

    return this.instance;
  }
}
