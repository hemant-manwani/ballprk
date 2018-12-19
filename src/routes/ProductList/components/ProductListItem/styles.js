import { COLORS } from 'Constants/theme'

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
    justifyContent: 'center'
  },
  details: {
    fontSize: 12,
    fontWeight: 600,
    paddingRight: 15,
  },
  name: {
    fontSize: 12,
    fontWeight: 600,
  },
  price: {
    fontSize: 12,
    fontWeight: 600,
  },
  btnWrapper: {
    paddingLeft: 15,
  },
  buyBtn: {
    padding: 0,
    height: 15,
    fontSize: 12,
    minWidth: 50,
    minHeight: 30,
    fontWeight: 600,
    display: 'flex',
    color: COLORS.WHITE,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  }
}

export default styles;