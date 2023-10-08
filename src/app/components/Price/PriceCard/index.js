import Button from "@/shared/Button";
import styles from "./priceCard.module.css";
import { CheckOutlined } from "@ant-design/icons";

const PriceCard = ({ item, showButton }) => {
  const { title, Price, month, listTitle, options } = item;
  return (
    <div className={styles.mainLayout}>
      <h1>{title}</h1>
      <h1>{Price}</h1>
      <p>{month}</p>
      <div className={styles.lineSeparator} />
      <h4>{listTitle}</h4>
      <ul>
        {options.map((item, index) => (
          <li>
            <div key={index}>
              <CheckOutlined /> {item}
            </div>
          </li>
        ))}
      </ul>
      <Button text="Book a demo" />
    </div>
  );
};

export default PriceCard;
