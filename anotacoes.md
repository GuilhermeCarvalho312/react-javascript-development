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
