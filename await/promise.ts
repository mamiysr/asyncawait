﻿import references = require('references');
import oldBuilder = require('../src/awaitBuilder');
import Promise = require('bluebird');
export = builder;


var builder = oldBuilder.mod<AsyncAwait.Await.PromiseBuilder>(
    () => (args, resume) => {
        if (args.length !== 1 || !args[0] || typeof args[0].then !== 'function') return false;
        args[0].then(val => resume(null, val), resume);
    }
);
