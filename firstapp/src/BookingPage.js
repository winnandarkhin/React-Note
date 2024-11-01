import { useState } from "react"
function BookingForm() {

  const [state, setState] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("state", state)
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: "grid", maxWidth: "200px", gap: "20px"
    }}>
      <label for="res-date">Choose date</label>
      <input type="date" id="res-date" name="res-date" onChange={handleChange} />
      <label for="res-time">Choose time</label>
      <select id="res-time" onChange={handleChange} name="res-time">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label for="guests">Number of guests</label>
      <input type="number" name="guests" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} />
      <label for="occasion">Occasion</label>
      <select id="occasion" onChange={handleChange} name="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form >
  )
}
export function BookingPage() {
  return <BookingForm />
}