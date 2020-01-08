
export class PresenterApi {

  /**
   * @param {express.Response} response
   * @param data
   * @returns {Json | string | any | Promise<any>}
   */
  static send(response, data) {
    return response.status(200).json(data);
  }
}