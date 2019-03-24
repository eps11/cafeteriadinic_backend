'use strict';

/**
 * Topmenuitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Topmenuitem`.
 */

module.exports = {

  /**
   * Retrieve topmenuitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.topmenuitem.search(ctx.query);
    } else {
      return strapi.services.topmenuitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a topmenuitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.topmenuitem.fetch(ctx.params);
  },

  /**
   * Count topmenuitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.topmenuitem.count(ctx.query);
  },

  /**
   * Create a/an topmenuitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.topmenuitem.add(ctx.request.body);
  },

  /**
   * Update a/an topmenuitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.topmenuitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an topmenuitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.topmenuitem.remove(ctx.params);
  }
};
