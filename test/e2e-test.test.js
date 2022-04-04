const { doesNotMatch } = require('assert');
const chai = require('chai');
const chaiHttp= require('chai-http');

//.use nos permiter utilizar un pluggin de chai
//chaihttp nos permite utilizar los verbos de Http (POST, PUT ,GET..)
chai.use(chaiHttp);

const app = require('../app').app;

describe('Suite de prueba end 2 end para el curso', () => {
    it('should return hello world', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                chai.assert.equal(res.text, 'Hello World')
                done();
            });
    });
});

