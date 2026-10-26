import './App.css'
import Navbar from './tasks/Navbar.jsx'
import ProductCard from './tasks/ProductCard.jsx'
import WeatherCard from './tasks/WeatherCard.jsx'
import OrderTracker from './tasks/OrderTracker.jsx'

function App() {
  return (
    <main className="workbook">
      <h1>Conditional Rendering Workbook</h1>

      <section>
        <h2>Task 1: Navbar</h2>
        <div className="case-list navbar-cases">
          <Navbar user={null} notifications={0} />
          <Navbar user={{ name: 'Maria', role: 'member' }} notifications={0} />
          <Navbar user={{ name: 'Jamal', role: 'member' }} notifications={3} />
          <Navbar user={{ name: 'Priya', role: 'admin' }} notifications={12} />
        </div>
      </section>

      <section>
        <h2>Task 2: Product card</h2>
        <div className="case-grid">
          <ProductCard name="Hoodie" price={45} stock={20} />
          <ProductCard name="Headphones" price={60} salePrice={30} stock={3} />
          <ProductCard name="Phone case" price={15} stock={0} />
          <ProductCard name="Sneakers" price={120} salePrice={89.99} stock={5} />
        </div>
      </section>

      <section>
        <h2>Task 3: Weather advice card</h2>
        <div className="case-grid">
          <WeatherCard city="Newark" tempF={28} condition="snow" windMph={10} />
          <WeatherCard city="Newark" tempF={45} condition="rain" windMph={30} />
          <WeatherCard city="Newark" tempF={68} condition="sunny" windMph={5} />
          <WeatherCard city="Newark" tempF={88} condition="cloudy" windMph={26} />
          <WeatherCard city="Newark" tempF={32} condition="rain" windMph={0} />
        </div>
      </section>

      <section>
        <h2>Task 4: Food delivery order tracker</h2>
        <div className="case-grid tracker-cases">
          <OrderTracker restaurant="Corner Pizza" status="placed" etaMinutes={35} driverName="Carlos" />
          <OrderTracker restaurant="Corner Pizza" status="preparing" etaMinutes={25} driverName="Carlos" />
          <OrderTracker restaurant="Corner Pizza" status="on_the_way" etaMinutes={12} driverName="Carlos" />
          <OrderTracker restaurant="Corner Pizza" status="delivered" etaMinutes={0} driverName="Carlos" />
          <OrderTracker restaurant="Corner Pizza" status="cancelled" etaMinutes={0} driverName="Carlos" />
        </div>
      </section>

      <section className="submission-notes">
        <h2>Hint answers</h2>
        <ul>
          <li><strong>Navbar:</strong> <code>user.role === 'admin'</code> would access <code>role</code> on <code>null</code> in the logged-out case, causing a crash. The <code>user &&</code> check ensures that property is read only after a user exists.</li>
          <li><strong>Product card:</strong> Free shipping uses the final price, calculated with <code>salePrice ?? price</code>. The headphones therefore use $30 instead of the original $60, so they do not qualify.</li>
          <li><strong>Weather card:</strong> Freezing uses <code>tempF &lt;= 32</code>. Test case 5 must be freezing because 32 is included in the freezing range; <code>&lt; 32</code> would incorrectly classify it as cold.</li>
          <li><strong>Order tracker:</strong> The ETA is shown only when <code>status === 'on_the_way'</code>, not based on whether <code>etaMinutes</code> is nonzero.</li>
        </ul>

        <h2>Technique justification</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Task</th><th>Requirement</th><th>Technique</th><th>Why it fits best</th></tr>
            </thead>
            <tbody>
              <tr><td>1: Navbar</td><td>#3 Admin link</td><td><code>&amp;&amp;</code></td><td>One optional element should appear: this is simpler than either a ternary with an empty branch or an if statement before the return.</td></tr>
              <tr><td>2: Product card</td><td>#1 Stock label</td><td><code>if / else if</code></td><td>There are three outcomes separated by numeric boundaries; an if chain works clearly before the return and is easier to read than nested ternaries.</td></tr>
              <tr><td>3: Weather card</td><td>#1 Clothing advice</td><td><code>if / else if</code></td><td>Four temperature ranges require calculated text and color classes, so a pre-return if chain avoids nested ternaries and keeps each boundary explicit.</td></tr>
              <tr><td>4: Order tracker</td><td>#1 Status message</td><td><code>if / else if</code></td><td>Five mutually exclusive statuses need one message, making a pre-return status chain clearer than five independent or nested ternaries.</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default App
