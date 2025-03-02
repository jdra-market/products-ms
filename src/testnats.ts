import { connect } from 'nats';

async function testNatsConnection() {
  try {
    const nc = await connect({ servers: 'nats://nats:4222' });
    console.log('Conectado a NATS correctamente');
    await nc.close();
  } catch (error) {
    console.error('Error al conectar a NATS:', error);
  }
}

testNatsConnection();
