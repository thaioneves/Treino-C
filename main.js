const cliente1 = {
    Nome: "Carlos Alberto",
    CPF: "000.000.000-00",
    Idade: "24 anos",
    Telefone: "(13) 99999-1234",
    Nickname: "KakaAlbr",
    Senha: "kaka2404alb"
};

const cliente2 = {};
cliente2.Nome = prompt("Qual o nome que deve ser registrado?")
cliente2.CPF = prompt("Qual o CPF?")
cliente2.Idade = Number(prompt("Qual a idade?"))
cliente2.Telefone = prompt("Qual o número que deve ser registrado")
cliente2.Nickname = prompt("Qual o seu nickname?")
cliente2.Senha = prompt("Qual a senha?")

alert("Tudo certo, obrigado!")

alert("Perfis do 1º cliente a frente./n"+
    "Login do cliente:" + cliente1.nome + "/n" +
    "Idade do cliente:" + cliente1.idade + "/n" +
    "CPF do cliente:" + cliente1.cpf +"/n" +
    "Telefone do cliente:" + cliente1.telefone +"/n" +
    "Nickname do clinte:" + cliente1.nickname +"/n" +
    "Senha do cliente:" + cliente1.senha +"/n" +
    
    "/n" + "Perfis do 2º cliente a frente./n"+
    "Login do cliente:" + cliente2.nome +"/n" +
    "Idade do cliente:" + cliente2.idade +"/n" +
    "CPF do cliente:" + cliente2.cpf +"/n" +
    "Telefone do cliente:" + cliente2.telefone +"/n" +
    "Nickname do clinte:" + cliente2.nickname +"/n" +
    "Senha do cliente:" + cliente2.senha +"/n")