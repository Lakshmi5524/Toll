import "./user.css"

const UserList = ({ data }) => {
  return (
    <>
      <div classNameName="app-container">
        <table>
          <thead>
            <tr>
              <th>VEHICLETYPE</th>
              <th>VEHICLENUMBER</th>
              <th>DATE/TIME</th>
              <th>TOLLNAME</th>
              <th>TARIFF</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.vehicletype}</td>
                <td>{item.vehiclenumber}</td>
                <td>{item.date}</td>
                <td>{item.tollname}</td>
                <td>{item.tariff}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserList
