import Button from "@/shared/Button";
import styles from "./price.module.css";
import { CheckOutlined } from "@ant-design/icons";

const Price = () => {
  return (
    <div className={styles.mainLayout}>
      {/* <div> */}
      <h1>Starter</h1>
      <h1>$49</h1>
      <p>number/month</p>
      <div className={styles.lineSeparator} />
      <h3>What's Included:</h3>
      {/* </div> */}
      <ul>
        <li><CheckOutlined /> Option 1</li>
        <li><CheckOutlined /> Option 1</li>
        <li><CheckOutlined /> Option 1</li>
        <li><CheckOutlined /> Option 1</li>
      </ul>
      <Button text="Book a demo" />
    </div>
  );
};

export default Price;