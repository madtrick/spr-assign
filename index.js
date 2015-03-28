'use strict';

var Promise = require('bluebird');

module.exports = {
  cliOptions: [
    {
      description : 'pull request assignee name',
      required    : false,
      long        : 'pull-request-assignee',
      short       : 'a'
    }
  ],

  afterCreatePullRequest: function (options, pullRequest) {
    return new Promise( function () {
      if (options.cli.a) {
        return pullRequest.assign(options.cli.a);
      } else {
        return Promise.resolve(pullRequest);
      }
    });
  }
};
