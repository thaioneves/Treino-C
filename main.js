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

alert("Perfis do 1º cliente a frente.\n"+
    "Login do cliente:" + cliente1.Nome + "\n" +
    "Idade do cliente:" + cliente1.Idade + "\n" +
    "CPF do cliente:" + cliente1.CPF +"\n" +
    "Telefone do cliente:" + cliente1.Telefone +"\n" +
    "Nickname do clinte:" + cliente1.Nickname +"\n" +
    "Senha do cliente:" + cliente1.Senha +"\n" +
    
    "\n" + "Perfis do 2º cliente a frente.\n"+
    "Login do cliente:" + cliente2.Nome +"\n" +
    "Idade do cliente:" + cliente2.Idade +"\n" +
    "CPF do cliente:" + cliente2.CPF +"\n" +
    "Telefone do cliente:" + cliente2.Telefone +"\n" +
    "Nickname do clinte:" + cliente2.Nickname +"\n" +
    "Senha do cliente:" + cliente2.Senha)
