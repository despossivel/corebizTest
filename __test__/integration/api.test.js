import request from 'supertest';

const api = request('https://corebiz-test.herokuapp.com/api/v1');

test('Get products', () => api.get('/products').expect(200));

test('Add newsletter', () => api.post('/newsletter').send({
    name: 'Matheus',
    email: 'mattbmoller@gmail.com'
}).expect(200));