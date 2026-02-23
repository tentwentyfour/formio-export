import html2pdf from 'html2pdf.js';
import FormioExportUtils from '../../utils/index.js';

export default (config = {}) => {
  return new Promise((resolve, reject) => {
    try {
      config = FormioExportUtils.verifyProperties(config, {
        source: {
          type: Element,
          required: true
        },
        download: {
          type: Boolean,
          default: false
        }
      });

      html2pdf().set({
        html2canvas: config.html2canvas
      }).from(config.source).save(config.filename).then(resolve, reject);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
