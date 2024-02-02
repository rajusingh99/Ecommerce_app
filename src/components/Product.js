
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import Card from '@mui/material/Card';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid'; 
import Heart from '../Icons/Heart';

export default function Product({thumbnail, id, title, category, price,brand,description,rating,discountPercentage,product}) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
      dispatch(addToCart(product));
    };
  
  return (
    <Grid tem xs={12} sm={6} md={3} lg={4} mt={3} sx={{cursor:'pointer'}}>
        <Card sx={{ maxWidth: 345 }}  key={id}>
            <CardMedia component="img" height="194" image={thumbnail} alt="Image no found" />
            <CardContent>
                    <Typography variant="body2" color="text.secondary">{brand}</Typography>
                    <Typography fontSize={"14px"} color={'inherit'}>{description}</Typography>
                <Box display={'flex'} >
                    <Typography fontWeight={500} fontSize={"16px"} color={'#212121'}>${price}  <span style={{color:'#388e3c'}}>{discountPercentage}% off</span> </Typography>
                     <Box display={'flex'} sx={{justifyContent:'center',alignItems:'center',width:"30%"}}>
                        <CardActions >
                            <Heart id={id} handleAddToCart={handleAddToCart}/>
                        </CardActions>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    </Grid>
  );
}



// import React from 'react';


// const Product = ({ product }) => {

//   return (
//     <div>
//       <button onClick={handleAddToCart}>Add to Cart</button>
//     </div>
//   );
// };
// export default Product;
