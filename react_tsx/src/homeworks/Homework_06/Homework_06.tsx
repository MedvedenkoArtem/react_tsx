
import "./styles.css";

function Homework_06() {
    const cars: { brand: string; price: number; isDiesel: boolean }[] = [ 
         { brand: "BMW", price: 20000, isDiesel: true },
         { brand: "Mercedes", price: 22000, isDiesel: false }, 
         { brand: "Porshe", price: 50000, isDiesel: true },
         { brand: "Nissan", price: 25000, isDiesel: false },
         { brand: "Audi", price: 50000, isDiesel: true } 
        ];
  return (
    <div className="homework_06_wrapper">
      <h1>Homework 06</h1>
        <div>
          {cars.map((car, index) => (
            <div key={index} className="car_card">
              <p>{car.brand}</p>
              <p>${car.price}</p>
              <p>{car.isDiesel ? "Diesel" : "Gasoline"}</p>
            </div>
          ))}
    </div>
    </div>
  );
}

export default Homework_06;