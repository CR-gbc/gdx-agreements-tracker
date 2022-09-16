const log = require("../../facilities/logging.js")(module.filename);
const useController = (model, what, capabilityPrefix = null) => {
  capabilityPrefix = capabilityPrefix ?? what.plural;

  /**
   * This is the callback for when a query fails, due to an improper syntax.
   *
   * @param   {FastifyReply} reply FastifyReply is an instance of the standard http or http2 reply types.
   * @param   {object}       error The error that gets generated from failed query.
   * @param   {object}       what  The type of model being accessed
   * @returns {object}
   */
  const failedQuery = (reply, error, what) => {
    reply.code(500);
    log.error(error);
    return { message: `There was a problem with the query for ${what.plural}.` };
  };

  /**
   * This is the callback for when the query was successful, but had no results.
   *
   * @param   {FastifyReply} reply   FastifyReply is an instance of the standard http or http2 reply types.
   * @param   {string}       message The no query message.
   * @returns {object}
   */
  const noQuery = (reply, message) => {
    reply.code(404);
    log.warn(message);
    return { message };
  };

  /**
   * This simply adds the capability object to the request object, so that the hook in the fastify plugin can have access to this information.
   *
   * @param {FastifyRequest} request    FastifyRequest is an instance of the standard http or http2 request objects.
   * @param {object}         what       The type of object to be accessed.
   * @param {string}         capability The capability it requires to have access.
   */
  const userRequires = (request, what, capability) => {
    request.capability = {
      requires: capability,
      what: what,
    };
  };

  /**
   * Get all items.
   *
   * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
   * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
   * @returns {object}
   */
  const getAll = async (request, reply) => {
    userRequires(request, what, `${capabilityPrefix}_read_all`);
    try {
      const result = await model.findAll();
      return result ? result : [];
    } catch (err) {
      return failedQuery(reply, err, what);
    }
  };

  /**
   * Get a specific item by ID.
   *
   * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
   * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
   * @returns {object}
   */
  const getOne = async (request, reply) => {
    userRequires(request, what, `${capabilityPrefix}_read_all`);
    const targetId = Number(request.params.id);
    try {
      const result = await model.findById(targetId);
      return !result
        ? noQuery(reply, `The ${what.single} with the specified id does not exist.`)
        : result;
    } catch (err) {
      return failedQuery(reply, err, what);
    }
  };

  /**
   * Add an item based on request body info.
   *
   * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
   * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
   * @returns {object}
   */
  const addOne = async (request, reply) => {
    userRequires(request, what, `${capabilityPrefix}_add_one`);
    try {
      const result = await model.addOne(request.body);
      return result || noQuery(reply, `The ${what.single} could not be added.`);
    } catch (err) {
      return failedQuery(reply, err, what);
    }
  };

  /**
   * Update an item by ID. Use passed info from the request body.
   *
   * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
   * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
   * @returns {object}
   */
  const updateOne = async (request, reply) => {
    userRequires(request, what, `${capabilityPrefix}_update_one`);
    try {
      const result = await model.updateOne(request.body, Number(request.params.id));
      return result || noQuery(reply, `The ${what.single} could not be updated.`);
    } catch (err) {
      return failedQuery(reply, err, what);
    }
  };

  /**
   * Delete a user by user ID.
   *
   * @param   {FastifyRequest} request FastifyRequest is an instance of the standard http or http2 request objects.
   * @param   {FastifyReply}   reply   FastifyReply is an instance of the standard http or http2 reply types.
   * @returns {object}
   */
  const deleteOne = async (request, reply) => {
    userRequires(request, what, `${capabilityPrefix}_delete_one`);

    const target = {
      id: Number(request.params.id),
    };
    try {
      const result = await model.removeOne(target);
      return (
        result || noQuery(reply, `The ${what.single} ${request.params.id} could not be deleted.`)
      );
    } catch (err) {
      return failedQuery(reply, err, what);
    }
  };

  return { getAll, getOne, addOne, updateOne, deleteOne, failedQuery, noQuery, userRequires };
};

module.exports = useController;