import { Connect, SimpleSigner } from 'uport-connect'

const uport = new Connect('Consensys', {
  clientId: '2ovjgFozyrAiibp4svyUwpS3zqxw5SURWju',
  network: 'rinkeby',
  signer: SimpleSigner('051af20ae2c565b105390066e60ec1661731edb13b6cf240fd770e927f76e7cc')
})

// // Request credentials to login
// uport.requestCredentials({
//   requested: ['name', 'phone', 'country'],
//   notifications: true // We want this if we want to recieve credentials
// })
// .then((credentials) => {
//   console.log(credentials)
// })
//
// // Attest specific credentials
// uport.attestCredentials({
//   sub: THE_RECEIVING_UPORT_ADDRESS,
//   claim: {
//     CREDENTIAL_NAME: CREDENTIAL_VALUE
//   },
//   exp: new Date().getTime() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
// })

export default uport;
