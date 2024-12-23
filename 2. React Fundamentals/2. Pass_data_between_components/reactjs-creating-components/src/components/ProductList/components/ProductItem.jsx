import styles from './product-item.module.css';
const Button = () => {
  return (
    <button className={styles.buttonStyle}> Click</button>
  )
}


// eslint-disable-next-line react/prop-types
const ProductItem = ({product, key}) => {
  return (
    <div key = {key}>
      <p>{product}</p>
      <Button/>
    </div>
  )
}

export default ProductItem
