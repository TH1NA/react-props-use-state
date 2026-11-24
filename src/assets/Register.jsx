import Button from './Button'

function Register() {
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>
        Username
        <input type="text" name="username" autoComplete="username" required />
      </label>
      <label>
        Email
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label>
        Password
        <input type="password" name="password" autoComplete="new-password" required />
      </label>
      <Button name="Register" type="submit" />
    </form>
  )
}

export default Register