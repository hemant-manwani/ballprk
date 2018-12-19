const styles = {
  root: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  image: {
    maxHeight: 180,
    maxWidth: '100%',
    borderRadius: 25,
    objectFit: 'contain'
  },
  item: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between'
  },
  details: {
    fontSize: 12,
    fontWeight: 600,
  },
  name: {
    fontSize: 12,
    fontWeight: 600,
  },
  price: {
    fontSize: 12,
    fontWeight: 600,
  },
  buyBtn: {
    height: 16,
    fontSize: 12,
    minHeight: 28,
    fontWeight: 600,
    color: '#FFFFFF',
  }
}

export default styles;