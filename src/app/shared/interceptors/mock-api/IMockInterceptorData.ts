/** Represents a configuration that can be used to mock out the calls to a backend API
 * @export
 * @interface IMockInterceptorData
 */
export interface IMockInterceptorData {
  /** The URL to target to mock ('/api/users' for example)
   * @type {string}
   * @memberof IMockInterceptorData
   */
  url: string;
   /** The verb to target (GET, POST etc.)
   * @type {IMockInterceptorHttpVerb}
   * @memberof IMockInterceptorData
   */
  httpVerb: IMockInterceptorHttpVerb;
  /** The data to return for the specified url and verb
   * @type {*}
   * @memberof IMockInterceptorData
   */
  data: any;
}

export type IMockInterceptorHttpVerb = "GET" | "POST";
