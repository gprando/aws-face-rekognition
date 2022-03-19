import { Context } from "aws-lambda";

import { Response } from "../../helper/response";

import { CustomResponse } from "@functions/@types";

export abstract class FunctionAbstract<REQUEST, RESPONSE> {
  protected abstract buildRequest(body: any): REQUEST;

  protected abstract execute(request: REQUEST): Promise<CustomResponse<RESPONSE>>;

  async run(payload: string, context: Context): Promise<CustomResponse<RESPONSE>> {
    console.log("payload input --> ", payload);

    context.callbackWaitsForEmptyEventLoop = false;
    const request = this.buildRequest(payload);
    try {
      return this.execute(request);
    } catch (error) {
      return Response.internalServerError().build();
    }
  }
}
