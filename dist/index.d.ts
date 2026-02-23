/**
 * Class for exporting formio components into different formats
 *
 * @class FormioExport
 */
declare class FormioExport {
    /**
     * Renders the formio component to HTML
     *
     * @param {any} options The FormioExport options
     * @returns {Promise} The promise containing the HTML render of the formio component
     * @memberof FormioExport
     */
    static toHtml(options: any): Promise<any>;
    /**
     * Exports the formio component to a jsPDF object
     *
     * @param {any} options The FormioExport configuration
     * @returns {Promise} The promise containing the jsPDF object
     * @memberof FormioExport
     */
    static toPdf(options: any): Promise<any>;
    /**
     * Exports the formio component to a xlsx object
     *
     * @param {any} options The FormioExport configuration
     * @returns {Promise} The promise containing the xlsx object
     * @memberof FormioExport
     */
    static toXlsx(options: any): Promise<any>;
    /**
     * Creates an instance of FormioExport.
     * @param {any} component The formio component
     * @param {any} data The formio component data
     * @param {any} [options={}] Formio optional parameters
     * @memberof FormioExport
     */
    constructor(component: any, data: any, options?: any);
    component: any;
    data: any;
    options: any;
    /**
     * Renders the formio component to HTML
     *
     * @returns {Promise} The promise containing the HTML render of the formio component
     * @memberof FormioExport
     */
    toHtml(): Promise<any>;
    /**
     * Exports the formio component to a jsPDF object
     *
     * @param {any} [config={}] The Html2PDf configuration
     * @returns {Promise} The promise containing the jsPDF object
     * @memberof FormioExport
     */
    toPdf(config?: any): Promise<any>;
    /**
     * Exports the formio component to a xlsx object
     *
     * @param {any} [config={}] The xlsx configuration
     * @returns {Promise} The promise containing the xlsx object
     * @memberof FormioExport
     */
    toXlsx(config?: any): Promise<any>;
}

export { FormioExport, FormioExport as default };
