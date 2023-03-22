# Anotações Aula - 1: Uma biblioteca declarativa

- Link do FIGMA: https://www.figma.com/file/T6BLI1HfB81eYOiVgpqQz7/Projeto-Intro-ao-React?node-id=134-128&t=qvNh5UXmxgLEAxrK-0

## Sobre o **NPX**:

O NPX é um utilitário de linha de comando do Node.js que permite executar pacotes Node.js sem precisar instalá-los globalmente no seu sistema.

Com o NPX, você pode executar um comando em um pacote específico sem precisar instalá-lo globalmente ou localmente. Isso pode ser útil quando você precisa executar um pacote uma única vez ou não quer poluir o seu sistema com pacotes que você não vai utilizar frequentemente.

Por exemplo, se você quiser criar um novo aplicativo React, em vez de instalar globalmente o pacote Create-React-App usando o comando npm install -g create-react-app, você pode simplesmente executar npx create-react-app my-app para criar um novo aplicativo React na pasta my-app, sem precisar instalar o pacote globalmente.

Além disso, o NPX também permite executar comandos a partir de uma versão específica do pacote, como por exemplo, npx react@17.0.1 create-app my-app, o que torna mais fácil gerenciar diferentes versões de pacotes em um mesmo sistema.

Em resumo, o NPX é um utilitário útil do Node.js que permite executar comandos em pacotes Node.js sem precisar instalá-los globalmente ou localmente.

## Sobre o JSX:

JSX é uma extensão de sintaxe para JavaScript que é usada com o React.js para criar elementos de interface do usuário (UI). Ele permite que os desenvolvedores usem uma sintaxe semelhante ao HTML para descrever a estrutura da interface do usuário, o que facilita a criação de componentes reutilizáveis e legíveis.

Com JSX, os elementos de interface do usuário são criados usando uma sintaxe que se parece com a marcação HTML, mas que é convertida em chamadas de função JavaScript durante a compilação. Por exemplo, um elemento de interface do usuário pode ser criado da seguinte maneira usando JSX:

```javascript
const element = <h1>Hello, world!</h1>;
```

Este código JSX é compilado para o seguinte código JavaScript:

```javascript
const element = React.createElement("h1", null, "Hello, world!");
```

O método React.createElement() cria um objeto de elemento React que descreve o elemento de interface do usuário. Os parâmetros do método incluem o tipo do elemento (como "h1"), quaisquer propriedades (como "class" ou "id"), e os filhos do elemento (como "Hello, world!").

Além de permitir a criação de elementos de interface do usuário de maneira mais legível e intuitiva, o JSX também oferece outras vantagens. Por exemplo, o JSX ajuda a detectar erros de sintaxe e de tipagem durante o tempo de compilação, em vez de durante o tempo de execução, o que ajuda a reduzir a probabilidade de erros na interface do usuário.

Em resumo, o JSX é uma extensão de sintaxe para JavaScript que é usada com o React.js para criar elementos de interface do usuário de maneira legível e intuitiva. Ele permite que os desenvolvedores usem uma sintaxe semelhante ao HTML para descrever a estrutura da interface do usuário e é compilado em código JavaScript durante a compilação.

## O que foi feito na aula - 1:

- Foi criado um novo projeto React;
- Foram criados componentes funcionais;
- Os componentes foram estilizados com CSS;
- As dependências do projeto foram analisadas;
- Os comandos disponíveis no package.json foram analisados.
