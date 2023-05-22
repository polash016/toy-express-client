
const Blogs = () => {
    return (
        <div className="text-center">
      <div className="mt-6 mb-6">
        <h2 className="font-bold mb-4">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
        <p>
        An access token and a refresh token are commonly used in authentication and authorization systems. Here's an overview of what they are and how they work:
        </p>
        <p className="mt-2 mb-3"><span className="font-semibold">Access Token:</span> An access token is a credential that is used to access protected resources on an API or server. It is usually a string of characters that represents the authenticated user and their permissions. Access tokens are typically short-lived and have an expiration time. They are used to authenticate and authorize API requests.</p>
        <p><span className="font-semibold">Refresh Token:</span> A refresh token is a long-lived credential that is used to obtain a new access token when the current one expires. Refresh tokens are used to maintain a user's authenticated session without requiring them to re-enter their credentials. They are securely stored on the client-side and sent to the server to request a new access token.</p>
      </div>
      <div className="mt-6 mb-6">
        <h2 className="font-bold">Compare SQL and NoSQL databases?</h2>
        
        <p className="mt-3 mb-4"><span className="font-semibold">SQL</span> databases have a structured schema, enforce data integrity, and use a relational model. They scale vertically, use SQL for querying, support ACID properties, and are ideal for applications with predefined schemas and strong consistency requirements.</p>
        <p><span className="font-semibold mb-2">NoSQL</span> databases have a flexible schema, scale horizontally, use various query languages, may sacrifice some ACID properties for scalability, and are suitable for applications with large amounts of data, dynamic schemas, and eventual consistency needs.</p>
        <p>
      The choice between SQL and NoSQL depends on the application's requirements and data characteristics. In some cases, a combination of both types might be appropriate.
        </p>

      </div>
      <div className="mt-6 mb-6">
        <h2 className="font-bold mb-3">What is express js? What is Nest JS?</h2>
        
        <p><span className="font-semibold">Express.js:</span> Express.js is a minimal and flexible web application framework for Node.js. It provides a lightweight and unopinionated structure for building web servers and APIs. Express.js simplifies common tasks such as routing, middleware handling, and request/response handling, making it a popular choice for developing fast and scalable server-side applications.</p>
        <p className="mt-4"><span className="font-semibold">Nest.js:</span> Nest.js is a progressive framework built on top of Express.js, designed for creating efficient and scalable server-side applications.  It provides a strong foundation for building large-scale applications by promoting code reusability, dependency injection, and modular development. Nest.js simplifies common tasks like routing, authentication, validation, and more. It also supports various other frameworks and libraries, such as Fastify, making it flexible and adaptable to different project requirements.</p>
      </div>
      <div className="mt-6 mb-6">
        <h2 className="font-bold mb-3">What is MongoDB aggregate and how does it work?</h2>
        
        <p className="mt-4"><span className="font-semibold">In MongoDB,</span> the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data in a flexible and powerful way. The aggregate method takes an array of stages as input. Each stage represents a specific operation, such as filtering, grouping, or calculating aggregated values. The output of one stage becomes the input for the next stage. By combining these stages, we can perform complex aggregations and transformations on our MongoDB data.</p>
      </div>
      
      
      
    </div>
    );
};

export default Blogs;