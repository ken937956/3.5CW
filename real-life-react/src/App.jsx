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
    </main>
  )
}

export default App
