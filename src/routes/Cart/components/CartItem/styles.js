import { COLORS } from 'Constants/theme'

const styles = {
  root: {
    padding: 15,
    marginTop: 15,
    display: 'flex',
    position: 'relative',
  },
  imageContainer: {
    textAlign: 'center'
  },
  image: {
    maxHeight: 180,
    maxWidth: '100%',
    objectFit: 'contain'
  },
  cartDetails: {
    padding: 20,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  removeItem: {
    top: 10,
    right: 10,
    opacity: 0.5,
    position: 'absolute',
  },
  name: {
    fontSize: 14,
    fontWeight: 600,
  },
  price: {
    fontSize: 15,
  },
  qty: {
    padding: 10,
    fontSize: 16,
    display: 'flex',
    fontWeight: 600,
  },
  buttons: {
    marginTop: 10,
    display: 'flex',
    alignItems: 'center',
  },
  actionBtn: {
    padding: 0,
    height: 15,
    fontSize: 25,
    minWidth: 25,
    minHeight: 25,
    fontWeight: 600,
    display: 'flex',
    color: COLORS.WHITE,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}

export default styles;