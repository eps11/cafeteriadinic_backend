'use strict';

/**
 * Sidemenuitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Sidemenuitem`.
 */

module.exports = {

  /**
   * Retrieve sidemenuitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.sidemenuitem.search(ctx.query);
    } else {
      return strapi.services.sidemenuitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a sidemenuitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.sidemenuitem.fetch(ctx.params);
  },

  /**
   * Count sidemenuitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.sidemenuitem.count(ctx.query);
  },

  /**
   * Create a/an sidemenuitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.sidemenuitem.add(ctx.request.body);
  },

  /**
   * Update a/an sidemenuitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.sidemenuitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an sidemenuitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.sidemenuitem.remove(ctx.params);
  }
};
