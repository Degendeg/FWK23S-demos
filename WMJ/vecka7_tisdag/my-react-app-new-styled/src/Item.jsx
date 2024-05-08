function Item() {
  const styles = {
    li: {
      color: 'cyan'
    },
  }
  return (
    <div>
      <li style={styles.li}>Item</li>
      <li className="li-test">Item2</li>
      <li style={{ color: 'green' }}>Item3</li>
    </div>
  )
}
export default Item