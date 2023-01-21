import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const MicroservicesArchitectureMD = () => {
  const c1 = `
  # Service 1: User Management
  @app.route("/create_user", methods=["POST"])
  def create_user():
      data = request.json
      user_id = create_user_in_db(data)
      return jsonify({"user_id": user_id})
      
  # Service 2: Catalog
  @app.route("/get_product/<product_id>", methods=["GET"])
  def get_product(product_id):
      product = get_product_from_db(product_id)
      return jsonify(product)
      
  # Service 3: Shopping Cart
  @app.route("/add_to_cart/<user_id>/<product_id>", methods=["POST"])
  def add_to_cart(user_id, product_id):
      add_to_cart_in_db(user_id, product_id)
      return jsonify({"status": "success"})
      
  # Service 4: Payment Processing
  @app.route("/process_payment", methods=["POST"])
  def process_payment():
      data = request.json
      payment_id = process_payment_in_db(data)
      return jsonify({"payment_id": payment_id})
      
  # Service 5: Order Fulfillment
  @app.route("/fulfill_order/<order_id>", methods=["POST"])
  def fulfill_order(order_id):
      fulfill_order_in_db(order_id)
      return jsonify({"status": "success"})  
  `;
  const c2 = `

  `;

  return (
    <>
      <p className="italic font-serif text-[#2b2b2b]">
        Microservices architecture is a method of designing and building
        software applications as a collection of small, independently deployable
        services that communicate with each other through APIs.
      </p>
      <p>
        An analogy for Microservices Architecture could be a city made up of
        many small, specialized neighborhoods, each with their own unique
        characteristics and functions, yet all working together to make the city
        function as a whole. Just like how a city is made up of different
        neighborhoods that specialize in different things, a Microservices
        Architecture is made up of different services that specialize in
        different functionality and communicate with each other to make the
        overall system work.
      </p>
      <p>
        Microservices architecture is a way of designing and building software
        applications where the application is broken down into small,
        independently deployable services. Each service is responsible for a
        specific functionality, and these services communicate with each other
        through APIs. This allows for greater flexibility and scalability, as
        well as easier development and deployment.
      </p>
      <p>
        For example, let&apos;s say you&apos;re building an e-commerce website.
        In a monolithic architecture, all the code for the entire website would
        be in one large codebase. However, in a microservices architecture, you
        could have separate services for the user management, the catalog, the
        shopping cart, the payment processing, and the order fulfillment. Each
        of these services would have its own codebase, its own database, and its
        own deployment process.
      </p>
      <p>
        Here&apos;s a basic example of a microservices architecture in Python:
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={darcula}
        className="text-[12px] rounded-xl"
      >
        {c1}
      </SyntaxHighlighter>
      <p>
        Each of these services is a separate Python script and can be deployed
        independently. They communicate with each other through APIs, for
        example, the user_id and product_id passed in the add_to_cart service is
        coming from the create_user and get_product service.
      </p>
      <p>
        This is a basic example and In real-world implementation, it&apos;s more
        complex and may include things like service discovery, load balancing,
        and fault tolerance.
      </p>
      <p>
        This is one way to implement Microservices Architecture but there are
        many other ways and technologies that you can use to implement it.
      </p>
    </>
  );
};
