import  Jwt  from "jsonwebtoken";


const chaveSecreta = "chaveSuperSecreta"


const token = Jwt.sign(
    {
        apelido: 'daniel',
        curso: 'estudo token nodejs'
    }, chaveSecreta
    )

console.log(token)


const tokenDecodificdo = Jwt.verify(token, chaveSecreta)

console.log(tokenDecodificdo)