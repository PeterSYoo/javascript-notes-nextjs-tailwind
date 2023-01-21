import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const MonolithicArchitectureMD = () => {
  const c1 = `
  <?php

  class App {
      public function run() {
          $router = new Router();
          $router->route();
      }
  }
  
  class Router {
      public function route() {
          $controller = new Controller();
          $controller->handle();
      }
  }
  
  class Controller {
      public function handle() {
          $model = new Model();
          $data = $model->fetch();
          $view = new View();
          $view->render($data);
      }
  }
  
  class Model {
      public function fetch() {
          // ... fetch data from a database
      }
  }
  
  class View {
      public function render($data) {
          // ... render a template and output HTML
      }
  }  
  `;
  const c2 = `
  public class App {
    public static void main(String[] args) {
        Router router = new Router();
        router.route();
    }
  }

  class Router {
      public void route() {
          Controller controller = new Controller();
          controller.handle();
      }
  }

  class Controller {
      public void handle() {
          Model model = new Model();
          Data data = model.fetch();
          View view = new View();
          view.render(data);
      }
  }

  class Model {
      public Data fetch() {
          // ... fetch data from a database
      }
  }

  class View {
      public void render(Data data) {
          // ... render a template and output HTML
      }
  }
  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Monolithic architecture is a software design pattern in which all
        components of an application are combined into a single, unified
        executable or library.
      </p>
      <p>
        An analogy for monolithic architecture could be a large, multi-story
        building where all of the rooms and functions (such as living quarters,
        bathrooms, kitchen, etc.) are located within the same structure and
        connected by internal hallways and staircases. Just like in a building,
        each function of the monolithic software application is connected and
        dependent on each other and all the functions are built together in one
        package.
      </p>
      <p>
        Monolithic architecture is a software design pattern in which all
        components of an application are combined into a single, unified
        executable or library. A monolithic codebase is usually organized around
        a single main function or class, with the different components of the
        application, such as controllers, models, and views, organized into
        different modules or namespaces within that main function or class.
      </p>
      <p>
        For example, in a monolithic web application written in a language like
        PHP, the codebase might be organized into a single index.php file that
        contains all of the controllers, models, and views for the application.
        A request is sent to the application and it routes that request to the
        appropriate controller, which then uses the appropriate models to fetch
        or manipulate data, and renders the appropriate view to be sent back to
        the user as a response.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        Another example of Monolithic architecture in a language like Java would
        be an application that consists of a single .jar or .war file containing
        all the class files and resources of the application. Each class would
        be responsible for different functionality, such as managing database
        connections, handling user input, and rendering views.
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c2}
      </SyntaxHighlighter>

      <p>
        It is worth noting that while monolithic architecture is simple and easy
        to understand, it can become difficult to maintain and scale as the
        application grows in complexity and size.
      </p>
    </>
  );
};
