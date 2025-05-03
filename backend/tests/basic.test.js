var request = require('supertest');
var express = require('express');

var app = require('../server'); // on suppose que ton fichier principal s'appelle `server.js`

describe('Test de l\'API', function() {
  it('GET /api/test doit répondre avec 200 et un message', function(done) {
    request(app)
      .get('/api/test')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(function(res) {
        if (!('message' in res.body)) throw new Error('Réponse sans message');
      })
      .end(done);
  });
});
