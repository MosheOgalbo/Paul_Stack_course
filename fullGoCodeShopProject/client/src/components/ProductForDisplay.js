import React, { useReducer } from 'react'
import './ProductForDisplay.css'
import { useNavigate } from "react-router-dom";
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import RemoveIcon from '@mui/icons-material/Remove';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



const countReducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const ProductForDisplay = ({ title, image, category, price, addProductToCart, removalProductToCart }) => {

  const navigate = useNavigate()
  const initialState = { count: 0 };
  const [counChoice, dispatch] = useReducer(countReducer, initialState);
  const ClickRemoveButton = () => {
    removalProductToCart()
    if (counChoice.count === 0) {
      return
    } else {
      dispatch({ type: 'decrement' });
    }
  }

  const ClickAddButton = () => {
    addProductToCart()
    dispatch({ type: 'increment' })
  }
  return (
    <Card className="product-card">
      <CardHeader
        avatar={
          <Avatar>
            {counChoice.count}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={category}
      />

      <CardMedia
        className="product-image"
        component="img"
        image={image}
        alt="dhsuagvdsahkd"
      />

      <CardContent>
        <Typography
          paragraph
          className="product-info"
          variant="body2"
          color="GrayText">
          {title}
          <h6>${price}</h6>
        </Typography>
      </CardContent>

      {/* <CardActions > */}

        <div className='ShoppingCartButton'>
          <Button size="small" className='addButton'

            onClick={ClickAddButton}
            style={{ cursor: "pointer" }}>
            <AddShoppingCartOutlinedIcon fontSize='small'></AddShoppingCartOutlinedIcon>
          </Button>

          <Button  size="small" className='removalButton' onClick={ClickRemoveButton}
            style={{ cursor: "pointer" }}>
            <RemoveIcon fontSize='small'></RemoveIcon>
          </Button>
        </div>



        <Button size="small" onClick={() => navigate("cart")}
          style={{ cursor: "pointer" }} >
          go to cart
        </Button>

      {/* </CardActions> */}
    </Card>
  )
}

export default ProductForDisplay