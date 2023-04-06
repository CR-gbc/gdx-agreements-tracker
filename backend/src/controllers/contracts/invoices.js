const useController = require("../useController/index.js");
const model = require("@models/contracts/invoices");
const what = { single: "invoice", plural: "invoices" };
const controller = useController(model, what, "contracts");

/**
 * Gets all contract invoices for a specific contract.
 *
 * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
 * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
 * @returns {object}
 */
controller.getAllByContractId = async (request, reply) => {
  controller.userRequires(request, "PMO-Manager-Edit-Capability", reply);
  const contractId = Number(request.params.id);
  try {
    const result = await model.findAllByContractId(Number(contractId));
    return !result
      ? controller.noQuery(reply, `The ${what.single} with the specified id does not exist.`)
      : result;
  } catch (err) {
    return controller.failedQuery(reply, err, what);
  }
};

/**
 * Add an item based on request body info.
 *
 * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
 * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
 * @returns {object}
 */
controller.addOneWithContractId = async (request, reply) => {
  controller.userRequires(request, "PMO-Manager-Edit-Capability", reply);
  const contractId = Number(request.params.id);
  try {
    const result = await model.addOne(request.body, contractId);
    return result || controller.noQuery(reply, `The ${what.single} could not be added.`);
  } catch (err) {
    return controller.failedQuery(reply, err, what);
  }
};

module.exports = controller;
