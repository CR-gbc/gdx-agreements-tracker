const useController = require("./useController/index.js");
const model = require("../models/report");
const what = { single: "report", plural: "reports" };
const controller = useController(model, what);

/**
 * Get a specific item by ID.
 *
 * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
 * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
 * @returns {object}
 */
controller.getProjectBudgetReport = async (request, reply) => {
  controller.userRequires(request, what, "reports_read_all");
  try {
    const result = await model.projectBudgetReport();
    if (!result) {
      reply.code(404);
      return { message: `The ${what.single} with the specified id does not exist.` };
    } else {
      return result;
    }
  } catch (err) {
    reply.code(500);
    return { message: `There was a problem looking up this Project Budget Report.` };
  }
};

/**
 * Get a specific item by ID.
 *
 * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
 * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
 * @returns {object}
 */
controller.getProjectQuarterlyReport = async (request, reply) => {
  controller.userRequires(request, what, "reports_read_all");
  try {
    const result = await model.projectQuarterlyReport();
    if (!result) {
      reply.code(404);
      return { message: `The ${what.single} with the specified id does not exist.` };
    } else {
      return result;
    }
  } catch (err) {
    reply.code(500);
    return { message: `There was a problem looking up this Project Quarterly Report.` };
  }
};

/**
 * Get a specific item by ID.
 *
 * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
 * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
 * @returns {object}
 */
controller.getProjectStatusReport = async (request, reply) => {
  controller.userRequires(request, what, "reports_read_all");
  try {
    const result = await model.projectStatusReport();
    if (!result) {
      reply.code(404);
      return { message: `The ${what.single} with the specified id does not exist.` };
    } else {
      return result;
    }
  } catch (err) {
    reply.code(500);
    return { message: `There was a problem looking up this Project Status Report.` };
  }
};

module.exports = controller;
