import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const ParsingMD = () => {
  const c1 = `
  Pour 1 tasse de farine dans un bol.
  Ajouter 1 œuf, 1/2 tasse de lait, et 1 cuillère à soupe de levure chimique.
  Mélanger jusqu'à ce que la pâte soit lisse.
  Faire chauffer une poêle à feu moyen et huiler légèrement.
  Déposer une petite quantité de pâte dans la poêle chaude et cuire jusqu'à ce qu'elle soit dorée.
  Retourner et cuire l'autre côté jusqu'à ce qu'il soit doré également.
  Répéter jusqu'à ce que toute la pâte soit utilisée.
  `;
  const c2 = `
  function greet(name) {
    console.log('Hello' + name + '!');
  }
  `;
  const c3 = `
     function
    /       |
  greet   (name)
            |
          {
            console.log('Hello' + name + '!');
          }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        &quot;Parsing in JavaScript refers to the process of analyzing a string
        of code and breaking it down into individual syntactic components, or
        tokens, that can be meaningfully interpreted by the browser.&quot;
      </p>

      <p>
        Imagine that you are a chef at a restaurant, and you have received an
        order for a meal from a customer. To prepare the meal, you need to
        follow a recipe that lists the ingredients and instructions for cooking
        the dish. However, the recipe is written in a foreign language that you
        do not understand. To be able to follow the recipe and prepare the meal,
        you need to translate it into a language that you can understand. This
        process of translation is similar to parsing in JavaScript.
      </p>

      <p>
        For example, let&apos;s say that the recipe for a dish is written in
        French, and you need to translate it into English. The recipe might look
        something like this:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        To translate this recipe into English, you can use a translation app or
        a dictionary to look up the meanings of each word and phrase. This
        process of translation is similar to parsing in JavaScript, in which
        code written in a certain programming language is analyzed and converted
        into a form that can be understood and executed by the computer.
      </p>

      <p>
        In JavaScript, parsing is the process of taking a string of code written
        in a programming language and converting it into an abstract syntax tree
        (AST). An AST is a tree-like structure that represents the logical
        structure of the code, with each node in the tree representing a
        different element of the code (such as a function, variable, or loop).
      </p>

      <p>For example, consider the following JavaScript code:</p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>
      <p>
        To parse this code, the parser will analyze the code and create an AST
        that looks something like this:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c3}
      </SyntaxHighlighter>
    </>
  );
};
