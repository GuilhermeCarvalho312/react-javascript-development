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

### Explicação:

1. Criando um novo projeto React usando NPX: O NPX é um utilitário de linha de comando que vem com o Node.js e é usado para executar pacotes instalados em seu projeto sem instalá-los globalmente. Usando o comando npx create-react-app, você pode criar um novo projeto React com uma configuração básica já estabelecida. Isso inclui arquivos e pastas iniciais, como public/index.html e src/index.js.

2. Criando componentes funcionais: Os componentes funcionais são uma forma de criar componentes no React usando funções JavaScript. Eles são simples, fáceis de entender e mais fáceis de testar do que os componentes de classe. Em vez de estender a classe React.Component, você simplesmente define uma função que retorna o conteúdo do componente. Os componentes funcionais também aceitam props como argumentos.

3. Estilizando componentes com CSS: O CSS pode ser usado para estilizar componentes React de várias maneiras. Existem várias maneiras de fazer isso, como usar arquivos CSS externos, módulos CSS, ou bibliotecas de estilo como o styled-components. Estilizar componentes pode melhorar a aparência e usabilidade do aplicativo React.

4. Analisando as dependências do projeto: Ao criar um projeto React, é importante saber quais dependências estão sendo usadas e como elas estão sendo usadas. Isso ajuda a manter a compatibilidade e segurança do projeto. Você pode usar o arquivo package.json para ver as dependências do projeto e suas versões.

5. nalisando os comandos disponíveis no package.json: O arquivo package.json é uma parte importante do projeto React. Ele contém informações sobre as dependências do projeto, scripts para executar tarefas comuns (como iniciar o servidor de desenvolvimento ou construir o aplicativo para produção), bem como outras informações importantes do projeto. É importante entender quais scripts estão disponíveis e como eles funcionam para usar o projeto React com eficácia.

# Aula - 2: Trabalhando com Props

## Sobre o elemento **Key**:

A propriedade key é importante em React porque ela ajuda a identificar componentes de forma única em uma lista de elementos. Ao renderizar uma lista de componentes em React, cada componente deve ter uma chave única associada a ele. A chave é usada pelo React para identificar com eficiência qual componente mudou, deve ser atualizado ou excluído.

Quando o React renderiza uma lista de componentes, ele cria uma instância do componente para cada item da lista. Cada componente é exibido na tela em uma determinada ordem e pode ser atualizado ou removido dinamicamente. Se os componentes não tiverem chaves únicas, o React terá dificuldade em identificar qual componente deve ser atualizado ou removido da lista.

Ao usar uma chave, o React pode identificar com facilidade qual componente precisa ser atualizado ou removido da lista, o que pode ajudar a melhorar o desempenho do aplicativo. Além disso, a chave também é usada pelo React para identificar quando novos componentes são adicionados ou quando a ordem dos componentes é alterada na lista.

Por isso, é importante atribuir uma chave única para cada componente em uma lista em React.

## Sobre a propriedade **Children**:

No React, a propriedade children é usada para passar elementos filho para um componente. Ela permite que os componentes sejam compostos de outros componentes e torna mais fácil a criação de interfaces de usuário complexas.

Quando um componente é renderizado, todo o seu conteúdo é passado para ele como a propriedade children. Isso inclui texto, outros componentes, elementos HTML ou qualquer outro tipo de elemento que possa ser renderizado. A propriedade children é sempre um dos argumentos passados para o componente.

Por exemplo, o seguinte código usa a propriedade children para renderizar um componente de botão que inclui texto e um ícone de seta para a direita:

```jsx
function Button({ children }) {
  return (
    <button className="button">
      {children}
      <span className="icon-arrow-right"></span>
    </button>
  );
}

// Exemplo de uso do componente Button
<Button>Enviar</Button>;
```

Neste exemplo, o componente Button recebe o texto "Enviar" como o valor da propriedade children e o renderiza dentro de um elemento de botão. Ele também adiciona um ícone de seta para a direita após o conteúdo do children. Como resultado, o botão renderizado incluirá o texto "Enviar" e o ícone de seta para a direita.

O uso da propriedade children é muito comum no React e é uma maneira poderosa de criar componentes flexíveis e reutilizáveis.

## O que foi feito na aula-2:

- Aprendemos como passar props para um componente;
- Renderizamos listas com o .map;
- Trabalhamos com elementos aninhados usando a prop children;
- Ouvimos elementos disparados pelo DOM: o onSubmit do nosso form.

### Explicação:

1. Passando props para um componente: As propriedades (ou "props" abreviado) são uma forma de passar dados de um componente pai para um componente filho no React. As props são definidas como atributos em um elemento React e podem ser acessadas no componente filho usando a sintaxe de atribuição de desestruturação. Passar props permite que um componente seja personalizado e reutilizável em diferentes contextos.

2. Renderizando listas com o .map: O método .map() é uma forma comum de renderizar listas de elementos no React. Ele é usado para iterar sobre uma matriz e criar elementos React com base nos valores da matriz. O .map() retorna uma nova matriz com os elementos React criados, que podem então ser renderizados na tela.

3. Trabalhando com elementos aninhados usando a prop children: A propriedade children é uma prop especial no React que permite que um componente pai passe elementos React filhos para seus componentes filhos. Isso permite que um componente tenha uma estrutura aninhada de elementos, o que é útil para criar componentes mais complexos e flexíveis.

4. Ouvindo eventos disparados pelo DOM: No React, os eventos DOM, como onClick ou onSubmit, são tratados de forma um pouco diferente do que em JavaScript puro. Em vez de adicionar manipuladores de eventos diretamente ao DOM, você adiciona um manipulador de eventos a um elemento React usando a sintaxe JSX. Isso permite que você crie manipuladores de eventos reutilizáveis e mantenha o código do manipulador de eventos junto com o código do componente que o usa.

# Aula - 3: Interagindo com o usuário

## Sobre o onChange:

O onChange é um evento do React JS que é acionado quando o valor de um elemento de formulário é alterado pelo usuário. Ele é comumente usado em componentes de entrada de formulário, como input, select e textarea, para capturar e lidar com alterações de entrada do usuário.

Quando um evento onChange é acionado, o React passa um objeto de evento sintético para a função de tratamento de evento. Esse objeto contém informações sobre o evento, como o tipo de evento, o elemento do DOM que disparou o evento e o novo valor do elemento.

Para usar o evento onChange em um componente de entrada de formulário no React JS, você deve definir uma função de tratamento de evento que será executada sempre que o evento for acionado. Essa função deve ser passada como uma propriedade para o elemento de formulário que você deseja monitorar.

Aqui está um exemplo básico de como usar o onChange em um componente de entrada de formulário de texto:

```javascript
import React, { useState } from "react";

function MyForm() {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor="my-input">Digite algo:</label>
      <input
        id="my-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Você digitou: {inputValue}</p>
    </div>
  );
}
```

Neste exemplo, criamos um componente MyForm que possui um estado para armazenar o valor do input (inputValue). Em seguida, definimos uma função handleInputChange que atualiza o estado inputValue com o novo valor do input sempre que o evento onChange é acionado. Finalmente, passamos a função handleInputChange como uma propriedade onChange para o elemento input para monitorar as alterações do input e atualizar o valor mostrado na tela.

## Sobre os hooks:

Em React, um **hook** é uma função especial que permite que você use recursos do React, como estado e ciclo de vida, em componentes funcionais. Hooks são uma adição relativamente recente ao React, introduzida na versão 16.8, e fornecem uma maneira mais simples e elegante de gerenciar o estado e o comportamento do ciclo de vida em componentes de função.

Os hooks são funções que seguem uma convenção de nomenclatura específica: o nome do **hook** sempre começa com a palavra "use". Existem vários hooks diferentes disponíveis no React, incluindo o useState, useEffect, useContext, useRef, useReducer, entre outros. Cada **hook** oferece recursos específicos para ajudar na construção de componentes funcionais.

Os hooks permitem que você divida um componente complexo em funções menores e independentes, cada uma com seu próprio estado e comportamento. Isso torna mais fácil gerenciar o código e também ajuda a evitar problemas comuns, como compartilhamento excessivo de estado e lógica duplicada.

Além disso, os hooks também são mais flexíveis do que as classes, permitindo que você use recursos do React em qualquer lugar dentro de uma função de componente. Eles também são mais fáceis de testar e reutilizar em outros componentes.

Em resumo, os hooks são uma maneira poderosa e flexível de gerenciar o estado e o comportamento do ciclo de vida em componentes de função do React, tornando-os mais fáceis de escrever, testar e manter.

### Sobre o _useState_:

O useState é um hook do React que permite que você adicione estado a um componente de função. Com ele, você pode criar uma variável de estado que pode ser atualizada e refletida na renderização do componente. Isso permite que você crie componentes interativos e dinâmicos, que mudam com base na interação do usuário.

O useState é usado para criar uma variável de estado e uma função para atualizar esse estado. A função de atualização pode ser chamada a qualquer momento, e sempre que é chamada, o estado é atualizado e o componente é re-renderizado com o novo valor do estado.

A sintaxe básica do useState é a seguinte:

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [myState, setMyState] = useState(initialState);

  return (
    // component JSX
  );
}

```

Na primeira linha, importamos o hook useState do React. Em seguida, definimos uma função de componente MyComponent. Dentro do componente, usamos a desestruturação de array para extrair uma variável de estado myState e uma função setMyState para atualizar o estado. O useState é chamado com um parâmetro initialState, que é o valor inicial do estado.

Quando a função setMyState é chamada, o estado myState é atualizado com o novo valor, e o componente é re-renderizado com o novo valor do estado.

Aqui está um exemplo simples de como usar o useState:

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={handleClick}>Clique aqui</button>
    </div>
  );
}
```

Neste exemplo, criamos um componente de contador que usa useState para adicionar um estado count ao componente. Quando o botão é clicado, a função handleClick é chamada, que chama a função setCount para atualizar o estado count com o novo valor. A mensagem exibida na tela é atualizada com o novo valor do estado após cada clique.

## O que foi feito na Aula - 3:

- Controlar inputs utilizando value e onChange;
- Gerenciar o estado de um componente, utilizando o useState;
- Trabalhar com props que são funções.

### Explicação:

1. Para controlar um input em React, podemos utilizar as propriedades value e onChange. A propriedade value define o valor atual do input, enquanto a propriedade onChange define uma função que será chamada sempre que o valor do input for alterado pelo usuário.
2. O hook useState permite que um componente funcional do React tenha um estado interno, que pode ser atualizado e refletido na renderização do componente. Para usar o useState, é necessário importá-lo do React e definir uma variável de estado e uma função para atualizar esse estado. A função de atualização pode ser chamada a qualquer momento, e sempre que é chamada, o estado é atualizado e o componente é re-renderizado com o novo valor do estado.
3. Em React, é comum passar funções como props para componentes filhos, permitindo que os filhos chamem a função pai para atualizar o estado ou executar outras ações. Para passar uma função como prop para um componente filho, basta adicioná-la como uma propriedade do componente pai e, em seguida, chamá-la no componente filho.

# Aula - 4:

## Sobre o react CLI:

- Link do react CLI: https://www.npmjs.com/package/cli-react;
- Usei o react CLI para gerar o componente de Teaams;

O React CLI é uma ferramenta de linha de comando que ajuda a criar projetos React rapidamente, além de fornecer um conjunto de comandos para gerar arquivos de código comumente usados, como componentes, páginas e serviços. Ele é baseado no Create React App e adiciona algumas funcionalidades adicionais para ajudar na criação e configuração de aplicativos React.

Com o React CLI, é possível criar um novo projeto React em segundos, usando o comando react-cli create. Ele também fornece comandos para executar, testar e compilar o aplicativo para produção. Além disso, o React CLI também oferece recursos para gerar componentes e páginas comuns, que são criados com uma estrutura básica de arquivos e pastas, que podem ser personalizadas de acordo com as necessidades do projeto.

O React CLI é muito útil para desenvolvedores React que desejam acelerar o processo de criação de novos projetos e componentes. Além disso, ele permite que os desenvolvedores trabalhem em vários projetos com diferentes configurações e dependências, sem precisar configurar manualmente cada projeto.

O React CLI é uma das muitas ferramentas disponíveis para o ecossistema React, e seu uso pode ser benéfico para desenvolvedores iniciantes e experientes que desejam automatizar tarefas comuns e acelerar o processo de desenvolvimento.

## Como fazer uma renderização condicional:

A renderização condicional em React permite que você exiba ou oculte componentes ou elementos da sua interface do usuário com base em determinadas condições. Existem várias maneiras de fazer isso em React, aqui estão algumas das mais comuns:

1. Usando operador ternário:
   Você pode usar o operador ternário para renderizar diferentes componentes ou elementos com base em uma condição. Por exemplo, para renderizar um componente diferente com base no valor de uma propriedade, você pode fazer o seguinte:

```javascript
function App(props) {
  const { isLogin } = props;
  return <div>{isLogin ? <LoggedIn /> : <LoggedOut />}</div>;
}
```

2. Usando o método &&:
   O método && pode ser usado para renderizar um componente ou elemento com base em uma condição. Por exemplo, para renderizar um componente somente se uma propriedade for verdadeira, você pode fazer o seguinte:

```javascript
function App(props) {
  const { isLoggedIn } = props;
  return <div>{isLoggedIn && <LoggedIn />}</div>;
}
```

3. Usando o método if-else:
   Você pode usar o método if-else para renderizar diferentes componentes ou elementos com base em uma condição. Por exemplo, para renderizar um componente diferente com base no valor de uma propriedade, você pode fazer o seguinte:

```javascript
function App(props) {
  const { isLogin } = props;
  if (isLogin) {
    return <LoggedIn />;
  } else {
    return <LoggedOut />;
  }
}
```

Essas são apenas algumas maneiras de fazer renderização condicional em React. Qual método usar depende do seu caso de uso e preferência pessoal.

## O que é PropDriling:

Prop drilling é um problema que pode ocorrer em aplicações React quando as propriedades precisam ser passadas através de vários componentes, mesmo quando os componentes intermediários não precisam dessas propriedades. Isso pode levar a um código confuso e difícil de manter.

Para evitar o prop drilling, uma solução é utilizar o gerenciamento de estado, como o Redux ou o contexto do React. Com o gerenciamento de estado, as propriedades podem ser armazenadas em um estado global e acessadas pelos componentes que precisam delas, eliminando a necessidade de passá-las por meio de todos os componentes intermediários.

Outra solução é utilizar componentes de ordem superior (HOCs) ou render props, que permitem encapsular a lógica do componente em um componente de nível superior e fornecer somente as propriedades necessárias para o componente filho. Isso pode tornar o código mais legível e fácil de manter.

- link de artigo para leitura: https://www.alura.com.br/artigos/prop-drilling-no-react-js

## O que foi feito na aula - 4:

- Manipular e transformar arrays de objetos(usando o método map);
- Filtrar itens de um array(usando o método filter);
- Renderização condicional.

### Expliação:

Na aula 4, foram apresentadas algumas técnicas para manipular arrays de objetos em JavaScript, tais como o uso do método map para transformar cada objeto em uma nova forma, e o método filter para filtrar objetos baseado em um critério específico.

Também foi abordado o conceito de renderização condicional em ReactJS, que consiste em exibir ou não um componente baseado em um determinado estado ou propriedade. Isso pode ser feito através de condicionais como if/else ou operadores ternários.

Essas técnicas são importantes para o desenvolvimento de aplicações web, permitindo a manipulação e visualização de dados de forma mais eficiente e dinâmica.

# CURSO-2

## React Icons:

- link: https://react-icons.github.io/react-icons
  O react-icons é uma biblioteca de ícones que fornece uma grande variedade de ícones de várias bibliotecas populares, como Material Design Icons, Font Awesome, Ionicons, entre outras. Esses ícones podem ser facilmente utilizados em projetos React, permitindo que os desenvolvedores incluam ícones em seus projetos sem precisar de criar os ícones do zero ou importar imagens externas.

A biblioteca é muito fácil de usar, pois inclui ícones de várias bibliotecas, cada uma com seu próprio conjunto de ícones. Cada ícone é exportado como um componente React que pode ser facilmente incluído em um projeto. Os ícones são escaláveis, podendo ser ajustados para o tamanho desejado sem perder a qualidade.

A react-icons é uma opção muito útil para projetos React que exigem a utilização de ícones, pois ela fornece um grande número de opções e a possibilidade de escolher ícones de várias bibliotecas populares em um só lugar, tornando mais fácil a escolha do ícone certo para um projeto específico.
