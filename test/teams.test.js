const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = requestAnimationFrame('../app').app;

describe('Suite de pruebas teams', () => {
    it('should return the team of the given user', (done) => {
        //Cuando la llamada no tiene correctamente la llave.
        chai.request(app)
        chai.request(app)
        .post('/auth/login')
        .set('content-type', 'application/json')
        .send({user: 'mastermind', password: '4321'})
        .end((err, res) => {
            //Expect valid login
            chai.assert.equal(res.statusCode, 200);
            chai.request(app)
                .get('/teams')
                .set('Authorization', `JWT ${res.body.token}`)
                .end((err, res) => {
                    //tiene euqipo con dos pokemons
                    
                    chai.assert.equal(res.statusCode, 200);
                    done();
                });
        });
    });
});