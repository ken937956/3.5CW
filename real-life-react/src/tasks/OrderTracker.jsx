const steps = ['placed', 'preparing', 'on_the_way', 'delivered']
const stepNames = ['Placed', 'Preparing', 'On the way', 'Delivered']

function OrderTracker({ restaurant, status, etaMinutes, driverName }) {
  const currentStep = steps.indexOf(status)

  let statusMessage
  if (status === 'placed') {
    statusMessage = 'Order received'
  } else if (status === 'preparing') {
    statusMessage = 'The kitchen is preparing your food'
  } else if (status === 'on_the_way') {
    statusMessage = `${driverName} is on the way`
  } else if (status === 'delivered') {
    statusMessage = 'Delivered. Enjoy your meal!'
  } else if (status === 'cancelled') {
    statusMessage = 'Order cancelled'
  }

  return (
    <div className="order-tracker">
      <h3>{restaurant}</h3>
      <p className="status-message">{statusMessage}</p>

      {status !== 'cancelled' && (
        <ol className="progress-steps">
          {stepNames.map((name, index) => {
            const isDone = index <= currentStep
            const isCurrent = index === currentStep

            return (
              <li
                key={name}
                className={`${isDone ? 'step-done' : 'step-upcoming'}${isCurrent ? ' step-current' : ''}`}
              >
                <span className="step-marker">{isDone ? '✓' : ''}</span>
                <span>{name}</span>
              </li>
            )
          })}
        </ol>
      )}

      {status === 'on_the_way' && <p>Arrives in {etaMinutes} min</p>}

      {status === 'delivered' && (
        <div className="rating">
          <strong>Rate your order</strong>
          <div aria-label="Rate your order with five stars">
            <button type="button">⭐</button>
            <button type="button">⭐</button>
            <button type="button">⭐</button>
            <button type="button">⭐</button>
            <button type="button">⭐</button>
          </div>
        </div>
      )}

      {status === 'cancelled' && <button type="button" className="reorder-button">Reorder</button>}
    </div>
  )
}

export default OrderTracker
