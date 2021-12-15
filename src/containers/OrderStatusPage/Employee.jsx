import "../../assets/css/Employee.css";

const Employee = () => {

    return (
        <div>
            <div style={{float: 'left', margin: '30px'}}>
            <img src="/waiter.jpg" className="avatar" />
            <span className="message">Nikola je zadužen za Vašu porudžbinu.</span>
            </div>
        </div>
    )
}

export default Employee;