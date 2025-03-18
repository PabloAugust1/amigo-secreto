# amigo-secreto


# Amigo Secreto (ONE)

Este é um projeto simples de Amigo Secreto desenvolvido em HTML, CSS e JavaScript. Ele permite que os usuários adicionem nomes de amigos a uma lista e, em seguida, sorteiem um amigo secreto aleatoriamente.

Como funciona?

Adicionar Amigos: Digite o nome de um amigo no campo de texto e clique em "Adicionar". O nome será adicionado à lista.

Sortear Amigo Secreto: Quando houver pelo menos dois nomes na lista, clique em "Sortear" para escolher um amigo secreto aleatoriamente.

Resultado: O nome do amigo sorteado será exibido na tela.

Pré-requisitos

Para executar este projeto, você só precisa de:

Um navegador moderno (Google Chrome, Firefox, Edge, etc.).

Um editor de código (opcional, para visualizar ou editar o código).

Como executar o projeto <br>
Siga os passos abaixo para rodar o projeto localmente:

1. Clone o repositório

Primeiro, clone este repositório para o seu computador. Abra o terminal e execute o seguinte comando:

git clone https://github.com/seu-usuario/amigo-secreto.git

Substitua seu-usuario pelo seu nome de usuário no GitHub e amigo-secreto pelo nome do repositório.

2. Navegue até a pasta do projeto <br>
Depois de clonar o repositório, acesse a pasta do projeto:


cd amigo-secreto

3. Abra o projeto no navegador <br>
Abra o arquivo index.html no seu navegador. Você pode fazer isso de duas maneiras:

Método 1: Arraste e solte <br>
Navegue até a pasta do projeto no seu computador.

Clique duas vezes no arquivo index.html para abri-lo no navegador.

Método 2: Usando um servidor local (opcional) <br>
Se você tiver um servidor local instalado (como o Live Server no VS Code), siga estas etapas:

Abra a pasta do projeto no VS Code.

Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

O projeto será aberto automaticamente no navegador.

4. Use o Amigo Secreto

Adicione os nomes dos seus amigos no campo de texto e clique em "Adicionar".

Quando estiver pronto, clique em "Sortear" para escolher um amigo secreto aleatoriamente.

O resultado será exibido na tela.

Estrutura do Projeto <br>
O projeto é composto pelos seguintes arquivos:

index.html: Contém a estrutura HTML da página.

style.css: Contém os estilos CSS para a aparência da página.

app.js: Contém a lógica JavaScript para adicionar amigos e sortear.

assets/: Pasta que contém imagens ou outros recursos usados no projeto.

Personalização <br>
Você pode personalizar o projeto facilmente:

Altere o estilo no arquivo style.css.

Modifique a lógica de sorteio no arquivo app.js.

Adicione mais funcionalidades, como a remoção de nomes da lista.

Contribuição <br>
Se você quiser contribuir para este projeto, siga estas etapas:

Faça um fork do repositório.

Crie uma nova branch com sua feature ou correção: git checkout -b minha-feature.

Faça commit das suas alterações: git commit -m "Minha contribuição".

Envie para o repositório remoto: git push origin minha-feature.

Abra um pull request no GitHub.

Licença <br>
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Exemplo de Uso <br> 
Vamos usar os nomes "João", "Maria" e "Pablo" como exemplo para a lista.

![Apresentação dos botões, e campo de texto](https://github.com/user-attachments/assets/56abf091-c63c-4680-8c58-8b48f7d32111)

Esta, é a tela inicial do Amigo secreto, com um campo para escrever, um botão para adicionar um nome, e um último botão para realizar o sorteio.

![campo de texto, e botão de adicionar](https://github.com/user-attachments/assets/42fc1f52-640b-4fc7-b182-cd221927c067)

Assim que cada nome for colocado, deve-se clicar no botão de "Adicionar", e então o nome será guardado na lista logo abaixo.

![aviso de precisar de ao menos dois nomes, para o sorteio](https://github.com/user-attachments/assets/b651b018-96cf-410b-a119-feaf4ea3b495)

Caso tente fazer o sorteio com apenas um nome,ou nenhum um aviso impedindo o sorteio acontece.

![espaço vazio, na seleção de texto](https://github.com/user-attachments/assets/d33b0f38-a109-44a4-a2c8-fe96f2587013)

Para cada espaço no campo de texto, ou então vazio, será apagado, e terá de fazer novamente. E o texto que ficaria com um espaço em vazio, não entra na lista do amigo secreto.

![lista de sorteio pronta](https://github.com/user-attachments/assets/1c53787f-0a80-44e2-b477-1b1113905763)

Agora com todos os cuidados e resgras esclaresidas, vamos tentar rodar nosso sorteio do amigo secreto!

Clique em "Sortear".

![sorteio realizado, maria é a sorteada](https://github.com/user-attachments/assets/e3758a99-cc6d-4271-8b4c-24c2292e9eb9)


O resultado pode ser: "O seu amigo secreto é Maria!".

