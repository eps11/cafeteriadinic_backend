'use strict';

/**
 * Technologyitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Technologyitem`.
 */

module.exports = {

  /**
   * Retrieve technologyitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.technologyitem.search(ctx.query);
    } else {
      return strapi.services.technologyitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a technologyitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.technologyitem.fetch(ctx.params);
  },

  /**
   * Count technologyitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.technologyitem.count(ctx.query);
  },

  /**
   * Create a/an technologyitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.technologyitem.add(ctx.request.body);
  },

  /**
   * Update a/an technologyitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.technologyitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an technologyitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.technologyitem.remove(ctx.params);
  }
};
