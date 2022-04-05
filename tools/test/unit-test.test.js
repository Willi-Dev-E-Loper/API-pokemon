const assert = require('chai').assert;


function suma(a,b){
    return a+b;
}
//La funcion describe() crea una suite de test
describe('Suite de prueba para el curso', ()=> {
    //La funcion it comprueba lo que deberia suceder
    it('should return 2', ()=> {
        var s = suma(2,2)
        assert.equal(s,4)
    })
})
