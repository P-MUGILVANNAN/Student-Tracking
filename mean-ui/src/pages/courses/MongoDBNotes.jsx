import React from 'react';

function MongoDBNotes() {
  return (
    <div className="bg-light">
      <style>
        {`
          pre {
            background-color: #1f2937;
            color: #e5e7eb;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
          }
          code {
            font-family: 'Courier New', monospace;
          }
          .sidebar {
            position: sticky;
            top: 1rem;
            height: calc(100vh - 2rem);
            overflow-y: auto;
          }
          @media (max-width: 991.98px) {
            .sidebar {
              position: static;
              height: auto;
              margin-bottom: 20px;
              overflow-y: visible;
            }
          }
          .nav-link {
            color: #495057;
          }
          .nav-link:hover {
            color: #0d6efd;
          }
          .property-card {
            background-color: #f8f9fa;
            border-left: 4px solid #0d6efd;
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 4px;
          }
          .command {
            background-color: #e9ecef;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-family: monospace;
          }
        `}
      </style>

      <header className="bg-success text-white py-4">
        <div className="container">
          <h1 className="display-4 fw-bold"><i className="bi bi-database"></i> MongoDB Notes</h1>
          <p className="lead">Your Comprehensive Guide to MongoDB NoSQL Database</p>
        </div>
      </header>

      <div className="container py-4">
        <div className="row">
          <aside className="col-lg-3 sidebar">
            <h2 className="h4 mb-3"><i className="bi bi-link-45deg"></i> Quick Links</h2>
            <nav className="nav flex-column">
              <a className="nav-link" href="#nosql"><i className="bi bi-question-circle"></i> What is NoSQL?</a>
              <a className="nav-link" href="#mongodb"><i className="bi bi-database"></i> MongoDB Introduction</a>
              <a className="nav-link" href="#crud"><i className="bi bi-arrow-repeat"></i> CRUD Operations</a>
              <a className="nav-link" href="#operators"><i className="bi bi-sliders"></i> Operators</a>
              <a className="nav-link" href="#datamodel"><i className="bi bi-diagram-3"></i> Data Modeling</a>
              <a className="nav-link" href="#aggregation"><i className="bi bi-funnel"></i> Aggregation</a>
              <a className="nav-link" href="#indexing"><i className="bi bi-search"></i> Indexing</a>
              <a className="nav-link" href="#replication"><i className="bi bi-files"></i> Replication</a>
              <a className="nav-link" href="#bson"><i className="bi bi-file-binary"></i> BSON Format</a>
              <a className="nav-link" href="#datatypes"><i className="bi bi-list-check"></i> Data Types</a>
            </nav>
          </aside>

          <main className="col-lg-9">
            <section id="nosql" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-question-circle"></i> What is NoSQL?</h2>
              <div className="property-card">
                <p>NoSQL (originally referring to "non SQL" or "non relational") is a database that provides a mechanism for storage and retrieval of data modeled in means other than the tabular relations used in relational databases.</p>
                <ul>
                  <li>Such databases came into existence in the late 1960s</li>
                  <li>Gained popularity as "NoSQL" in the early twenty-first century</li>
                  <li>Used in real-time web applications and big data</li>
                  <li>Features include simplicity of design, horizontal scaling, and fine control over availability</li>
                  <li>Different data structures make some operations faster than in relational databases</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> Advantages of NoSQL</h3>
                <ul>
                  <li>High scalability</li>
                  <li>High availability</li>
                  <li>Flexible schema design</li>
                  <li>Efficient horizontal scaling</li>
                  <li>Better performance for certain workloads</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-dash-circle"></i> Disadvantages of NoSQL</h3>
                <ul>
                  <li>Narrow focus (specialized for specific use cases)</li>
                  <li>Mostly open source (may lack enterprise support)</li>
                  <li>Management challenges</li>
                  <li>Limited GUI tools compared to RDBMS</li>
                  <li>Backup can be complex</li>
                  <li>Large document size limitations</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-collection"></i> Types of NoSQL Databases</h3>
                <ul>
                  <li><strong>Key-value store:</strong> Memcached, Redis, Coherence</li>
                  <li><strong>Tabular:</strong> HBase, BigTable, Accumulo</li>
                  <li><strong>Document-based:</strong> MongoDB, CouchDB, Cloudant</li>
                </ul>
              </div>
            </section>

            <section id="mongodb" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-database"></i> MongoDB Introduction</h2>
              <div className="property-card">
                <p>MongoDB is an open-source document-oriented database designed to store large-scale data and work with that data efficiently.</p>
                <ul>
                  <li>Categorized under NoSQL (Not only SQL) databases</li>
                  <li>Developed and managed by MongoDB.Inc under SSPL (Server Side Public License)</li>
                  <li>Initially released in February 2009</li>
                  <li>Provides official driver support for popular languages (C, C++, C#, Java, Python, etc.)</li>
                  <li>Used by companies like Facebook, Nokia, eBay, Adobe, Google</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-stars"></i> Features of MongoDB</h3>
                <ul>
                  <li>Schema-less Database</li>
                  <li>Document Oriented</li>
                  <li>Indexing</li>
                  <li>Scalability</li>
                  <li>Replication</li>
                  <li>Aggregation</li>
                  <li>High Performance</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-layers"></i> MongoDB Structure</h3>
                <pre className="mb-3">
Database → Collections → Documents → Fields (key-value pairs)
                </pre>
                <p>Documents are created using fields which are key-value pairs (similar to columns in relational databases).</p>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filetype-json"></i> BSON Format</h3>
                <p>MongoDB stores data in BSON (Binary JSON) format:</p>
                <ul>
                  <li>BSON = Binary representation of JSON documents</li>
                  <li>Server converts JSON to BSON for efficient storage and querying</li>
                  <li>Supports nested data (complex relations within same document)</li>
                  <li>Maximum document size: 16MB</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-arrow-left-right"></i> MongoDB vs RDBMS</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>MongoDB</th>
                      <th>RDBMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Non-relational, document-oriented</td>
                      <td>Relational</td>
                    </tr>
                    <tr>
                      <td>Suitable for hierarchical data</td>
                      <td>Not suitable for hierarchical data</td>
                    </tr>
                    <tr>
                      <td>Dynamic schema</td>
                      <td>Predefined schema</td>
                    </tr>
                    <tr>
                      <td>CAP theorem (Consistency, Availability, Partition tolerance)</td>
                      <td>ACID properties (Atomicity, Consistency, Isolation, Durability)</td>
                    </tr>
                    <tr>
                      <td>Generally faster performance</td>
                      <td>Generally slower performance</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="crud" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-arrow-repeat"></i> CRUD Operations</h2>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> Create Operations</h3>
                <p>Used to insert new documents into a collection:</p>
                <pre className="mb-3"><code>{`// Insert single document
db.collection.insertOne({
  "name": "Dhoni",
  "age": 43
});

// Insert multiple documents
db.collection.insertMany([
  {"name": "Dhoni", "age": 43},
  {"name": "Virat", "age": 37}
]);`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-eye"></i> Read Operations</h3>
                <p>Used to retrieve documents from a collection:</p>
                <pre className="mb-3"><code>{`// Find all documents
db.students.find();

// Pretty print results
db.students.find().pretty();

// Find specific documents
db.students.find({age: {$gt: 30}});`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-pencil"></i> Update Operations</h3>
                <p>Used to modify existing documents:</p>
                <pre className="mb-3"><code>{`// Update single document
db.students.updateOne(
  {name: "Virat"},
  {$set: {age: 38}}
);

// Update multiple documents
db.students.updateMany(
  {name: "Dhoni"},
  {$set: {age: 44}}
);`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> Delete Operations</h3>
                <p>Used to remove documents from a collection:</p>
                <pre className="mb-3"><code>{`// Delete single document
db.students.deleteOne({age: 37});

// Delete multiple documents
db.students.deleteMany({age: {$gt: 40}});

// Delete all documents
db.students.deleteMany({});`}</code></pre>
              </div>
            </section>

            <section id="operators" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-sliders"></i> Operators</h2>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-compare"></i> Comparison Operators</h3>
                <ul>
                  <li><code>$eq</code>: Matches values equal to specified value</li>
                  <li><code>$ne</code>: Matches values not equal to specified value</li>
                  <li><code>$gt</code>: Matches values greater than specified value</li>
                  <li><code>$gte</code>: Matches values greater than or equal to specified value</li>
                  <li><code>$lt</code>: Matches values less than specified value</li>
                  <li><code>$lte</code>: Matches values less than or equal to specified value</li>
                  <li><code>$in</code>: Matches any values specified in an array</li>
                  <li><code>$nin</code>: Matches none of the values specified in an array</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> Logical Operators</h3>
                <ul>
                  <li><code>$and</code>: Joins query clauses with logical AND</li>
                  <li><code>$or</code>: Joins query clauses with logical OR</li>
                  <li><code>$not</code>: Inverts the effect of query expressions</li>
                  <li><code>$nor</code>: Joins query clauses with logical NOR</li>
                </ul>
                <pre className="mb-3"><code>{`// Example using $and
db.collection.find({
  $and: [
    {age: {$gt: 30}},
    {name: "Dhoni"}
  ]
});

// Example using $or
db.collection.find({
  $or: [
    {age: {$lt: 30}},
    {name: "Virat"}
  ]
});`}</code></pre>
              </div>
            </section>

            <section id="datamodel" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-diagram-3"></i> Data Modeling</h2>
              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box"></i> Embedded Data Model</h3>
                <p>All related data is stored in a single document (denormalized):</p>
                <pre className="mb-3"><code>{`{
  _id: ObjectId("..."),
  Emp_ID: "10025AE336",
  Personal_details: {
    First_Name: "Radhika",
    Last_Name: "Sharma",
    Date_Of_Birth: "1995-09-26"
  },
  Contact: {
    email: "radhika_sharma.123@gmail.com",
    phone: "9848022338"
  },
  Address: {
    city: "Hyderabad",
    Area: "Madapur",
    State: "Telangana"
  }
}`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-box-arrow-up-right"></i> Normalized Data Model</h3>
                <p>Documents reference each other (similar to relational model):</p>
                <pre className="mb-3"><code>{`// Employee document
{
  _id: ObjectId("ObjectId101"),
  Emp_ID: "10025AE336"
}

// Personal details document
{
  _id: ObjectId("ObjectId102"),
  empDocID: "ObjectId101",
  First_Name: "Radhika",
  Last_Name: "Sharma",
  Date_Of_Birth: "1995-09-26"
}

// Contact document
{
  _id: ObjectId("ObjectId103"),
  empDocID: "ObjectId101",
  email: "radhika_sharma.123@gmail.com",
  phone: "9848022338"
}`}</code></pre>
              </div>
            </section>

            <section id="aggregation" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-funnel"></i> Aggregation</h2>
              <div className="property-card">
                <p>Aggregation operations process data records and return computed results. MongoDB provides three ways to perform aggregation:</p>
                <ul>
                  <li>Aggregation pipeline</li>
                  <li>Map-reduce function</li>
                  <li>Single-purpose aggregation</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-code-slash"></i> Aggregation Pipeline</h3>
                <p>The pipeline consists of stages that transform documents:</p>
                <pre className="mb-3"><code>{`db.collection.aggregate([
  { $match: { status: "A" } },
  { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } }
])`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-calculator"></i> Aggregation Expressions</h3>
                <ul>
                  <li><code>$sum</code>: Sums up defined values</li>
                  <li><code>$avg</code>: Calculates average</li>
                  <li><code>$min</code>: Gets minimum value</li>
                  <li><code>$max</code>: Gets maximum value</li>
                  <li><code>$push</code>: Inserts value to an array</li>
                  <li><code>$addToSet</code>: Inserts value to array (no duplicates)</li>
                  <li><code>$first</code>: Gets first document in group</li>
                  <li><code>$last</code>: Gets last document in group</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filter-square"></i> Pipeline Stages</h3>
                <ul>
                  <li><code>$project</code>: Selects specific fields</li>
                  <li><code>$match</code>: Filters documents</li>
                  <li><code>$group</code>: Groups documents for aggregation</li>
                  <li><code>$sort</code>: Sorts documents</li>
                  <li><code>$skip</code>: Skips documents</li>
                  <li><code>$limit</code>: Limits number of documents</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-file-earmark-text"></i> Aggregation Examples</h3>
                <pre className="mb-3"><code>{`// $group example
db.users.aggregate([
  { $group: { _id: "$city", averageAge: { $avg: "$age" } } }
]);

// $match example
db.users.aggregate([
  { $match: { age: { $gt: 30 } } }
]);

// $sort example
db.users.aggregate([
  { $sort: { age: 1 } } // 1 for ascending, -1 for descending
]);

// $limit example
db.users.aggregate([
  { $limit: 2 }
]);`}</code></pre>
              </div>
            </section>

            <section id="indexing" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-search"></i> Indexing</h2>
              <div className="property-card">
                <p>Indexes are special data structures that store a small portion of the collection's data set in an easy-to-traverse form, making queries more efficient.</p>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-plus-circle"></i> Create Index</h3>
                <pre className="mb-3"><code>{`// Create ascending index on name field
db.collection.createIndex({name: 1});

// Create descending index on age field
db.collection.createIndex({age: -1});`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-list-ul"></i> Get Indexes</h3>
                <pre className="mb-3"><code>{`// View all indexes on a collection
db.collection.getIndexes();`}</code></pre>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-trash"></i> Drop Index</h3>
                <pre className="mb-3"><code>{`// Drop single index
db.collection.dropIndex({name: 1});

// Drop multiple indexes
db.collection.dropIndexes({name: 1, age: -1});

// Drop all indexes
db.collection.dropIndexes();`}</code></pre>
              </div>
            </section>

            <section id="replication" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-files"></i> Replication</h2>
              <div className="property-card">
                <p>Replication is the process of synchronizing data across multiple servers to provide redundancy and increase data availability.</p>
                <ul>
                  <li>Protects against loss of a single server</li>
                  <li>Allows recovery from hardware failure</li>
                  <li>Enables disaster recovery</li>
                  <li>Provides high availability (24×7)</li>
                  <li>Allows maintenance without downtime</li>
                  <li>Enables read scaling</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-diagram-3"></i> Replica Set</h3>
                <p>A replica set is a group of MongoDB instances that host the same data:</p>
                <ul>
                  <li>One primary node receives all write operations</li>
                  <li>Secondary nodes apply operations from primary</li>
                  <li>Minimum 3 nodes recommended</li>
                  <li>Automatic failover and recovery</li>
                  <li>Consensus election of primary</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-terminal"></i> Setting Up Replication</h3>
                <pre className="mb-3"><code>{`// 1. Start MongoDB with replica set configuration
mongod --port 27017 --dbpath "/data/db" --replSet rs0

// 2. In MongoDB shell, initiate replica set
rs.initiate()

// 3. Add members to replica set
rs.add("mongod1.example.com:27017")
rs.add("mongod2.example.com:27017")`}</code></pre>
              </div>
            </section>

            <section id="bson" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-file-binary"></i> BSON Format</h2>
              <div className="property-card">
                <p>BSON (Binary JSON) is a binary-encoded serialization of JSON-like documents with additional data types not supported in JSON.</p>
                <h3 className="h4">Characteristics:</h3>
                <ul>
                  <li><strong>Lightweight:</strong> Minimal spatial overhead</li>
                  <li><strong>Traversable:</strong> Easy to navigate (important for MongoDB)</li>
                  <li><strong>Efficient:</strong> Fast encoding/decoding due to C data types</li>
                </ul>
              </div>

              <div className="property-card">
                <h3 className="h4"><i className="bi bi-filetype-json"></i> JSON vs BSON</h3>
                <pre className="mb-3"><code>{`// JSON Example
{
  "id": 1,
  "name": {"first": "John", "last": "Williams"},
  "awards": [
    {"award": "BadmaBhusan", "year": 2025},
    {"award": "BadmaVibhusan", "year": 2024}
  ]
}

// Same data in BSON (binary representation with additional types)`}</code></pre>
              </div>
            </section>

            <section id="datatypes" className="mb-5">
              <h2 className="h2 mb-3"><i className="bi bi-list-check"></i> MongoDB Data Types</h2>
              <div className="property-card">
                <ul>
                  <li><strong>String:</strong> UTF-8 valid strings</li>
                  <li><strong>Integer:</strong> 32-bit or 64-bit numbers</li>
                  <li><strong>Boolean:</strong> true/false values</li>
                  <li><strong>Double:</strong> Floating-point numbers</li>
                  <li><strong>Min/Max keys:</strong> For comparing against lowest/highest BSON elements</li>
                  <li><strong>Arrays:</strong> Lists or multiple values</li>
                  <li><strong>Timestamp:</strong> For recording document modifications</li>
                  <li><strong>Object:</strong> For embedded documents</li>
                  <li><strong>Null:</strong> For storing null values</li>
                  <li><strong>Symbol:</strong> Similar to string but for language symbol types</li>
                  <li><strong>Date:</strong> Stores date/time in UNIX format</li>
                  <li><strong>Object ID:</strong> Unique document identifier (12-byte)</li>
                  <li><strong>Binary data:</strong> For storing binary data</li>
                  <li><strong>Code:</strong> JavaScript code</li>
                  <li><strong>Regular expression:</strong> For regex patterns</li>
                </ul>
              </div>
            </section>
          </main>
        </div>
      </div>

      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>MongoDB Notes &copy; 2025 | Based on MongoDB documentation</p>
        </div>
      </footer>
    </div>
  );
}

export default MongoDBNotes;